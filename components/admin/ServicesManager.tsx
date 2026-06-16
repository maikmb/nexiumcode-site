"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save, ArrowUp, ArrowDown } from "lucide-react";
import { Btn, Card, Field, Input, Textarea } from "./ui";
import { useToast } from "./Toast";
import { SERVICE_ICON_KEYS, serviceIcon } from "@/lib/serviceIcons";

type Service = {
  id: string;
  title: string;
  description: string;
  iconKey: string;
  order: number;
};

export default function ServicesManager() {
  const toast = useToast();
  const [items, setItems] = useState<Service[]>([]);
  const [saving, setSaving] = useState<string | null>(null);

  const load = () => fetch("/api/admin/services").then((r) => r.json()).then(setItems);
  useEffect(() => {
    load();
  }, []);

  const update = (id: string, patch: Partial<Service>) =>
    setItems((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const save = async (s: Service) => {
    setSaving(s.id);
    try {
      const r = await fetch(`/api/admin/services/${s.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(s),
      });
      if (!r.ok) throw new Error();
      toast("Serviço salvo!");
    } catch {
      toast("Erro ao salvar", "error");
    } finally {
      setSaving(null);
    }
  };

  const create = async () => {
    const r = await fetch("/api/admin/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Novo serviço", description: "", iconKey: "spark", order: items.length }),
    });
    if (r.ok) {
      toast("Serviço criado!");
      load();
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Remover este serviço?")) return;
    const r = await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    if (r.ok) {
      toast("Serviço removido");
      load();
    }
  };

  const move = async (s: Service, dir: -1 | 1) => {
    const sorted = [...items].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((x) => x.id === s.id);
    const swap = sorted[idx + dir];
    if (!swap) return;
    await Promise.all([
      fetch(`/api/admin/services/${s.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: swap.order }),
      }),
      fetch(`/api/admin/services/${swap.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: s.order }),
      }),
    ]);
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground/55">{items.length} serviço(s)</p>
        <Btn onClick={create}>
          <Plus size={16} /> Adicionar
        </Btn>
      </div>

      {items.map((s, i) => (
        <Card key={s.id}>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-ocean-500 to-ocean-700 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {serviceIcon(s.iconKey)}
              </svg>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-foreground/40">Ordem {s.order}</span>
            <div className="ml-auto flex gap-1">
              <button onClick={() => move(s, -1)} disabled={i === 0} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowUp size={15} />
              </button>
              <button onClick={() => move(s, 1)} disabled={i === items.length - 1} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowDown size={15} />
              </button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Título">
              <Input value={s.title} onChange={(e) => update(s.id, { title: e.target.value })} />
            </Field>
            <Field label="Ícone">
              <select
                value={s.iconKey}
                onChange={(e) => update(s.id, { iconKey: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground focus:border-ocean-400 focus:outline-none"
              >
                {SERVICE_ICON_KEYS.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Descrição">
                <Textarea rows={2} value={s.description} onChange={(e) => update(s.id, { description: e.target.value })} />
              </Field>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Btn onClick={() => save(s)} disabled={saving === s.id}>
              <Save size={15} /> {saving === s.id ? "Salvando..." : "Salvar"}
            </Btn>
            <Btn variant="danger" onClick={() => remove(s.id)}>
              <Trash2 size={15} /> Remover
            </Btn>
          </div>
        </Card>
      ))}
    </div>
  );
}
