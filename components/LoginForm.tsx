"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/gerencial";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.ok) {
      router.push(callbackUrl);
      router.refresh();
    } else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#05070f] px-4">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-ocean-500/35 to-ocean-700/15 blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-24 left-[-10%] h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-ocean-600/30 to-ocean-400/15 blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="grid-lines" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm"
      >
        <div className="glass-strong border-gradient glow rounded-3xl p-8">
          <div className="mb-8 text-center">
            <div className="flex justify-center">
              <Logo />
            </div>
            <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-ocean-400">
              Painel administrativo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={16} />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-foreground placeholder-foreground/40 transition-colors focus:border-ocean-400 focus:outline-none focus:ring-2 focus:ring-ocean-500/30"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={16} />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-10 py-3 text-sm text-foreground placeholder-foreground/40 transition-colors focus:border-ocean-400 focus:outline-none focus:ring-2 focus:ring-ocean-500/30"
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-ocean-300"
                aria-label={showPass ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {error && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="glow-sm mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ocean-600 to-ocean-500 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_28px_-4px_rgba(95,184,250,0.7)] disabled:opacity-60"
            >
              <AnimatePresence mode="wait" initial={false}>
                {loading ? (
                  <motion.span
                    key="spin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  />
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Entrar <ArrowRight size={15} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </div>
        <p className="mt-5 text-center text-xs text-foreground/40">
          NexiumCode — acesso restrito à administração
        </p>
      </motion.div>
    </div>
  );
}
