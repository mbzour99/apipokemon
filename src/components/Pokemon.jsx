import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const handleClick = (() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => response.json())
            // .then(data => setPokemons(data.results))
            .then(data => setPokemons(data.results))

    })
    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/')
    //         .then(response => response.json())
    //         .then(data => setPokemons(data.results))
    //         .then(data => setPokemons(data.results))
    // }, []);
    console.log(pokemons)
    return (
        <div>
            <button onClick={(e) => handleClick()}>Fetch Pokemons</button>
            <div>
                <h1>List of Pokemons</h1>
                {pokemons ? pokemons.map((pok, id) => {
                    return (
                        <ul>
                            <li key={id}>
                                {pok.name};
                            </li>
                        </ul>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Pokemon;