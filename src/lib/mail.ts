import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key_for_build");

export async function sendContactEmail(data: {
  name: string;
  phone: string;
  message: string;
}) {
  // Skip sending email if no API key is provided (for build)
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "dummy_key_for_build") {
    return { success: true, data: null };
  }

  try {
    const { data: result, error } = await resend.emails.send({
      from: "Website <no-reply@bobsgroen.nl>",
      to: ["info@bobsgroen.nl"],
      subject: `Nieuwe lead via website: ${data.name}`,
      html: `
        <h2>Nieuwe lead via website</h2>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Telefoon:</strong> ${data.phone}</p>
        <p><strong>Bericht:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
