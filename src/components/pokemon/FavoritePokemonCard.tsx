import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePokemon } from "../../interfaces/FavoritePokemons.interface";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favoritePokemon") ?? "[]",
    ) as FavoritePokemon[];
    const updatedFavorites = favorites.filter(
      (fav: FavoritePokemon) => fav.id !== pokemon.id,
    );
    localStorage.setItem("favoritePokemon", JSON.stringify(updatedFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col items-center justify-center text-center gap-1">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            class="w-40 h-40"
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="text-lg font-bold">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button
          onClick={deleteFavorite}
          class="bg-red-700 hover:bg-red-900 transition-colors duration-200 text-white px-4  py-2 rounded-lg cursor-pointer"
        >
          Delete
        </button>
      </div>
    </Show>
  );
};
