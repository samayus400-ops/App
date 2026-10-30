import { describe, expect, it } from "vitest";
import { registrationSchema, LINKS } from "@/lib/club";

const base = { name: "Ayus", email: "a@b.co", interest: "join" as const };

describe("registration rules", () => {
  it("accepts a valid entry", () => expect(registrationSchema.safeParse(base).success).toBe(true));
  it("rejects a bad email", () => expect(registrationSchema.safeParse({ ...base, email: "nope" }).success).toBe(false));
  it("rejects a message over 1000 chars", () =>
    expect(registrationSchema.safeParse({ ...base, message: "x".repeat(1001) }).success).toBe(false));
  it("uses the real club join link", () =>
    expect(LINKS.join).toBe("https://www.chess.com/club/anime-lovers-chess-club-1/join"));
});
