"use client";

import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-foreground/55">
        {label}
      </span>
      {children}
    </label>
  );
}

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder-foreground/40 transition-colors focus:border-ocean-400 focus:outline-none focus:ring-2 focus:ring-ocean-500/30";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`${fieldClasses} ${props.className ?? ""}`}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${fieldClasses} ${props.className ?? ""}`}
    />
  );
}

export function Btn({
  children,
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "danger";
} & InputHTMLAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-ocean-600 to-ocean-500 text-white hover:shadow-[0_0_22px_-4px_rgba(95,184,250,0.7)]"
      : variant === "danger"
        ? "bg-red-500/10 text-red-300 hover:bg-red-500/20"
        : "bg-white/5 text-ocean-200 hover:bg-white/10";
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all disabled:opacity-60 ${styles} ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`glass rounded-2xl p-5 ${className}`}
    >
      {children}
    </div>
  );
}
