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
        <label htmlFor="email" className="block text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300 focus:ring-2"
          placeholder="admin@offhand.local"
          required
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-slate-200"
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
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300 focus:ring-2"
          placeholder="offhand123"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-cyan-400 px-4 py-2.5 font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Logowanie..." : "Zaloguj się"}
      </button>
    </form>
  );
}
