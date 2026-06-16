import type { ReactNode } from "react";

/* =============================================================================
 *  ÍCONES DE SERVIÇO
 *  -----------------------------------------------------------------------------
 *  Cada serviço guarda no banco apenas uma `iconKey` (string). Aqui mapeamos a
 *  key para o conteúdo interno de um <svg viewBox="0 0 24 24">. Assim o admin
 *  escolhe o ícone por uma lista, sem precisar salvar SVG no banco.
 * ============================================================================= */

export const SERVICE_ICON_KEYS = [
  "globe",
  "server",
  "mail",
  "automation",
  "migration",
  "code",
  "consulting",
  "spark",
  "shield",
  "rocket",
] as const;

export type ServiceIconKey = (typeof SERVICE_ICON_KEYS)[number];

const ICONS: Record<string, ReactNode> = {
  globe: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 21h10" strokeLinecap="round" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" strokeLinecap="round" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
        strokeLinecap="round"
      />
    </>
  ),
  migration: (
    <path
      d="M4 12h12m0 0l-4-4m4 4l-4 4M20 5v14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  code: (
    <path
      d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  consulting: (
    <>
      <path d="M9.5 16h5M10 19h4" strokeLinecap="round" />
      <path
        d="M12 3a6 6 0 00-3.6 10.8c.6.45.9 1.1.9 1.7h5.4c0-.6.3-1.25.9-1.7A6 6 0 0012 3z"
        strokeLinejoin="round"
      />
    </>
  ),
  spark: (
    <path
      d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path
      d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"
      strokeLinejoin="round"
    />
  ),
  rocket: (
    <>
      <path
        d="M5 15c-1 2-1 4-1 4s2 0 4-1m6.5-12.5C16 4 19 4 20 5s1 4-.5 5.5L12 18l-3-3 6.5-6.5z"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="9.5" r="1.2" />
    </>
  ),
};

export function serviceIcon(key: string): ReactNode {
  return ICONS[key] ?? ICONS.spark;
}
