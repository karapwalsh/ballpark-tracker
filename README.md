# Ballpark Tracker — Setup Guide

A small web app for tracking which MLB ballparks you've visited: mark a stadium as
visited even with no other details, or fill in the opponent, score, who won, who you
went with, notes, and a photo. Works on desktop and phone, and multiple people can use
it — each person signs in with Google and only ever sees their own data.

It's built generically enough that you can reuse it later for something else (like
Broadway theatres) — see "Reusing this for another list" at the bottom.

Two things need to happen before it works: (1) create a free Firebase project so the
app has somewhere to store data, and (2) put the files somewhere reachable from both
your desktop and phone (GitHub Pages).

---

## Part 1 — Create your Firebase project (~5–10 minutes, free)

1. Go to **https://console.firebase.google.com** and sign in with your Google account.
2. Click **"Add project"** (or "Create a project"). Name it anything, e.g. `ballpark-tracker`.
   You can skip Google Analytics (toggle it off) — not needed here.
3. Once the project is created, click the **web icon (`</>`)** on the project overview
   page to register a new web app. Give it a nickname (e.g. "Ballpark Tracker"). You do
   **not** need Firebase Hosting checked — we're using GitHub Pages instead.
4. Firebase will show you a `firebaseConfig` object that looks like this:

   ```js
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "ballpark-tracker-xxxx.firebaseapp.com",
     projectId: "ballpark-tracker-xxxx",
     storageBucket: "ballpark-tracker-xxxx.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef123456"
   };
   ```

   Copy these six values into **`firebase-config.js`** in this folder, replacing the
   `PASTE_YOUR_...` placeholders.

5. **Enable sign-in.** In the left sidebar: **Build → Authentication → Get started**.
   Under the "Sign-in method" tab, enable **Google**, pick a support email, and save.

6. **Enable the database.** Left sidebar: **Build → Firestore Database → Create database**.
   Choose a location close to you, and start in **production mode** (we'll paste in
   proper security rules next). Once created, go to the **Rules** tab and replace the
   contents with everything in **`firestore.rules`** from this folder, then click **Publish**.

7. **Enable photo storage.** Left sidebar: **Build → Storage → Get started**. Accept the
   defaults. Once created, go to the **Rules** tab and replace the contents with
   everything in **`storage.rules`** from this folder, then click **Publish**.

   > Note: as of a 2026 pricing change, Cloud Storage was removed from Firebase's free
   > "Spark" plan entirely. To use Storage at all now — even within the free quota
   > (1GB stored, 10GB downloads/month) — your project must be on the paid "Blaze"
   > (pay-as-you-go) plan, which requires a credit card on file. You won't be charged
   > unless you go past that free quota (unlikely for a personal photo album — past
   > it, it's about $0.026/GB stored and $0.15/GB downloaded). If you'd rather not
   > attach a card, skip this step and leave photos out — everything else (marking
   > ballparks visited, opponent, score, who you went with, notes) still works fully;
   > the photo upload button will just show an error.

That's it for Firebase — the app is now fully wired up to your own private database.

---

## Part 2 — Put it online with GitHub Pages (~5 minutes, free)

1. Go to **https://github.com/new** and create a new repository, e.g. `ballpark-tracker`.
   Public is fine (there's no secret data in these files — your actual visit data lives
   in Firebase, protected by the rules above, not in this repo).
2. On the new repo's page, click **"uploading an existing file"** (or drag-and-drop),
   and upload every file in this `mlb-stadium-tracker` folder: `index.html`, `app.js`,
   `venues.js`, `firebase-config.js` (with your real values already pasted in),
   `manifest.json`. Commit the upload.
3. Go to the repo's **Settings → Pages**. Under "Build and deployment", set **Source**
   to "Deploy from a branch", branch = `main`, folder = `/ (root)`. Save.
4. Wait about a minute, then refresh — GitHub will show a URL like
   `https://yourusername.github.io/ballpark-tracker/`. That's your app.

5. **One more Firebase step:** go back to Firebase Console → Authentication →
   Settings → **Authorized domains**, and add your GitHub Pages domain
   (`yourusername.github.io`) so Google sign-in is allowed to work there.

Now open that URL on your phone and bookmark it (or use your phone browser's "Add to
Home Screen" option — it's set up as a lightweight installable app via `manifest.json`)
so it feels like a real app icon. Open the same URL on your desktop. Sign in with the
same Google account on both, and your data stays in sync automatically.

---

## Letting other people use it

Anyone you send the URL to can sign in with their own Google account and get their own
private set of 30 ballparks to track — nobody can see or edit anyone else's data,
because the security rules key everything off `request.auth.uid`.

---

## Reusing this for another list (e.g. Broadway theatres)

The app is deliberately generic:

- **`venues.js`** is the only file with baseball-specific content. Duplicate this whole
  folder, then replace the `VENUES` array with your theatre list (id, name, group —
  e.g. show name instead of team, division/grouping, location). Update `APP_TITLE` and
  `ENTITY_LABEL` at the top of that file.
- Everything else (`app.js`, `index.html`, Firebase setup) works unchanged — you can
  even reuse the *same* Firebase project (just use a different Firestore top-level path,
  e.g. `users/{uid}/theatreVisits/{id}`, by changing the collection name in `app.js`) or
  spin up a second free Firebase project for a clean separation.
- Deploy the copy as a second GitHub repo/Pages site.

---

## Troubleshooting

- **"Firebase isn't configured yet" message on the login screen** — you haven't pasted
  your real values into `firebase-config.js` yet.
- **Sign-in popup closes immediately / errors** — check that your GitHub Pages domain
  is in Firebase's Authorized Domains list (Part 2, step 5).
- **Photos won't upload** — Storage now requires the Blaze plan attached (see note in
  Part 1, step 7); everything else works without it.
