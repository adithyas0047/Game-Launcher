# 🎮 Game Launcher (Electron.js)

![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A lightweight **desktop game launcher** built using **Electron.js**, **HTML**, **Bootstrap**, and **JavaScript**.  
This application allows users to add locally installed games, display them as cards with cover images, and launch them with a single click.

## Features

- Desktop application built with **Electron**
- Add games using:
  - Game name
  - Executable game path
  - Cover image URL (from the internet)
- Clean card-based UI using **Bootstrap**
- One-click **Play** button to launch games
- Delete games from the library
- Persistent storage using **localStorage**
- Native Windows menu support
- Lightweight and fast

## Tech Stack

- **Electron.js** – Desktop application framework
- **Node.js** – Backend process
- **HTML / CSS / JavaScript**
- **Bootstrap 5** – UI styling
- **Electron IPC** – Secure communication between renderer & main process

## UI Preview

- Game Library with card layout
- Add Game form
- Play & Delete actions per game

_(Screenshots can be added here later)_

## Project Structure

```text
GameLauncher/
├── assets/              # Images & icons
├── index.html           # Main UI
├── gamePath.html        # Add Game form
├── index.js             # Renderer logic (game cards)
├── gamePath.js          # Add game logic
├── main.js              # Electron main process
├── preload.js           # Secure IPC bridge
├── package.json
└── README.md
```

## How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/game-launcher.git
cd game-launcher
```

2. Install dependencies

```bash
npm install
```

3. Start the app

```bash
npm start
```

## Future Improvements

- Dark mode
- Search & filter games
- Categories/tags
- Recently played games
- Steam/ Epic detection
- Database instead of localstorage

## Show your support

If you liked this project:

- Star the repository ⭐
- Fork it
- Give feedback or suggestion
