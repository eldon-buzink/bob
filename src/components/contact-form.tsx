"use client";

import { useState } from "react";
import { sendContactEmail } from "@/lib/mail";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setState("sent");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setState("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (state === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-lg font-semibold mb-2">
          Bedankt voor uw bericht!
        </div>
        <p className="text-green-700">
          We hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Naam *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="input w-full"
          placeholder="Uw volledige naam"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefoonnummer *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="input w-full"
          placeholder="06-12345678"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="textarea w-full"
          placeholder="Vertel ons wat u voor uw tuin wilt..."
        />
      </div>

      {state === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 text-sm">
            Er is een fout opgetreden. Probeer het opnieuw of bel ons direct.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn btn-primary w-full py-3 text-lg"
      >
        {state === "loading" ? "Verzenden..." : "Vraag Gratis Offerte"}
      </button>
    </form>
  );
}
