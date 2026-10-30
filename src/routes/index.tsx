import { createFileRoute } from "@tanstack/react-router";
import {
  Swords, GraduationCap, Users, Trophy, Sparkles, Flame, UserPlus, Handshake, Crown, Target,
  BookOpen, Calendar, ExternalLink, ChevronDown, Medal,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import mark from "@/assets/mark.png";
import { LINKS } from "@/lib/club";
import { Header } from "@/components/club/Header";
import { ContactForm } from "@/components/club/ContactForm";
import { FireLink, SectionHeading, TiltCard, useReveal } from "@/components/club/ui";

const TITLE = "Anime Lover's Chess Club — Learn • Play • Dominate";
const DESC =
  "A Chess.com club where anime fans learn, play and dominate together. Friendly games, missions, tournaments and a fired-up community.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PERKS = [
  { icon: GraduationCap, t: "Learn", d: "Share openings, puzzles and game reviews with players who love the grind as much as you." },
  { icon: Swords, t: "Play", d: "Friendly challenges, daily games and club matches — every rating welcome." },
  { icon: Trophy, t: "Compete", d: "Club tournaments and team battles on Chess.com when the community schedules them." },
  { icon: Sparkles, t: "Anime Vibes", d: "Talk arcs, OPs and favourite rivals between moves. Chess with a shōnen spirit." },
  { icon: Users, t: "Community", d: "A welcoming club run by fans, for fans. Respect first, banter second." },
  { icon: Flame, t: "Level Up", d: "Track your progress, take on missions and power up like a training arc." },
];

const MISSIONS = [
  { icon: UserPlus, rank: "S", t: "Recruit Arc", d: "Invite 10 friends to join the club on Chess.com." },
  { icon: Handshake, rank: "C", t: "First Duel", d: "Play a friendly game against another club member." },
  { icon: Trophy, rank: "A", t: "Tournament Debut", d: "Enter your first club tournament when one opens." },
  { icon: Target, rank: "B", t: "Puzzle Rush", d: "Solve 25 puzzles in a week and share your best one." },
  { icon: BookOpen, rank: "B", t: "Study Session", d: "Review one of your losses and post a key lesson." },
  { icon: Crown, rank: "S", t: "Rival Mode", d: "Find a club rival and play a best-of-five series." },
];

const EVENTS = [
  { t: "Club Tournaments", d: "Arena and Swiss events hosted on Chess.com. Dates are announced on the club page." },
  { t: "Team Matches", d: "Represent the club against other Chess.com clubs in vote chess and daily matches." },
  { t: "Friendly Nights", d: "Casual games between members — perfect for your first duel mission." },
];

const FAQ = [
  ["Is the club free to join?", "Yes. Joining the club on Chess.com is free — you just need a Chess.com account."],
  ["Do I need to be good at chess?", "Not at all. Beginners and seasoned players are equally welcome. Everyone starts at episode one."],
  ["Do I have to like anime?", "It helps for the banter, but anyone who respects the community is welcome."],
  ["Where are tournaments announced?", "On the club's Chess.com page. Join the club to see upcoming events and get notifications."],
  ["Does the contact form sign me up?", "No — the form sends a message to the club team. Use any Join button to become a member on Chess.com."],
  ["Who runs the club?", "The club is run by its owner, chess_by_ayus, together with the community."],
];

function Index() {
  useReveal();
  return (
    <div id="top" className="relative">
      <Header />
      <main id="main">
        {/* HERO */}
        <section className="scanlines relative flex min-h-[100svh] items-center overflow-hidden pt-24">
          <img src={hero} alt="" width={1536} height={1024} fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
          <div className="checker-bg absolute inset-0 opacity-60" />
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden select-none sm:block">
            <span className="animate-float absolute left-[8%] top-[22%] text-6xl text-accent/40">♞</span>
            <span className="animate-float absolute right-[10%] top-[30%] text-7xl text-primary/40 [animation-delay:-2s]">♛</span>
            <span className="animate-float absolute bottom-[18%] left-[18%] text-5xl text-ember/40 [animation-delay:-4s]">♜</span>
          </div>
          <div className="relative mx-auto w-full max-w-6xl px-4 py-16 text-center">
            <img src={mark} alt="" width={120} height={120} className="animate-flicker mx-auto mb-6 h-24 w-24 drop-shadow-[0_0_30px_var(--primary)] sm:h-28 sm:w-28" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.5em] text-accent sm:text-sm">Chess.com Club</p>
            <h1 className="text-glow text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
              Anime Lover's<br /><span className="text-fire">Chess Club</span>
            </h1>
            <p className="mt-6 font-display text-lg tracking-[0.3em] text-foreground/90 sm:text-2xl">
              LEARN • PLAY • DOMINATE
            </p>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground sm:text-lg">
              Where anime fans sharpen their tactics, battle friendly rivals and power up together — one move at a time.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <FireLink href={LINKS.join}>Join the Club</FireLink>
              <FireLink href="#missions" variant="ghost">View Missions</FireLink>
            </div>
            <a href="#about" aria-label="Scroll to About" className="mt-14 inline-block text-muted-foreground hover:text-accent">
              <ChevronDown className="h-7 w-7 animate-bounce" />
            </a>
          </div>
        </section>

        {/* MARQUEE */}
        <div aria-hidden className="overflow-hidden border-y border-primary/30 bg-secondary/40 py-3">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-sm text-muted-foreground">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-10">
                {["LEARN", "♞", "PLAY", "♛", "DOMINATE", "♜", "CHECKMATE ARC", "♝", "TRAINING ARC", "♚"].map((w, i) => (
                  <span key={i} className={i % 2 ? "text-primary" : ""}>{w}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="checker-bg px-4 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="reveal">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent">About the Club</p>
              <h2 className="text-3xl leading-tight sm:text-5xl">Two obsessions. <span className="text-fire">One board.</span></h2>
              <p className="mt-6 text-muted-foreground">
                Anime Lover's Chess Club is a Chess.com community for people who get just as hyped about a brilliant
                sacrifice as a season finale. We're here to learn from each other, play great games and push our
                skills to the next level.
              </p>
              <p className="mt-4 text-muted-foreground">
                The club recently celebrated a big community milestone — see the story on the milestone page.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <FireLink href={LINKS.milestone} variant="ghost"><Medal className="h-4 w-4" /> Milestone Page</FireLink>
                <FireLink href={LINKS.owner} variant="ghost"><Crown className="h-4 w-4" /> Meet the Owner</FireLink>
              </div>
            </div>
            <div className="reveal">
              <MiniBoard />
            </div>
          </div>
        </section>

        {/* PERKS */}
        <section id="perks" className="px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading kicker="Why Join" title={<>Power-ups for <span className="text-fire">every player</span></>} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PERKS.map(({ icon: I, t, d }) => (
                <div key={t} className="reveal">
                  <TiltCard className="h-full">
                    <div className="mb-4 inline-flex rounded-xl bg-fire p-3 glow-fire"><I className="h-6 w-6 text-primary-foreground" /></div>
                    <h3 className="text-xl">{t}</h3>
                    <p className="mt-2 text-muted-foreground">{d}</p>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSIONS */}
        <section id="missions" className="checker-bg px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading kicker="Missions" title={<>Accept your <span className="text-fire">quest</span></>}
              sub="Self-paced challenges to grow the club and your game. Complete them on Chess.com — honour system, no tracking." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MISSIONS.map(({ icon: I, rank, t, d }) => (
                <div key={t} className="reveal">
                  <TiltCard className="relative h-full overflow-hidden">
                    <span aria-label={`Rank ${rank}`} className="absolute right-4 top-4 font-display text-4xl text-fire opacity-80">{rank}</span>
                    <I className="h-8 w-8 text-accent" />
                    <h3 className="mt-4 text-xl">{t}</h3>
                    <p className="mt-2 text-muted-foreground">{d}</p>
                  </TiltCard>
                </div>
              ))}
            </div>
            <div className="reveal mt-10 text-center"><FireLink href={LINKS.join}>Start your first mission</FireLink></div>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading kicker="Tournaments & Events" title={<>Enter the <span className="text-fire">arena</span></>}
              sub="Events are scheduled on Chess.com. Join the club to see what's coming up and get notified." />
            <div className="grid gap-5 md:grid-cols-3">
              {EVENTS.map((e) => (
                <div key={e.t} className="reveal">
                  <TiltCard className="h-full">
                    <Calendar className="h-7 w-7 text-primary" />
                    <h3 className="mt-4 text-xl">{e.t}</h3>
                    <p className="mt-2 text-muted-foreground">{e.d}</p>
                  </TiltCard>
                </div>
              ))}
            </div>
            <div className="reveal mt-10 text-center">
              <FireLink href={LINKS.join} variant="ghost">See events on Chess.com <ExternalLink className="h-4 w-4" /></FireLink>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="checker-bg px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading kicker="Community" title={<>Our <span className="text-fire">squad</span></>} />
            <div className="grid gap-5 md:grid-cols-3">
              <div className="reveal md:col-span-2">
                <TiltCard className="h-full">
                  <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-fire text-4xl glow-fire">♚</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Club Owner</p>
                      <h3 className="mt-1 text-2xl">chess_by_ayus</h3>
                      <p className="mt-2 text-muted-foreground">Founder and host of the club. Say hi, send a challenge, or ask about upcoming events.</p>
                      <a href={LINKS.owner} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
                        View profile on Chess.com <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </div>
              <div className="reveal">
                <TiltCard className="h-full">
                  <Medal className="h-8 w-8 text-accent" />
                  <h3 className="mt-4 text-xl">Milestone unlocked</h3>
                  <p className="mt-2 text-muted-foreground">Read about the club's community milestone celebration.</p>
                  <a href={LINKS.milestone} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
                    Open milestone page <ExternalLink className="h-4 w-4" />
                  </a>
                </TiltCard>
              </div>
            </div>
            <div className="reveal mt-5 glass rounded-2xl p-6 text-center">
              <p className="text-muted-foreground">
                Want to be featured? Complete a mission, share a great game in the club, and you could be our next member highlight.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading kicker="FAQ" title={<>Questions, <span className="text-fire">answered</span></>} />
            <div className="space-y-3">
              {FAQ.map(([q, a]) => (
                <details key={q} className="reveal group glass rounded-xl">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN */}
        <section id="join" className="px-4 py-16">
          <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-fire p-10 text-center glow-fire sm:p-16">
            <div className="checker-bg absolute inset-0 opacity-50" />
            <div className="relative">
              <h2 className="text-3xl text-primary-foreground sm:text-5xl">Your arc starts now.</h2>
              <p className="mx-auto mt-4 max-w-lg text-primary-foreground/90">Free to join. All ratings welcome. Bring your best opening and your favourite anime.</p>
              <a href={LINKS.join} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-background px-8 font-bold uppercase tracking-wider text-foreground transition hover:-translate-y-0.5">
                Join Now on Chess.com<span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="checker-bg px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeading kicker="Register Interest" title={<>Send the club a <span className="text-fire">message</span></>}
              sub="Questions, tournament ideas or collabs — drop us a line and the club team will read it." />
            <div className="reveal"><ContactForm /></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={mark} alt="" width={32} height={32} loading="lazy" className="h-8 w-8" />
            <span>© {new Date().getFullYear()} Anime Lover's Chess Club · LEARN • PLAY • DOMINATE</span>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-5">
            <a className="hover:text-accent" href={LINKS.join} target="_blank" rel="noopener noreferrer">Join</a>
            <a className="hover:text-accent" href={LINKS.milestone} target="_blank" rel="noopener noreferrer">Milestone</a>
            <a className="hover:text-accent" href={LINKS.owner} target="_blank" rel="noopener noreferrer">Owner</a>
            <a className="hover:text-accent" href="#top">Back to top</a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground/70">Fan community. Not affiliated with Chess.com or any anime studio.</p>
      </footer>
    </div>
  );
}

function MiniBoard() {
  const pieces: Record<number, string> = { 3: "♛", 12: "♞", 21: "♝", 27: "♚", 36: "♟", 42: "♜", 50: "♙", 60: "♔" };
  return (
    <div className="glass relative mx-auto aspect-square w-full max-w-sm rounded-2xl p-3 glow-fire">
      <div className="grid h-full grid-cols-8 overflow-hidden rounded-lg" aria-hidden>
        {Array.from({ length: 64 }).map((_, i) => {
          const dark = (Math.floor(i / 8) + i) % 2 === 1;
          return (
            <div key={i} className={`flex items-center justify-center text-2xl sm:text-3xl ${dark ? "bg-primary/40" : "bg-secondary"}`}>
              {pieces[i] && <span className="animate-float text-foreground drop-shadow-[0_0_8px_var(--ember)]" style={{ animationDelay: `${-i / 10}s` }}>{pieces[i]}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
