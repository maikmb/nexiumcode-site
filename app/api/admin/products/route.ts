import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/guard";

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  const items = await prisma.product.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
  });
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const b = await req.json();
  const item = await prisma.product.create({
    data: {
      name: b.name ?? "",
      tagline: b.tagline ?? "",
      description: b.description ?? "",
      logoUrl: b.logoUrl || null,
      url: b.url || null,
      gradient: b.gradient || "from-ocean-500 to-ocean-700",
      featured: Boolean(b.featured),
      order: Number.isFinite(b.order) ? b.order : 0,
    },
  });
  return NextResponse.json(item, { status: 201 });
}
