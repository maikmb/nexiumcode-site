"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save, Star, ArrowUp, ArrowDown } from "lucide-react";
import { Btn, Card, Field, Input, Textarea } from "./ui";
import UploadDropzone from "./UploadDropzone";
import { useToast } from "./Toast";

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoUrl: string | null;
  url: string | null;
  gradient: string;
  featured: boolean;
  order: number;
};

const GRADIENTS = [
  "from-ocean-500 via-ocean-600 to-ocean-800",
  "from-ocean-400 to-ocean-600",
  "from-ocean-600 to-ocean-900",
  "from-ocean-500 to-ocean-700",
  "from-ocean-400 to-ocean-700",
];

export default function ProductsManager() {
  const toast = useToast();
  const [items, setItems] = useState<Product[]>([]);
  const [saving, setSaving] = useState<string | null>(null);

  const load = () => fetch("/api/admin/products").then((r) => r.json()).then(setItems);
  useEffect(() => {
    load();
  }, []);

  const update = (id: string, patch: Partial<Product>) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const save = async (p: Product) => {
    setSaving(p.id);
    try {
      const r = await fetch(`/api/admin/products/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
      if (!r.ok) throw new Error();
      toast("Produto salvo!");
    } catch {
      toast("Erro ao salvar", "error");
    } finally {
      setSaving(null);
    }
  };

  const create = async () => {
    const r = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Novo produto",
        tagline: "Subtítulo",
        description: "",
        gradient: GRADIENTS[3],
        featured: false,
        order: items.length,
      }),
    });
    if (r.ok) {
      toast("Produto criado!");
      load();
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Remover este produto?")) return;
    const r = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    if (r.ok) {
      toast("Produto removido");
      load();
    }
  };

  const move = async (p: Product, dir: -1 | 1) => {
    const sorted = [...items].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((x) => x.id === p.id);
    const swap = sorted[idx + dir];
    if (!swap) return;
    await Promise.all([
      fetch(`/api/admin/products/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: swap.order }),
      }),
      fetch(`/api/admin/products/${swap.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: p.order }),
      }),
    ]);
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground/55">{items.length} produto(s)</p>
        <Btn onClick={create}>
          <Plus size={16} /> Adicionar
        </Btn>
      </div>

      {items.map((p, i) => (
        <Card key={p.id}>
          <div className="mb-3 flex items-center gap-2">
            <span
              className={`h-6 w-6 rounded-lg bg-gradient-to-br ${p.gradient}`}
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
              Ordem {p.order}
            </span>
            <div className="ml-auto flex items-center gap-1">
              <button
                onClick={() => update(p.id, { featured: !p.featured })}
                title="Destaque (carro-chefe)"
                className={`rounded-lg p-1.5 ${p.featured ? "text-amber-500" : "text-foreground/30 hover:bg-white/10"}`}
              >
                <Star size={16} fill={p.featured ? "currentColor" : "none"} />
              </button>
              <button onClick={() => move(p, -1)} disabled={i === 0} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowUp size={15} />
              </button>
              <button onClick={() => move(p, 1)} disabled={i === items.length - 1} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowDown size={15} />
              </button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nome">
              <Input value={p.name} onChange={(e) => update(p.id, { name: e.target.value })} />
            </Field>
            <Field label="Tagline">
              <Input value={p.tagline} onChange={(e) => update(p.id, { tagline: e.target.value })} />
            </Field>
            <div className="md:col-span-2">
              <Field label="Descrição">
                <Textarea rows={3} value={p.description} onChange={(e) => update(p.id, { description: e.target.value })} />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Link do produto (abre em nova aba ao clicar no card)">
                <Input
                  type="url"
                  placeholder="https://aquibruce.com.br"
                  value={p.url ?? ""}
                  onChange={(e) => update(p.id, { url: e.target.value })}
                />
              </Field>
            </div>
            <Field label="Gradiente">
              <select
                value={p.gradient}
                onChange={(e) => update(p.id, { gradient: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground focus:border-ocean-400 focus:outline-none"
              >
                {GRADIENTS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </Field>
            <UploadDropzone
              label="Logo"
              value={p.logoUrl}
              onChange={(url) => update(p.id, { logoUrl: url })}
            />
          </div>
          <div className="mt-4 flex gap-2">
            <Btn onClick={() => save(p)} disabled={saving === p.id}>
              <Save size={15} /> {saving === p.id ? "Salvando..." : "Salvar"}
            </Btn>
            <Btn variant="danger" onClick={() => remove(p.id)}>
              <Trash2 size={15} /> Remover
            </Btn>
          </div>
        </Card>
      ))}
    </div>
  );
}
