# Vevan O Narain — Portfolio

Built with Astro. Static site, no backend required.

## Develop
npm install
npm run dev

## Build
npm run build
npm run preview

## Before deploying
Open src/data/resume.ts and replace the placeholder URLs with your real profiles:
- profile.links.github, profile.links.linkedin, profile.links.leetcode
- each project's href (link to its GitHub repo)

Everything else - copy, stats, stack, education - is also in that one file if you want to edit it later.

## Deploy
Works out of the box on Vercel, Netlify, or GitHub Pages (static output in dist/ after npm run build).
