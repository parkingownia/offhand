"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Static hosting mode: local-only transition without backend auth.
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (email.trim() && password.trim()) {
        router.push("/panel");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[color:var(--portal-muted)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-[color:var(--portal-border)] bg-[#0c1037]/80 px-3 py-2 text-[var(--foreground)] outline-none ring-[color:var(--portal-accent)] focus:ring-2"
          placeholder="admin@offhand.local"
          required
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[color:var(--portal-muted)]"
        >
          Hasło
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-lg border border-[color:var(--portal-border)] bg-[#0c1037]/80 px-3 py-2 text-[var(--foreground)] outline-none ring-[color:var(--portal-accent)] focus:ring-2"
          placeholder="offhand123"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[color:var(--portal-accent)] px-4 py-2.5 font-semibold text-[#2d1b08] transition hover:bg-[#ffad58] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Logowanie..." : "Zaloguj się"}
      </button>
    </form>
  );
}
