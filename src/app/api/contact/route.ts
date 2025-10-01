import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht" },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({ name, phone, message });

    if (!result.success) {
      return NextResponse.json(
        { error: "Er is een fout opgetreden bij het verzenden" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Er is een fout opgetreden" },
      { status: 500 }
    );
  }
}
