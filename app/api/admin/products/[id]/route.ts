import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/guard";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { id } = await params;
  const b = await req.json();
  const data: Record<string, unknown> = {};
  for (const k of ["name", "tagline", "description", "gradient"] as const) {
    if (b[k] !== undefined) data[k] = b[k];
  }
  if (b.logoUrl !== undefined) data.logoUrl = b.logoUrl || null;
  if (b.url !== undefined) data.url = b.url || null;
  if (b.featured !== undefined) data.featured = Boolean(b.featured);
  if (b.order !== undefined) data.order = Number(b.order) || 0;
  const item = await prisma.product.update({ where: { id }, data });
  return NextResponse.json(item);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { id } = await params;
  await prisma.product.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
