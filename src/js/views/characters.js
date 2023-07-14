import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * 1. Declarar una variable de estado para albergar todos los characters
 * 2. usar useEffect para hacer una única petición a la API https://rickandmortyapi.com/api/character y traernos todos los personajes de la serie
 * 3. Iterar la variable de estado para mostrar  la imagen y nombre de cada uno de los personajes 
 * Corregimos a las 18h
 */

export function Characters() {

    const [characters, setCharacters] = useState([]);

    const getAllCharacters = () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }

    useEffect(() => {
        getAllCharacters(); // <--- implementame !!
    }, [])

    return (
        <div className="text-center">
            <h1>All Characters</h1>
            <div className="container">
                <div className="row row-cols-3">
                    {characters.map(c => <Link><div key={c.id}>
                        <img src={c.image}></img>
                        <p>{c.name}</p>
                    </div>  </Link>)
                    }
                </div>
            </div>

        </div>
    );
}