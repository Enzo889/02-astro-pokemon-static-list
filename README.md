# Astro Pokemon Red Static List 🔴

![Pokemon Red Hero Demo](https://img.shields.io/badge/Aesthetic-Retro%20GameBoy-red.svg)
![Astro Framework](https://img.shields.io/badge/Framework-Astro-ff5a03.svg)
![SolidJS](https://img.shields.io/badge/Islands-SolidJS-446b9e.svg)

This repository holds a robust, retro-themed web application developed as part of an **Astro learning course**. The project completely revamps a basic Pokemon static list into an immersive Gameboy "Pokemon Red" experience.

## 🎯 Project Goals

The main purpose of this application is not just to display a list of Pokemon, but to comprehensively demonstrate advanced features of the **Astro framework**:

- **Astro Islands (`client:visible`, `client:only`)**: Demonstrating partial hydration by embedding interactive SolidJS components (like Counter and Favorite buttons) efficiently within static Astro HTML.
- **View Transitions**: Creating a seamless App-like experience without full page reloads, including state persistence (`transition:persist`) for media players and local state.
- **Static Site Generation (SSG)**: Fetching data from the PokeAPI at build time to create blazingly fast pre-rendered pages.
- **Client-side Storage**: Keeping track of a user's favorite Pokemon by syncing state with `localStorage` across islands.

## 🚀 Getting Started

To run the project locally, run these commands from the root directory:

```bash
# 1. Install dependencies
pnpm install

# 2. Start the local development server
pnpm run dev
```

Visit `http://localhost:4321` to explore the beautiful retro interfaces!

## 📂 Key Features & Pages
* `Home (/)`: Interactive start menu leading to all sections, with demonstrations of View Transitions holding persistent video states.
* `Pokédex (/pokemons/1)`: SSG paginated list of the first 151 Pokemon.
* `Favorites (/favorites)`: A client-only SolidJS island interacting directly with local browser storage.
* `Islands (/islands)`: A focused demonstration ground for exploring interactive Astro features. 
