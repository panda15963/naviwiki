## Getting Started

1. install packages:
```bash
npm install
```
2. run the development server:

```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

4. Back to Next.js project and create a file which names `.env.local`

5. Copy and Paste `NEXT_PUBLIC_SUPABASE_URL=` and NEXT_PUBLIC_SUPABASE_KEY in `.env.local` file.

6. Login [Supabase](https://supabase.com/dashboard/sign-in?returnTo=%2Fprojects) and create new Organization and Project.

7. Go to Setting > API to Copy `URL` from Project URL and `Anon Key` from Project API keys.

8. Paste `URL` and `Anon Key` in `.env.local` file.

9. Back to your Supabase's project and go to SQL Editer to copy and paste sql commands below. If you finished to paste press CTRL + Enter at the same time.
```sql
create table profiles (
  id uuid not null primary key,
  full_name text,
  email text,
  password text,
  updated_at timestamp with time zone
);
-------------------------------------------------------
create table
  public.std5w (
    id uuid not null primary key,
    title text null,
    platforms text null,
    description text null,
    updated_at timestamp null
  ) tablespace pg_default;
  -------------------------------------------------------
  create table
  public.prm6 (
    id uuid not null primary key,
    title text null,
    platforms text null,
    description text null,
    updated_at timestamp null
  ) tablespace pg_default;
  -------------------------------------------------------
  create table
  public.ccic (
    id uuid not null primary key,
    title text null,
    platforms text null,
    description text null,
    updated_at timestamp null
  ) tablespace pg_default;
  -------------------------------------------------------
  create table
  public.ccnc (
    id uuid not null primary key,
    title text null,
    platforms text null,
    description text null,
    updated_at timestamp null
  ) tablespace pg_default;
  -------------------------------------------------------
create table
  public.ccic27 (
    id uuid not null primary key,
    title text null,
    platforms text null,
    description text null,
    updated_at timestamp null
  ) tablespace pg_default;
```
