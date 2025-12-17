/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Customer's full name
      - `address` (text) - Property address
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `services` (text) - Service(s) interested in
      - `message` (text, nullable) - Optional additional message
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the inquiry (new, contacted, quoted, closed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public INSERT (anyone can submit contact form)
    - Add policy for authenticated users to view all submissions (for future admin panel)

  3. Indexes
    - Index on created_at for sorting by date
    - Index on status for filtering

  4. Notes
    - Form submissions are public (no auth required to submit)
    - Data is stored securely and can be reviewed by authenticated admins
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  services text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);