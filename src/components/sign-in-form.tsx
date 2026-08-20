"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function SignInForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Card variant="paper" className="p-8 md:p-10 border border-hairline">
        <div className="flex items-center justify-between mb-3">
          <h2 className="t-h3">Almost there</h2>
          <Badge variant="green-soft">Demo</Badge>
        </div>
        <p className="t-body text-ink/70">
          myHUB authentication isn't wired up yet on this preview. Once we
          connect the auth provider, this is where your live contract
          dashboard, invoice archive and renewal alerts will appear.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#compare"
            className="t-button bg-accent-green text-white rounded-[50px] px-4 py-[7px] press"
          >
            Run a quote instead →
          </Link>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="t-button text-ink border border-hairline-strong rounded-[50px] px-4 py-[7px] press hover:bg-ceramic"
          >
            Back to sign in
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="paper" className="p-8 md:p-10 border border-hairline">
      <div className="flex items-center justify-between mb-2">
        <h2 className="t-h3">Sign in</h2>
        <Badge variant="green-soft">Secure</Badge>
      </div>
      <p className="t-body-sm text-ink-soft">
        Welcome back. Sign in to manage your business energy.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="mt-6 space-y-4"
      >
        <label className="block">
          <span className="t-body-sm-med text-ink block mb-1.5">Work email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@yourbusiness.co.uk"
            className="w-full h-11 rounded-[8px] px-3 t-body bg-paper border border-hairline-strong text-ink placeholder:text-ink-soft outline-none focus:border-accent-green focus:border-2"
          />
        </label>
        <label className="block">
          <span className="t-body-sm-med text-ink block mb-1.5">Password</span>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            className="w-full h-11 rounded-[8px] px-3 t-body bg-paper border border-hairline-strong text-ink placeholder:text-ink-soft outline-none focus:border-accent-green focus:border-2"
          />
        </label>

        <label className="flex items-center gap-2 text-ink t-body-sm">
          <input
            type="checkbox"
            className="rounded border-hairline-strong"
          />
          Remember me on this device
        </label>

        <Button variant="primary" className="w-full" type="submit">
          Sign in →
        </Button>

        <p className="t-body-sm text-ink-soft text-center pt-2">
          New to Scott Prime?{" "}
          <Link
            href="/#compare"
            className="text-accent-green hover:underline t-body-sm-med"
          >
            Get a quote first
          </Link>
        </p>
      </form>
    </Card>
  );
}
