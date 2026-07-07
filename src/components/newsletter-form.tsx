"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-2 max-w-md h-11 px-4 rounded-[50px] bg-gold/15 border border-gold/30 t-body-sm-med text-gold">
        <span aria-hidden>✓</span>
        <span>You're subscribed — first briefing lands next Monday.</span>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string || "").trim();

    try {
      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Newsletter Form",
          pageUrl: window.location.pathname,
          email,
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 max-w-md"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="you@yourbusiness.co.uk"
        className="flex-1 h-11 rounded-[50px] px-4 t-body bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-gold focus:bg-white/15"
      />
      <button
        type="submit"
        className="t-button bg-gold text-house-green rounded-[50px] px-5 py-[7px] press hover:brightness-105"
      >
        Subscribe
      </button>
    </form>
  );
}
