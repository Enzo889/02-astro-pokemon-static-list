import { createSignal, For } from "solid-js";
import type { FavoritePokemon } from "../../interfaces/FavoritePokemons.interface";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem("favoritePokemon") ?? "[]",
  );
  return favoritePokemons;
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons().length === 0 ? (
        <p class="col-span-full text-center">
          No favorite pokemons yet. Go to the{" "}
          <a
            class="underline transition-colors duration-300 hover:text-red-600"
            href="/pokemons/1"
          >
            pokédex
          </a>{" "}
          to add some.
        </p>
      ) : (
        <For each={pokemons()}>
          {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
        </For>
      )}
    </div>
  );
};
