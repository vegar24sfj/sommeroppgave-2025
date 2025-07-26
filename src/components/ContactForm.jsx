import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // status-melding: success/error/loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Enkel epostvalidering
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    // Enkel validering
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Vennligst fyll ut alle felt.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus("Vennligst oppgi en gyldig e-postadresse.");
      return;
    }

    setStatus("Sender...");

    // Simulerer API-kall med timeout
    setTimeout(() => {
      setStatus("Meldingen din er sendt! Takk for at du tok kontakt.");
      setFormData({ name: "", email: "", subject: "", message: "" }); // nullstill skjema
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg text-white animate-fadeInUp" // Legger til animasjonen her
    >
      <h2 className="text-2xl mb-6 text-center font-bold">Kontakt meg</h2>

      {status && (
        <p
          className={`mb-4 p-2 rounded ${
            status.startsWith("Meldingen") ? "bg-green-700" : "bg-red-700"
          }`}
        >
          {status}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Navn"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-post"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Emne"
          value={formData.subject}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700"
          required
        />

        <textarea
          name="message"
          placeholder="Din melding"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700"
          rows="5"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold transition"
        >
          Send melding
        </button>
      </form>
    </section>
  );
}
