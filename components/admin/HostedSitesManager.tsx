"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save, ArrowUp, ArrowDown } from "lucide-react";
import { Btn, Card, Field, Input, Textarea } from "./ui";
import { useToast } from "./Toast";

type HostedSite = {
  id: string;
  name: string;
  url: string;
  description: string | null;
  category: string | null;
  order: number;
};

export default function HostedSitesManager() {
  const toast = useToast();
  const [items, setItems] = useState<HostedSite[]>([]);
  const [saving, setSaving] = useState<string | null>(null);

  const load = () =>
    fetch("/api/admin/hosted-sites").then((r) => r.json()).then(setItems);

  useEffect(() => { load(); }, []);

  const update = (id: string, patch: Partial<HostedSite>) =>
    setItems((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const save = async (s: HostedSite) => {
    setSaving(s.id);
    try {
      const r = await fetch(`/api/admin/hosted-sites/${s.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(s),
      });
      if (!r.ok) throw new Error();
      toast("Site salvo!");
    } catch {
      toast("Erro ao salvar", "error");
    } finally {
      setSaving(null);
    }
  };

  const create = async () => {
    const r = await fetch("/api/admin/hosted-sites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Novo site", url: "https://", order: items.length }),
    });
    if (r.ok) { toast("Site adicionado!"); load(); }
  };

  const remove = async (id: string) => {
    if (!confirm("Remover este site?")) return;
    const r = await fetch(`/api/admin/hosted-sites/${id}`, { method: "DELETE" });
    if (r.ok) { toast("Site removido"); load(); }
  };

  const move = async (s: HostedSite, dir: -1 | 1) => {
    const sorted = [...items].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((x) => x.id === s.id);
    const swap = sorted[idx + dir];
    if (!swap) return;
    await Promise.all([
      fetch(`/api/admin/hosted-sites/${s.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: swap.order }),
      }),
      fetch(`/api/admin/hosted-sites/${swap.id}`, {
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
        <p className="text-sm text-foreground/55">{items.length} site(s) hospedado(s)</p>
        <Btn onClick={create}>
          <Plus size={16} /> Adicionar
        </Btn>
      </div>

      {items.length === 0 && (
        <p className="rounded-xl border border-white/10 py-10 text-center text-sm text-foreground/40">
          Nenhum site cadastrado ainda. Clique em Adicionar para começar.
        </p>
      )}

      {items.map((s, i) => (
        <Card key={s.id}>
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-xs text-foreground/40">Ordem {s.order}</span>
            <div className="ml-auto flex items-center gap-1">
              <button onClick={() => move(s, -1)} disabled={i === 0} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowUp size={15} />
              </button>
              <button onClick={() => move(s, 1)} disabled={i === items.length - 1} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowDown size={15} />
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nome do site">
              <Input
                value={s.name}
                onChange={(e) => update(s.id, { name: e.target.value })}
                placeholder="Empresa XYZ"
              />
            </Field>
            <Field label="URL (com https://)">
              <Input
                type="url"
                value={s.url}
                onChange={(e) => update(s.id, { url: e.target.value })}
                placeholder="https://empresaxyz.com.br"
              />
            </Field>
            <Field label="Categoria (opcional)">
              <Input
                value={s.category ?? ""}
                onChange={(e) => update(s.id, { category: e.target.value })}
                placeholder="E-commerce, Institucional, SaaS..."
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Descrição curta (opcional)">
                <Textarea
                  rows={2}
                  value={s.description ?? ""}
                  onChange={(e) => update(s.id, { description: e.target.value })}
                  placeholder="Uma linha descrevendo o projeto"
                />
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
