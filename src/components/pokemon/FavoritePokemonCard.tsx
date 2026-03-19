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
      <div class="retro-dialog flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-100 transition-colors">
        <a href={`/pokemons/${pokemon.name}`} class="flex flex-col items-center">
          <img
            src={imageSrc}
            alt={pokemon.name}
            class="w-32 h-32 mb-2"
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="text-xs sm:text-sm uppercase font-bold">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button
          onClick={deleteFavorite}
          class="retro-btn retro-btn-red text-xs mt-2"
        >
          Delete
        </button>
      </div>
    </Show>
  );
};
