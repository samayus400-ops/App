CREATE TABLE public.club_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  chess_username text CHECK (chess_username IS NULL OR char_length(chess_username) <= 50),
  interest text NOT NULL DEFAULT 'join' CHECK (interest IN ('join','tournament','question','collab')),
  message text CHECK (message IS NULL OR char_length(message) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.club_registrations TO anon, authenticated;
GRANT ALL ON public.club_registrations TO service_role;
ALTER TABLE public.club_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a registration" ON public.club_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);