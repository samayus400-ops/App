import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import mark from "@/assets/mark.png";
import { LINKS } from "@/lib/club";
import { FireLink } from "./ui";

const NAV = [
  ["About", "#about"],
  ["Perks", "#perks"],
  ["Missions", "#missions"],
  ["Events", "#events"],
  ["Community", "#community"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${open ? "bg-background py-2" : scrolled ? "glass py-2" : "py-4"}`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-primary focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2" aria-label="Anime Lover's Chess Club home">
          <img src={mark} alt="" width={40} height={40} className="h-10 w-10 drop-shadow-[0_0_10px_var(--primary)]" />
          <span className="font-display text-sm leading-none sm:text-base">
            Anime Lover's<br /><span className="text-fire">Chess Club</span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
            {NAV.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-muted-foreground transition-colors hover:text-accent">{l}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <FireLink href={LINKS.join} className="min-h-10 px-4 py-2">Join Club</FireLink>
        </div>
        <button
          type="button"
          className="glass rounded-lg p-3 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="h-[calc(100dvh-4rem)] overflow-y-auto px-4 pb-8 lg:hidden">
          <ul className="mt-4 flex flex-col gap-1">
            {NAV.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-4 font-display text-xl hover:bg-secondary hover:text-accent"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <FireLink href={LINKS.join} className="mt-6 w-full">Join on Chess.com</FireLink>
        </nav>
      )}
    </header>
  );
}
