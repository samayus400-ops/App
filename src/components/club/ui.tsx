import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || reduce() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(0)`;
  };
  const leave = () => ref.current && (ref.current.style.transform = "");
  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`glass rounded-2xl p-6 transition-transform duration-200 will-change-transform hover:border-primary/50 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ kicker, title, sub }: { kicker: string; title: ReactNode; sub?: string }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent">{kicker}</p>
      <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function FireLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const external = href.startsWith("http");
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-200 active:scale-95";
  const v =
    variant === "solid"
      ? "bg-fire text-primary-foreground glow-fire hover:brightness-110 hover:-translate-y-0.5"
      : "glass text-foreground hover:border-accent hover:text-accent";
  return (
    <a
      href={href}
      className={`${base} ${v} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}
