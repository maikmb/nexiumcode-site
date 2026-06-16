"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X } from "lucide-react";

/**
 * Dropzone reutilizável: faz upload via /api/upload e devolve a URL salva.
 * Mostra preview da imagem atual (value) e permite remover.
 */
export default function UploadDropzone({
  value,
  onChange,
  label = "Imagem",
}: {
  value: string | null;
  onChange: (url: string | null) => void;
  label?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const onDrop = useCallback(
    async (files: File[]) => {
      const file = files[0];
      if (!file) return;
      setUploading(true);
      setError("");
      try {
        const fd = new FormData();
        fd.append("file", file);
        const r = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await r.json();
        if (!r.ok) throw new Error(data.error || "Falha no upload");
        onChange(data.url);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Falha no upload");
      } finally {
        setUploading(false);
      }
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-foreground/55">
        {label}
      </label>
      {value ? (
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="preview" className="h-16 w-16 rounded-lg object-contain" />
          <span className="flex-1 truncate text-sm text-foreground/55">{value}</span>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="rounded-lg p-2 text-foreground/50 hover:bg-red-500/10 hover:text-red-300"
            aria-label="Remover imagem"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
            isDragActive
              ? "border-ocean-400 bg-ocean-500/10"
              : "border-white/10 hover:border-ocean-400 hover:bg-white/5"
          }`}
        >
          <input {...getInputProps()} />
          <UploadCloud className="mb-2 text-ocean-500" size={22} />
          <p className="text-sm text-foreground/55">
            {uploading ? "Enviando..." : "Arraste ou clique para enviar"}
          </p>
        </div>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
