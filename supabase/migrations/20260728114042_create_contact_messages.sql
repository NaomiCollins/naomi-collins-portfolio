/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email for replies
  - `subject` (text, not null) — message subject line
  - `message` (text, not null) — the body of the enquiry
  - `created_at` (timestamptz, defaults to now) — when the message was submitted
2. Security
- Enable RLS on `contact_messages`.
- This is a public portfolio contact form with no sign-in screen, so the
  anon-key frontend must be able to insert new messages. Anyone may submit.
  Reading back submitted messages is intentionally restricted to authenticated
  users (the portfolio owner) so visitors cannot scrape the inbox.
- INSERT policy is TO anon, authenticated (public submissions allowed).
- SELECT/UPDATE/DELETE policies are TO authenticated only (owner management).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public visitors to submit contact messages
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only the authenticated owner can read submitted messages
DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_contact_messages" ON contact_messages;
CREATE POLICY "auth_update_contact_messages"
ON contact_messages FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages"
ON contact_messages FOR DELETE
TO authenticated
USING (true);
