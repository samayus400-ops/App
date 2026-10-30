import { z } from "zod";

export const LINKS = {
  join: "https://www.chess.com/club/anime-lovers-chess-club-1/join",
  milestone: "https://samayus400-ops.github.io/ayus/200-members.html",
  owner: "https://www.chess.com/member/chess_by_ayus",
} as const;

export const registrationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (2+ characters)").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  chess_username: z
    .string()
    .trim()
    .max(50, "Username is too long")
    .regex(/^[A-Za-z0-9_-]*$/, "Letters, numbers, - and _ only")
    .optional()
    .or(z.literal("")),
  interest: z.enum(["join", "tournament", "question", "collab"]),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional().or(z.literal("")),
});

export type Registration = z.infer<typeof registrationSchema>;
