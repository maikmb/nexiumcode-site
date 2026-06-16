"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { Btn, Card, Field, Input, Textarea } from "./ui";
import { useToast } from "./Toast";

type Settings = Record<string, string>;

const FIELDS: { key: string; label: string; type: "input" | "textarea" }[] = [
  { key: "whatsappNumber", label: "Número do WhatsApp (DDI+DDD+nº, só dígitos)", type: "input" },
  { key: "whatsappMessage", label: "Mensagem padrão do WhatsApp", type: "textarea" },
  { key: "contactEmail", label: "E-mail de contato", type: "input" },
  { key: "heroBadge", label: "Hero — selo (badge)", type: "input" },
  { key: "heroTitle", label: "Hero — título", type: "input" },
  { key: "heroSubtitle", label: "Hero — subtítulo", type: "textarea" },
  { key: "aboutText", label: "Texto da seção Sobre", type: "textarea" },
  { key: "mission", label: "Missão", type: "textarea" },
  { key: "vision", label: "Visão", type: "textarea" },
];

export default function SettingsManager() {
  const toast = useToast();
  const [data, setData] = useState<Settings>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then(setData);
  }, []);

  const set = (key: string, value: string) => setData((d) => ({ ...d, [key]: value }));

  const save = async () => {
    setSaving(true);
    try {
      const r = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error();
      toast("Configurações salvas!");
    } catch {
      toast("Erro ao salvar", "error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <div className="grid gap-4 md:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.key} className={f.type === "textarea" ? "md:col-span-2" : ""}>
            <Field label={f.label}>
              {f.type === "textarea" ? (
                <Textarea rows={3} value={data[f.key] ?? ""} onChange={(e) => set(f.key, e.target.value)} />
              ) : (
                <Input value={data[f.key] ?? ""} onChange={(e) => set(f.key, e.target.value)} />
              )}
            </Field>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Btn onClick={save} disabled={saving}>
          <Save size={15} /> {saving ? "Salvando..." : "Salvar configurações"}
        </Btn>
      </div>
    </Card>
  );
}
