# 🎴 Anime Tinder

## 🧠 Overview
A responsive, accessible React 19 + Tailwind CSS app that lets you swipe through the top anime by genre, like your favorites, and view them in a list—each linked straight to Crunchyroll.

## 🏗️ Architecture  
```text
      +---------------------+   HTTP (GraphQL)   +-------------+
      |   React Frontend    | <---------------> | AniList API |
      |  • Genres Screen    |                   |             |
      |  • Swipe Deck       |                   +-------------+
      |  • Liked List (CR)  |
      +---------------------+
```

## 💻 Tech Stack
- **Framework:** React, React Router v6
- **Styling:** Tailwind CSS, Tailwind Line-Clamp, Tailwind Scrollbar
- **API:** AniList GraphQL
- **Bundler:** Vite

## 🔑 Features
- Genre Picker – multi-select, keyboard & screen-reader friendly
- Swipeable Cards – “Like”/“Dislike” with quick poof animation
- Liked List – view your picks in a responsive grid, search on Crunchyroll
- Responsive Design – mobile-first, adjusts to desktop width
- Accessibility – ARIA roles, focus rings, live regions, skip-link

## ⚙️ Getting Started

**Clone the Repo**
```bash
git clone https://github.com/vatsla16/anime-tinder.git
cd anime-tinder
```

**Install Dependencies**
```bash
npm install
```

**Start Server**
```bash
npm run dev
```

## 🧑‍💻 How to Use
1. Pick one or more genres on the home screen
2. Swipe right to like or left to dislike each anime
3. View your liked list by clicking “Check what you brewed!”
4. Click any card in your liked list to search it on Crunchyroll

## 🙏 Credits
- **AniList GraphQL API** – for providing the anime data that powers this app  
  [https://anilist.co/graphiql](https://anilist.co/graphiql)
- **“404 page not found” design** inspired by Gav’s CodePen  
  [https://codepen.io/gavra/pen/VwaNXN](https://codepen.io/gavra/pen/VwaNXN)

---
Happy swiping! 🎉