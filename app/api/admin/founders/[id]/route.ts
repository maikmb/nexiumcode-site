import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/guard";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { id } = await params;
  const b = await req.json();
  const data: Record<string, unknown> = {};
  for (const k of ["name", "role", "bio", "direction"] as const) {
    if (b[k] !== undefined) data[k] = b[k];
  }
  if (b.photoUrl !== undefined) data.photoUrl = b.photoUrl || null;
  if (b.order !== undefined) data.order = Number(b.order) || 0;
  const item = await prisma.founder.update({ where: { id }, data });
  return NextResponse.json(item);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { id } = await params;
  await prisma.founder.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
