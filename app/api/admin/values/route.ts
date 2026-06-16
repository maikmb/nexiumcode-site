import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/guard";

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  const items = await prisma.value.findMany({ orderBy: [{ order: "asc" }] });
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const b = await req.json();
  const item = await prisma.value.create({
    data: {
      title: b.title ?? "",
      description: b.description ?? "",
      order: Number.isFinite(b.order) ? b.order : 0,
    },
  });
  return NextResponse.json(item, { status: 201 });
}
