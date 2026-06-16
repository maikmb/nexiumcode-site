import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Painel",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function GerencialPage() {
  // Proteção extra além do middleware (defesa em profundidade).
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <AdminShell userName={session.user?.name} />;
}
