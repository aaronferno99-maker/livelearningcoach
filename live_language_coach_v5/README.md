# Live Language Coach v2

Static website (index.html, styles.css, app.js) + Supabase backend (schema.sql) + your Neithal Word Coach chatbot popup.

## Setup (about 10 minutes)
1. Supabase Dashboard > SQL Editor: paste all of `schema.sql` and Run (safe to re-run). It also removes a v1 weakness: users could edit their own role.
2. Authentication > URL Configuration: add your site URL. Decide whether to require email confirmation.
3. Open the site, register your own account (student form), then in SQL Editor run:
   `update public.profiles set role='researcher' where email='YOU@example.com';`
   same for the guide with role 'guide'. Then log in again.
4. Researcher > Cohort: register teachers first (normal sign-up), then grant "Teacher" by email; verify students (assigns research IDs); assign teachers.
5. Researcher > Setup: set phase (Pre-test / Intervention / Post-test) and week.
6. Serve over HTTP (`python -m http.server 8000`) or host on Netlify / Vercel / Cloudflare Pages.

## Roles
Student: tests, materials, feedback, live join. Teacher: assigned students' performance, materials, unlock skills, rubric scoring, live activities. Researcher: everything plus cohort, setup, charts, statistics, exports, audit. Guide: read-only research dashboard, cohort, exports.

## Before real data collection
- Replace the sample item banks (BANK) and the placeholder anxiety items (ANX) in app.js with your validated instruments and official scoring. The app shows totals only, no clinical categories.
- MCQ scoring runs in the browser (answer keys are visible in app.js). For high-stakes tests move scoring to a Supabase Edge Function.
- Email/WhatsApp: feedback creates queued rows in `notifications` for consenting students. Sending needs an Edge Function plus an email provider and the WhatsApp Business API (not included). Mobile OTP needs Supabase phone auth with an SMS provider (not enabled).
- Run a 300-user load test and a pilot; check Supabase plan limits. Get ethics approval and consent text reviewed.
- Chatbot: popup uses `...exec?type=popup`.

## Registration day tips (Supabase limits)
- Sign-ups and logins are limited to 30 per 5 minutes per IP address. A whole class on one Wi-Fi shares one IP: register about 25 students per 5 minutes, or use mobile data.
- Email confirmation is OFF in the current project (Auth > Sign In / Providers > Confirm email). Turn it on only after setting up custom SMTP (Auth > Emails > SMTP Settings); the built-in sender allows 2 emails per hour.
- Live classes with the whole cohort: Supabase Free allows 200 realtime connections, Pro allows 500.

## v4 update: video lectures, live class, materials removal
1. Supabase → SQL Editor → paste `schema_v3.sql` → Run (once; safe to repeat). Do this BEFORE publishing the new site files.
2. Publish the site files as before.
3. Researcher portal → Video lectures → add a YouTube link + exactly 10 quiz lines (`Question | A | B | C | D | correct letter`).
4. Live class tab → paste a Zoom or Google Meet link → Save → Go live.
Only three portals remain: Student, Professor, Researcher.
