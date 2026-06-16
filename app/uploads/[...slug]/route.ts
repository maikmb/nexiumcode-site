import { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import { join, normalize, sep } from "path";

// O Next.js (next start) NÃO serve arquivos adicionados ao /public em runtime.
// Como os uploads do painel são gravados em public/uploads APÓS o build, servimos
// eles por aqui, lendo do mesmo diretório (montado em volume no k8s).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTENT_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  svg: "image/svg+xml",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const rel = (slug || []).join("/");
  const baseDir = join(process.cwd(), "public", "uploads");
  const filePath = normalize(join(baseDir, rel));

  // Proteção contra path traversal: o caminho resolvido tem que ficar dentro de baseDir.
  if (filePath !== baseDir && !filePath.startsWith(baseDir + sep)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const data = await readFile(filePath);
    const ext = (rel.split(".").pop() || "").toLowerCase();
    return new Response(new Uint8Array(data), {
      headers: {
        "Content-Type": CONTENT_TYPES[ext] || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
