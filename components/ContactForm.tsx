"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type?: "success" | "error"; message?: string }>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { id, value } = e.target;
    setForm((s) => ({ ...s, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ type: "success", message: "Message sent. We'll contact you soon." });
        setForm({ fullName: "", companyName: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input id="fullName" value={form.fullName} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input id="companyName" value={form.companyName} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="Acme Corp" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input id="email" value={form.email} onChange={handleChange} type="email" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="john@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input id="phone" value={form.phone} onChange={handleChange} type="tel" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
        <select id="service" value={form.service} onChange={handleChange} className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow bg-white">
          <option value="">Select a service...</option>
          <option>Corporate Leasing & Consulting</option>
          <option>Real Estate Advisory</option>
          <option>Consulting on Cost Optimization</option>
          <option>Building Construction</option>
          <option>Retail Interior & Fitout</option>
          <option>Repair & Maintenance</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea id="message" value={form.message} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="Tell us about your requirement..."></textarea>
      </div>

      {status.message && (
        <div className={status.type === "success" ? "text-green-600" : "text-red-600"}>
          {status.message}
        </div>
      )}

      <button type="submit" disabled={loading} className="w-full bg-brand-dark text-white font-medium px-8 py-4 uppercase tracking-wider text-sm transition-colors hover:bg-brand-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark disabled:opacity-50">
        {loading ? "Sending..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
