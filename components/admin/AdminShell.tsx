"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Users, Boxes, Sparkles, Gem, Settings as Cog, LogOut, ExternalLink, Globe } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ToastProvider } from "./Toast";
import FoundersManager from "./FoundersManager";
import ProductsManager from "./ProductsManager";
import ServicesManager from "./ServicesManager";
import ValuesManager from "./ValuesManager";
import SettingsManager from "./SettingsManager";
import HostedSitesManager from "./HostedSitesManager";

const TABS = [
  { id: "settings", label: "Configurações", icon: Cog },
  { id: "founders", label: "Fundadores", icon: Users },
  { id: "products", label: "Produtos", icon: Boxes },
  { id: "hosted-sites", label: "Sites Hospedados", icon: Globe },
  { id: "services", label: "Serviços", icon: Sparkles },
  { id: "values", label: "Valores", icon: Gem },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function AdminShell({ userName }: { userName?: string | null }) {
  const [tab, setTab] = useState<TabId>("settings");
  const active = TABS.find((t) => t.id === tab)!;

  return (
    <ToastProvider>
      <div className="flex min-h-screen bg-[#05070f] text-foreground">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-white/10 bg-[#080b18] md:flex">
          <div className="border-b border-white/10 p-5">
            <Logo />
            <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ocean-400">
              Painel
            </p>
          </div>
          <nav className="flex-1 space-y-1 p-3">
            {TABS.map((t) => {
              const isActive = t.id === tab;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-ocean-500/15 text-ocean-200 ring-1 ring-ocean-400/40 shadow-[0_0_20px_-6px_rgba(95,184,250,0.6)]"
                      : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  <t.icon size={18} />
                  {t.label}
                </button>
              );
            })}
          </nav>
          <div className="space-y-1 border-t border-white/10 p-3">
            <a
              href="/"
              target="_blank"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/55 hover:bg-white/5 hover:text-foreground"
            >
              <ExternalLink size={18} /> Ver site
            </a>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/55 hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut size={18} /> Sair
            </button>
          </div>
        </aside>

        <div className="flex-1">
          {/* Topbar */}
          <header className="glass-strong sticky top-0 z-20 flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ocean-400">
                NexiumCode
              </p>
              <h1 className="font-display text-lg font-bold tracking-tight text-foreground">{active.label}</h1>
            </div>
            <div className="flex items-center gap-3">
              {userName && (
                <span className="hidden text-sm text-foreground/55 sm:inline">Olá, {userName.split(" ")[0]}</span>
              )}
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="rounded-xl bg-ocean-500/15 p-2 text-ocean-200 hover:bg-ocean-500/25 md:hidden"
                aria-label="Sair"
              >
                <LogOut size={18} />
              </button>
            </div>
          </header>

          {/* Mobile tabs */}
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 bg-[#080b18] px-4 py-3 md:hidden">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${
                  t.id === tab ? "bg-ocean-600 text-white" : "bg-white/5 text-foreground/70"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <main className="mx-auto max-w-4xl p-5 md:p-8">
            <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
              {tab === "settings" && <SettingsManager />}
              {tab === "founders" && <FoundersManager />}
              {tab === "products" && <ProductsManager />}
              {tab === "hosted-sites" && <HostedSitesManager />}
              {tab === "services" && <ServicesManager />}
              {tab === "values" && <ValuesManager />}
            </motion.div>
          </main>
        </div>
      </div>
    </ToastProvider>
  );
}
