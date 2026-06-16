"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* =============================================================================
 *  Fundo global do site (Dark Neon Tech):
 *   - Mesh gradient animado (orbs ocean/navy borrados, movimento lento)
 *   - Barra de progresso de scroll neon no topo
 *  Performático: poucos elementos, will-change, respeita reduced-motion.
 * ============================================================================= */
export default function SiteBackground() {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Barra de progresso de scroll */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* Mesh gradient global (fixo, atrás de tudo) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`mesh-orb ${reduce ? "" : "animate-mesh"}`}
          style={{
            top: "-15%",
            left: "-10%",
            width: "55vw",
            height: "55vw",
            background:
              "radial-gradient(circle at 30% 30%, #247ceb, transparent 65%)",
          }}
        />
        <div
          className={`mesh-orb ${reduce ? "" : "animate-mesh"}`}
          style={{
            top: "10%",
            right: "-15%",
            width: "50vw",
            height: "50vw",
            animationDelay: "-7s",
            opacity: 0.4,
            background:
              "radial-gradient(circle at 50% 50%, #1e51af, transparent 65%)",
          }}
        />
        <div
          className={`mesh-orb ${reduce ? "" : "animate-mesh"}`}
          style={{
            bottom: "-20%",
            left: "25%",
            width: "48vw",
            height: "48vw",
            animationDelay: "-13s",
            opacity: 0.35,
            background:
              "radial-gradient(circle at 50% 50%, #5fb8fa, transparent 60%)",
          }}
        />
        {/* brilho secundário violeta MUITO sutil só para profundidade */}
        <div
          className="mesh-orb"
          style={{
            top: "40%",
            left: "55%",
            width: "30vw",
            height: "30vw",
            opacity: 0.18,
            background:
              "radial-gradient(circle at 50% 50%, #7c5cff, transparent 65%)",
          }}
        />
      </div>

      {/* Grão / noise overlay */}
      <div className="grain" aria-hidden="true" />
    </>
  );
}
