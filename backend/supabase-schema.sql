-- Supabase SQL: Run this in the Supabase SQL Editor to create tables

-- Profile table
CREATE TABLE IF NOT EXISTS profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT,
  location TEXT,
  phone TEXT,
  email TEXT,
  summary TEXT,
  languages TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT,
  type TEXT,
  description TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Education table
CREATE TABLE IF NOT EXISTS education (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  icon TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tech TEXT,
  slug TEXT UNIQUE,
  image TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Contact configuration
CREATE TABLE IF NOT EXISTS contact (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_bar JSONB DEFAULT '{}',
  contact_links JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to portfolio data
CREATE POLICY "Public read access" ON profile FOR SELECT USING (true);
CREATE POLICY "Public read access" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public read access" ON education FOR SELECT USING (true);
CREATE POLICY "Public read access" ON skills FOR SELECT USING (true);
CREATE POLICY "Public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON contact FOR SELECT USING (true);

-- Allow public insert for contact submissions
CREATE POLICY "Public insert access" ON contact_submissions FOR INSERT WITH CHECK (true);
