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

## v6 update: research journey, activity builder, attendance, forum, live quiz, statistics
1. Supabase → SQL Editor → paste `schema_v6.sql` → Run (once; safe to repeat). Do this BEFORE publishing the new site files.
2. Publish the site files (index.html, app.js, styles.css) as before.
3. Researcher or Professor → **My library**: create the anxiety questionnaire, the six pre-tests (50 questions each), the interventions (25 questions each, with a segment and media link), the post-test and the final questionnaire. Publish each one.
4. **Research control**: open each stage when the class is ready.
5. Researcher → **Setup** → Google Sheet: download the sync script and follow the four steps.
6. Researcher → **Statistics**: on-screen results plus SPSS data and syntax downloads.

Import format (one question per line):
    MCQ | question | A | B | C | D | answer letter | explanation
    TF | statement | T or F | explanation
    AR | assertion | reason | answer letter | explanation
    MATCH | instruction | left=right; left=right | explanation
Questionnaire statements: one per line; add `| R` for positively worded (reverse-scored) statements.

## v16 update: fixes from the first classroom test (26 Nov 2026)
1. Supabase → SQL Editor → paste `database/schema_v16.sql` (or the shorter `schema_v16_phone.sql`) → Run. Safe to run again.
2. What changes:
   - **One name = one player.** A student who presses Join again goes back into the same place. Names are matched without capitals or spaces (25uta104 = 25UTA 104). Ask students to type their roll number.
   - **Play audio** now shows in the live quiz for questions that have an audio script.
   - **Results** (My library) shows every live run of the quiz: joined, answered, average / highest / lowest marks, question-by-question % right, every participant with S.No, and a CSV.
   - **Select and remove players** from a live run (All · No answers · Repeated names · Remove selected), and × to remove someone from the waiting room.
   - **Cohort → Remove** deletes a registered student who is not part of the research (account and all saved data). Researcher only.
   - **S.No** column in Results, guest data report, cohort, the professor's live table and the CSVs.
