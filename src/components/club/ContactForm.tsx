import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { registrationSchema, LINKS } from "@/lib/club";

type Errors = Partial<Record<string, string>>;
const field =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = registrationSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] ??= i.message));
      setErrors(errs);
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    const v = parsed.data;
    const { error } = await supabase.from("club_registrations").insert({
      name: v.name,
      email: v.email,
      chess_username: v.chess_username || null,
      interest: v.interest,
      message: v.message || null,
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    form.reset();
  }

  if (status === "ok")
    return (
      <div role="status" className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <h3 className="mt-4 text-2xl">Message received!</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks — the club team has your details. To become a member right away, join the club on Chess.com.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={LINKS.join} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-fire px-6 font-bold uppercase tracking-wider text-primary-foreground glow-fire">
            Join on Chess.com
          </a>
          <button type="button" onClick={() => setStatus("idle")} className="glass min-h-12 rounded-xl px-6 font-semibold">
            Send another
          </button>
        </div>
      </div>
    );

  const err = (n: string) =>
    errors[n] ? (
      <p id={`${n}-err`} className="mt-1 text-sm text-destructive">{errors[n]}</p>
    ) : null;
  const a = (n: string) => ({ "aria-invalid": !!errors[n], "aria-describedby": errors[n] ? `${n}-err` : undefined });

  return (
    <form onSubmit={submit} noValidate className="glass grid gap-5 rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold">Name *</label>
          <input id="name" name="name" autoComplete="name" maxLength={100} className={field} placeholder="Your name" {...a("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold">Email *</label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={255} className={field} placeholder="you@example.com" {...a("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="chess_username" className="mb-1 block text-sm font-semibold">Chess.com username</label>
          <input id="chess_username" name="chess_username" autoCapitalize="none" maxLength={50} className={field} placeholder="optional" {...a("chess_username")} />
          {err("chess_username")}
        </div>
        <div>
          <label htmlFor="interest" className="mb-1 block text-sm font-semibold">I'm interested in</label>
          <select id="interest" name="interest" defaultValue="join" className={field}>
            <option value="join">Joining the club</option>
            <option value="tournament">Tournaments & events</option>
            <option value="question">Asking a question</option>
            <option value="collab">Collaboration</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">Message</label>
        <textarea id="message" name="message" rows={4} maxLength={1000} className={field} placeholder="Favourite anime, favourite opening, anything!" {...a("message")} />
        {err("message")}
      </div>
      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 rounded-xl border border-destructive/50 bg-destructive/10 p-3 text-sm">
          <AlertTriangle className="h-4 w-4 shrink-0 text-destructive" />
          Something went wrong sending your message. Please try again in a moment.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-fire px-6 font-bold uppercase tracking-wider text-primary-foreground glow-fire transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting this form doesn't make you a Chess.com club member — use the Join button for that.
      </p>
    </form>
  );
}
