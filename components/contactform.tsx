'use client'
import { useState, type FormEvent } from "react";
import { Send, Check, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-bordes bg-main-fondo/70 px-4 py-3 font-sans text-base text-texto outline-none transition placeholder:text-texto-secundario focus:border-magenta-accent focus:ring-2 focus:ring-magenta-accent/30 md:text-sm";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

 /*  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; 
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  } */

  return (
    <form /* onSubmit={onSubmit}  */className="flex w-full max-w-lg flex-col gap-3 text-left">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <input
          name="name"
          required
          maxLength={80}
          placeholder="Your name"
          autoComplete="name"
          className={field}
        />
        <input
          name="email"
          type="email"
          required
          maxLength={120}
          placeholder="Your email"
          autoComplete="email"
          className={field}
        />
      </div>

      <textarea
        name="message"
        required
        minLength={10}
        maxLength={2000}
        rows={5}
        placeholder="Tell me about your project..."
        className={`${field} resize-none`}
      />

      
      
      
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px]"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-magenta-accent px-6 font-sans text-sm font-semibold text-black transition duration-200 hover:brightness-110 disabled:opacity-70"
      >
        {status === "sending" && (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        )}
        {status === "sent" && (
          <>
            <Check className="size-4" /> Sent!
          </>
        )}
        {(status === "idle" || status === "error") && (
          <>
            Send message <Send className="size-4" />
          </>
        )}
      </button>

      <p aria-live="polite" className="min-h-5 text-center font-mono text-xs">
        {status === "sent" && (
          <span className="text-magenta-accent">Thanks! I'll get back to you soon.</span>
        )}
        {status === "error" && (
          <span className="text-red-400">Something went wrong. Try again or email me directly.</span>
        )}
      </p>
    </form>
  );
}