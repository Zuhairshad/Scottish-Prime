"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Card
        variant="paper"
        className="card-hover relative !p-8 border border-hairline overflow-hidden"
      >
        <span
          aria-hidden
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green to-brand-green"
        />
        <div className="flex items-center justify-between mb-3">
          <h2 className="t-h3">Message received</h2>
          <Badge variant="green-soft">Within 1 hr</Badge>
        </div>
        <p className="t-body text-ink/70">
          Thanks for getting in touch. A specialist from our Glasgow
          procurement team will reply within one working hour on weekdays.
          For urgent contract queries you can always call us on{" "}
          <a
            href="tel:08009888375"
            className="text-accent-green hover:underline"
          >
            0800 9888 375
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#compare"
            className="t-button bg-accent-green text-white rounded-[50px] px-4 py-[7px] press"
          >
            Run a quote while you wait →
          </Link>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="t-button text-ink border border-hairline-strong rounded-[50px] px-4 py-[7px] press hover:bg-ceramic"
          >
            Send another
          </button>
        </div>
      </Card>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get("firstName") as string || "").trim();
    const lastName = (formData.get("lastName") as string || "").trim();
    const business = (formData.get("business") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const phone = (formData.get("phone") as string || "").trim();
    const topic = formData.get("topic") as string;
    const message = (formData.get("message") as string || "").trim();

    try {
      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Contact Form",
          pageUrl: window.location.pathname,
          firstName,
          lastName,
          business,
          email,
          phone,
          topic,
          message,
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setSubmitted(true);
  };

  return (
    <Card variant="paper" className="!p-8 border border-hairline">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <Field label="First name" name="firstName" placeholder="Sarah" />
          <Field label="Last name" name="lastName" placeholder="Whitfield" />
        </div>
        <Field label="Business name" name="business" placeholder="Maven Logistics Ltd" />
        <Field label="Work email" name="email" type="email" placeholder="sarah@maven.co.uk" required />
        <Field label="Phone" name="phone" type="tel" placeholder="07700 900123" />
        <label className="block">
          <span className="t-body-sm-med text-ink block mb-1.5">
            What do you need help with?
          </span>
          <select
            name="topic"
            className="w-full h-11 rounded-[8px] px-3 t-body bg-paper border border-hairline-strong text-ink outline-none focus:border-accent-green focus:border-2"
          >
            {[
              "Get a new quote",
              "Renew an existing contract",
              "Multi-site / procurement",
              "Meter installation",
              "Existing customer support",
              "Press / partnerships",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="t-body-sm-med text-ink block mb-1.5">Message</span>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="A few words about your business and what you need..."
            className="w-full rounded-[8px] px-3 py-2.5 t-body bg-paper border border-hairline-strong text-ink placeholder:text-ink-soft outline-none focus:border-accent-green focus:border-2"
          />
        </label>
        <Button variant="primary" className="w-full" type="submit">
          Send message →
        </Button>
        <p className="t-body-sm text-ink-soft text-center">
          By submitting you agree to our{" "}
          <Link href="/legal/privacy" className="text-accent-green hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </form>
    </Card>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="t-body-sm-med text-ink block mb-1.5">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full h-11 rounded-[8px] px-3 t-body bg-paper border border-hairline-strong text-ink placeholder:text-ink-soft outline-none focus:border-accent-green focus:border-2"
      />
    </label>
  );
}
