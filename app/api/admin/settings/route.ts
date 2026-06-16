import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/guard";
import { DEFAULT_SETTINGS } from "@/lib/content";

const ALLOWED_KEYS = Object.keys(DEFAULT_SETTINGS);

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  const rows = await prisma.siteSetting.findMany();
  const map: Record<string, string> = { ...DEFAULT_SETTINGS };
  for (const r of rows) map[r.key] = r.value;
  return NextResponse.json(map);
}

export async function PUT(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const body: Record<string, string> = await req.json();
  const updates = [];
  for (const [key, value] of Object.entries(body)) {
    if (!ALLOWED_KEYS.includes(key)) continue;
    updates.push(
      prisma.siteSetting.upsert({
        where: { key },
        update: { value: String(value ?? "") },
        create: { key, value: String(value ?? "") },
      })
    );
  }
  await prisma.$transaction(updates);
  return NextResponse.json({ success: true });
}
