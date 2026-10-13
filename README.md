# 1. 🥷 Rock Paper Scissors: Shinobi Edition - Road to Ninja 🤌

An immersive, anime-themed Rock Paper Scissors game built with vanilla JavaScript, HTML5, and CSS3, featuring a custom shinobi spin, Genjutsu visuals, dynamic audio controls, and hand-sign jutsu mechanics.

👉 **Play it live here:** [https://labravacodes-dot.github.io/Rock-paper-scissors/](https://labravacodes-dot.github.io/Rock-paper-scissors/)

---

## 2.📜 Origin Story: From Generic Code to a Shinobi Vision

This project originally began as part of the standard **Rock Paper Scissors** assignment from **The Odin Project**. However, during Step 4, I didn't want to follow a rigid, soulless template. I went strictly by my feeling: because of the nature of the game, Naruto was the most fitting theme. 
It had to be Naruto, because the nature of the hand signs fit with this game, and it felt right, and when I had this epiphany everything clicked for me, and that it had to be like this, when I had this vision.

Doing something like this has always been my dream. I chose the song "SIGN" to play with it because the hand signs done to play this game act as a form of *jutsu*, which is needed to activate the attacks! Thanks to **The Odin Project**, I got the tools and starting points to make my dream a reality. I will always be deeply grateful to The Odin Project for making my dream come true! Thank you to everyone in The Odin Project!!

What started as basic console logging evolved into a fully realized interactive web app—complete with custom lore, an atmospheric Genjutsu background, frosted glassmorphism UI design, and dynamic audio controls.

---

## 3.🌟 Project Overview & Features

- **The 5-Point Core Loop**: A modified scoring system where the first player to reach 5 points triggers unique anime-themed end-game dialogues.
- **Lore-Based Victory Conditions**: 
  - **Ultimate Victory (5 Points)**: The Hokage arrives in person to congratulate your strength and invite you to Ichiraku Ramen!
  - **Defeat**: A reminder of the *Road to Ninja*, prompting a journey to Mount Myoboku and the Falls of Truth for Sage Mode training—with a massive bowl of ramen waiting for Kurama.
- **Custom Dialogue & Chakra Flow**: Dynamic messages for ties ("equilibrium of battle, just like your current chakra flow"), wins, and losses against your persistent opponent: *"Your Next Door Sparring Partner That Always Comes Back Asking For More"*.
- **Genjutsu Aesthetics**: Immersive crimson moon background (`shinobi.jpg`) paired with a modern dark glassmorphism container UI (`backdrop-filter`).
- **Interactive Audio Integration**: Built-in background music track (`bgm.mp3`) featuring the iconic theme "SIGN", complete with an active mute/unmute toggle button and automated interaction triggers on your first hand-sign move.
- **Hybrid Tracking**: Functional DOM UI updates accompanied by ninja hand-sign logs (`Ninpo: Rokku no Jutsu!`, `Kami no Jutsu!`, `Hasami no Jutsu!`) in the console.

---

## 4.🛠️ Built With

- **JavaScript (ES6)**: Game state management, score logic, DOM manipulation, syntax error debugging, and audio event listeners.
- **HTML5**: Game structure and media elements.
- **CSS3**: Glassmorphism styling, responsive layout, and background scaling.
- **Git & GitHub / Linux Terminal**: Version control, repository management, SSH port-forwarding configuration (port 443), and live production deployment.

---

## 5.💡 What I Learned & Mastered

- **Logic & Conditionals**: Deepened my understanding of game state control, scoping, and handling user inputs via event listeners.
- **DOM Manipulation**: Learned how to dynamically sync JavaScript logic with HTML layout elements for a seamless user interface.
- **Media Management & Browser Policies**: Mastered handling browser audio restriction policies and integrated programmatic play/pause toggling.
- **Debugging Real Errors**: Grew comfortable reading browser console errors (like resolving duplicate `const` declarations) to keep code functional.
- **Version Control & Deployment**: Successfully navigated Git authentication loops, SSH setup, and pushed a production-ready application live.
--
##6. 🎵 Credits & Assets

- **Background Music ("SIGN")**: Originally performed by **FLOW** (Naruto Shippuden Opening 6  SIGN). Used under artistic appreciation for the shinobi universe. Please keep in mind, that this project technically falls under the category of fanart. 
- **Visuals & Background Art**: The Genjutsu crimson moon background (`shinobi.jpg`) is currently an AI-generated placeholder to establish the atmospheric vision of the game. It serves as a visual placeholder while I work on creating and replacing it with my own custom-drawn illustrations in a future update!

7. 🌍 Internationalization (i18n) Engine & Global Reach

    Zero-Dependency Polyglot Support: Built a custom JavaScript dictionary supporting 7 languages (English, Spanish, Russian, Japanese, Korean, Chinese, and German) so players across the globe can experience the game in their native tongue.

    Inspirational Discovery: Inspired by inspecting the inner code architecture of Learn Git Branching, I wanted to bring that same cross-cultural accessibility directly into a vanilla JavaScript UI.

    Terminal-Themed Language Bar: Implemented a responsive command-line style switcher ($ set-lang:) featuring glowing neon hover effects and persistent local storage saving (localStorage) so a player's language choice is remembered across sessions.