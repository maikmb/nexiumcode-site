import { withAuth } from "next-auth/middleware";

/**
 * Protege o painel `/gerencial` e as APIs admin. Sem sessão → redireciona para
 * /login (página configurada em authOptions.pages.signIn).
 */
export default withAuth({
  pages: { signIn: "/login" },
});

export const config = {
  matcher: ["/gerencial/:path*", "/api/admin/:path*", "/api/upload"],
};
