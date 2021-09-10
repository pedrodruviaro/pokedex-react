import React, { useEffect, useRef, useState } from "react";
import { Pokedex } from "./styles";
import Pokemon from "../Pokemon";

export default function Index() {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);

    const query = useRef(1);

    useEffect(() => {
        console.log(`usei effect`);
        fetch(`https://pokeapi.co/api/v2/pokemon/1`)
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, []);

    async function handleNextPokemon() {
        query.current++;
        const getData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${query.current}`
        );
        const result = await getData.json();
        setPokemon(result);
    }

    async function handlePreviousPokemon() {
        if (query.current <= 1) {
            return;
        }
        query.current--;
        const getData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${query.current}`
        );
        const result = await getData.json();
        setPokemon(result);
    }

    // submit
    async function handleSubmit(e) {
        e.preventDefault();

        if (search.trim() === "") {
            return;
        }

        const getData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${search}`
        );

        if (getData.status !== 200) {
            console.log(`algo deu errado`);
            return;
        }

        const result = await getData.json();
        console.log(result);
        setPokemon(result);
    }

    return (
        <Pokedex>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Pokemon name or Pokedex number"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">Search</button>
            </form>

            <main>
                <div>
                    <button onClick={handlePreviousPokemon}>PREV</button>
                    <button onClick={handleNextPokemon}>NEXT</button>
                </div>
                {pokemon ? <Pokemon pokemon={pokemon} /> : ""}
            </main>
        </Pokedex>
    );
}
