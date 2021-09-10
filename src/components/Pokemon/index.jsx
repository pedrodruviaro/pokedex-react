import React, { useState } from "react";
import { Pokemon, PokemonInfo, PokemonStats } from "./styles";

export default function Index({ pokemon }) {
    const [showShiny, setShowShiny] = useState(false);

    return (
        <Pokemon>
            <header>
                <h2>{pokemon.name}</h2>
                <h3>
                    Pokedex Number: <span>{pokemon.id}</span>
                </h3>
                <img
                    src={
                        !showShiny
                            ? pokemon.sprites["front_default"]
                            : pokemon.sprites["front_shiny"]
                    }
                    alt={pokemon.name}
                />
            </header>
            <button onClick={() => setShowShiny(!showShiny)}>
                {showShiny ? "Show normal version" : "Show shiny version"}
            </button>

            <PokemonInfo>
                <p>
                    height:
                    <span>{pokemon.height} m</span>
                </p>
                <div className="types">
                    {pokemon.types.map((type, i) => (
                        <p key={i}>{type.type.name}</p>
                    ))}
                </div>
                <p>
                    weight:
                    <span>{pokemon.weight} kg</span>
                </p>
            </PokemonInfo>

            <PokemonStats className="stats">
                <h3>Stats</h3>
                {pokemon.stats.map((stat, i) => (
                    <div key={i}>
                        <span>{stat.stat.name}: </span>
                        <span>{stat.base_stat}</span>
                    </div>
                ))}
            </PokemonStats>
        </Pokemon>
    );
}
