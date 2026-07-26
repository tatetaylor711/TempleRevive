# TempleRevive

A faith-driven fitness community designed to strengthen the body, mind, and spirit together. This repository is scaffolded as an Expo (React Native) app and includes a minimal starter app for a reddit-like forum focused on verses, encouragement, and accountability.

Vision Statement
To build the leading Christian fitness social platform that helps believers pursue physical health, spiritual discipline, and authentic community through encouragement, accountability, and shared purpose.

Problem
- Most fitness apps focus on appearance, performance, or vanity-driven motivation.
- Many social platforms generate comparison, negativity, or distraction instead of meaningful connection.
- Christians seeking healthier lifestyles often lack:
  - A supportive faith-based fitness community
  - Positive accountability partners
  - Spiritually-aligned motivation
  - Safe social interaction for families and believers
  - Tools that connect fitness with biblical discipline and purpose

Solution
Create a mobile-first Christian fitness social platform that combines:
- Fitness tracking
- Community interaction
- Faith-based encouragement
- Accountability systems
- Christian content and challenges

The app helps users stay consistent physically and spiritually while building genuine relationships with like-minded believers.

Core Audience
Primary:
- Christian men and women ages 18–45
- Fitness beginners to intermediate athletes
- Church communities and small groups
- Christian parents seeking healthy lifestyles

Secondary:
- Christian fitness coaches/trainers
- Faith-based influencers
- Youth groups and ministries

Core Features (MVP)
- Social Feed: workouts, progress updates, prayer requests, encouragement, milestones
- Accountability Groups: private groups for check-ins, prayer, habit tracking
- Faith + Fitness Challenges: 30-day discipline, Scripture + steps, church team competitions
- Workout Tracking: simple logging for strength, running, bodyweight; streak tracking
- Daily Encouragement: verse of the day, short devotionals, faith-based content

Reddit-like Forum Focus
This repo includes a minimal forum implementation: posts (with optional verse references), comments, upvotes, groups, and verse display.

Why Expo (recommended)
Option A (a full Expo app) was chosen for this repository because it enables fast iteration, easy device testing with Expo Go, and simple onboarding for contributors.

Getting started (local)
Prerequisites
- Node.js (LTS recommended)
- npm or yarn
- (Optional) Expo CLI: npm install -g expo-cli or use npx expo

Quick start
1. git clone https://github.com/tatetaylor711/TempleRevive.git
2. cd TempleRevive
3. npm install
4. expo start

Project structure
- App.js — app entry with navigation
- src/
  - components/ — UI components (PostCard)
  - screens/ — FeedScreen, PostScreen, CreatePostScreen
  - services/ — firebase.js (placeholder), verseService.js
- package.json
- app.json
- README.md

Firebase (placeholder)
This scaffold includes a placeholder Firebase initializer at src/services/firebase.js. Create a Firebase project and replace the config object with your own values before enabling auth and Firestore.

Verse API
A simple verseService wrapper is included (src/services/verseService.js). You can integrate a Bible API of your choice or maintain a local JSON for common verses for MVP.

Run on device
- Use Expo Go to open the QR code printed by expo start, or run the simulator with npm run ios / npm run android.

Next steps
- Fill firebase config in src/services/firebase.js
- Implement authentication flow (email + social)
- Wire Firestore queries for posts, comments, and votes
- Add moderation and safety rules in Firestore
- Add UI polish and theming

License
MIT
