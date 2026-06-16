"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save, ArrowUp, ArrowDown } from "lucide-react";
import { Btn, Card, Field, Input, Textarea } from "./ui";
import { useToast } from "./Toast";

type Value = { id: string; title: string; description: string; order: number };

export default function ValuesManager() {
  const toast = useToast();
  const [items, setItems] = useState<Value[]>([]);
  const [saving, setSaving] = useState<string | null>(null);

  const load = () => fetch("/api/admin/values").then((r) => r.json()).then(setItems);
  useEffect(() => {
    load();
  }, []);

  const update = (id: string, patch: Partial<Value>) =>
    setItems((prev) => prev.map((v) => (v.id === id ? { ...v, ...patch } : v)));

  const save = async (v: Value) => {
    setSaving(v.id);
    try {
      const r = await fetch(`/api/admin/values/${v.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      if (!r.ok) throw new Error();
      toast("Valor salvo!");
    } catch {
      toast("Erro ao salvar", "error");
    } finally {
      setSaving(null);
    }
  };

  const create = async () => {
    const r = await fetch("/api/admin/values", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Novo valor", description: "", order: items.length }),
    });
    if (r.ok) {
      toast("Valor criado!");
      load();
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Remover este valor?")) return;
    const r = await fetch(`/api/admin/values/${id}`, { method: "DELETE" });
    if (r.ok) {
      toast("Valor removido");
      load();
    }
  };

  const move = async (v: Value, dir: -1 | 1) => {
    const sorted = [...items].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((x) => x.id === v.id);
    const swap = sorted[idx + dir];
    if (!swap) return;
    await Promise.all([
      fetch(`/api/admin/values/${v.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: swap.order }),
      }),
      fetch(`/api/admin/values/${swap.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: v.order }),
      }),
    ]);
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground/55">{items.length} valor(es)</p>
        <Btn onClick={create}>
          <Plus size={16} /> Adicionar
        </Btn>
      </div>

      {items.map((v, i) => (
        <Card key={v.id}>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ocean-500/10 ring-1 ring-ocean-400/30 text-xs font-extrabold text-ocean-300">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-foreground/40">Ordem {v.order}</span>
            <div className="ml-auto flex gap-1">
              <button onClick={() => move(v, -1)} disabled={i === 0} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowUp size={15} />
              </button>
              <button onClick={() => move(v, 1)} disabled={i === items.length - 1} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowDown size={15} />
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            <Field label="Título">
              <Input value={v.title} onChange={(e) => update(v.id, { title: e.target.value })} />
            </Field>
            <Field label="Descrição">
              <Textarea rows={2} value={v.description} onChange={(e) => update(v.id, { description: e.target.value })} />
            </Field>
          </div>
          <div className="mt-4 flex gap-2">
            <Btn onClick={() => save(v)} disabled={saving === v.id}>
              <Save size={15} /> {saving === v.id ? "Salvando..." : "Salvar"}
            </Btn>
            <Btn variant="danger" onClick={() => remove(v.id)}>
              <Trash2 size={15} /> Remover
            </Btn>
          </div>
        </Card>
      ))}
    </div>
  );
}
