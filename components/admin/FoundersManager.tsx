"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Save, GripVertical, ArrowUp, ArrowDown } from "lucide-react";
import { Btn, Card, Field, Input, Textarea } from "./ui";
import UploadDropzone from "./UploadDropzone";
import { useToast } from "./Toast";

type Founder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string | null;
  direction: string;
  order: number;
};

const DIRECTIONS = ["left", "up", "right"];

export default function FoundersManager() {
  const toast = useToast();
  const [items, setItems] = useState<Founder[]>([]);
  const [saving, setSaving] = useState<string | null>(null);

  const load = () => fetch("/api/admin/founders").then((r) => r.json()).then(setItems);
  useEffect(() => {
    load();
  }, []);

  const update = (id: string, patch: Partial<Founder>) =>
    setItems((prev) => prev.map((f) => (f.id === id ? { ...f, ...patch } : f)));

  const save = async (f: Founder) => {
    setSaving(f.id);
    try {
      const r = await fetch(`/api/admin/founders/${f.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!r.ok) throw new Error();
      toast("Fundador salvo!");
    } catch {
      toast("Erro ao salvar", "error");
    } finally {
      setSaving(null);
    }
  };

  const create = async () => {
    const r = await fetch("/api/admin/founders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Novo fundador",
        role: "Cargo",
        bio: "",
        direction: "up",
        order: items.length,
      }),
    });
    if (r.ok) {
      toast("Fundador criado!");
      load();
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Remover este fundador?")) return;
    const r = await fetch(`/api/admin/founders/${id}`, { method: "DELETE" });
    if (r.ok) {
      toast("Fundador removido");
      load();
    }
  };

  const move = async (f: Founder, dir: -1 | 1) => {
    const sorted = [...items].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((x) => x.id === f.id);
    const swap = sorted[idx + dir];
    if (!swap) return;
    await Promise.all([
      fetch(`/api/admin/founders/${f.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: swap.order }),
      }),
      fetch(`/api/admin/founders/${swap.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: f.order }),
      }),
    ]);
    load();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground/55">{items.length} fundador(es)</p>
        <Btn onClick={create}>
          <Plus size={16} /> Adicionar
        </Btn>
      </div>

      {items.map((f, i) => (
        <Card key={f.id}>
          <div className="mb-3 flex items-center gap-2 text-foreground/40">
            <GripVertical size={16} />
            <span className="text-xs font-semibold uppercase tracking-wide">Ordem {f.order}</span>
            <div className="ml-auto flex gap-1">
              <button onClick={() => move(f, -1)} disabled={i === 0} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowUp size={15} />
              </button>
              <button onClick={() => move(f, 1)} disabled={i === items.length - 1} className="rounded-lg p-1.5 hover:bg-white/10 disabled:opacity-30">
                <ArrowDown size={15} />
              </button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nome">
              <Input value={f.name} onChange={(e) => update(f.id, { name: e.target.value })} />
            </Field>
            <Field label="Cargo">
              <Input value={f.role} onChange={(e) => update(f.id, { role: e.target.value })} />
            </Field>
            <div className="md:col-span-2">
              <Field label="Bio">
                <Textarea rows={3} value={f.bio} onChange={(e) => update(f.id, { bio: e.target.value })} />
              </Field>
            </div>
            <Field label="Direção da animação">
              <select
                value={f.direction}
                onChange={(e) => update(f.id, { direction: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground focus:border-ocean-400 focus:outline-none"
              >
                {DIRECTIONS.map((d) => (
                  <option key={d} value={d}>
                    {d === "left" ? "Da esquerda" : d === "right" ? "Da direita" : "De baixo"}
                  </option>
                ))}
              </select>
            </Field>
            <UploadDropzone
              label="Foto"
              value={f.photoUrl}
              onChange={(url) => update(f.id, { photoUrl: url })}
            />
          </div>
          <div className="mt-4 flex gap-2">
            <Btn onClick={() => save(f)} disabled={saving === f.id}>
              <Save size={15} /> {saving === f.id ? "Salvando..." : "Salvar"}
            </Btn>
            <Btn variant="danger" onClick={() => remove(f.id)}>
              <Trash2 size={15} /> Remover
            </Btn>
          </div>
        </Card>
      ))}
    </div>
  );
}
