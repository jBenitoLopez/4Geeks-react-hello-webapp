import React, { useState, useEffect } from "react";

/*
    1. Declarar una variable de estado para albergar todos los characters
    2. Usar useEffect para hacer una única petición (fetch) a la API https://rickandmortyapi.com/
    3. Iterar la variable de estado para mostrar la imagen y nombre de cada uno de los personajes

    18h

*/

export const AllCharacters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters();
    }, [characters]);

    const getAllCharacters = () => {
        return fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results)
            })
            // .then(console.log)
            .catch((error) => console.error(error));

    }
    return (
        <div className="text-center mt-5">
            <h1>Hello AllCharacters!</h1>
            <div className="row d-flex justify-content-center">
                {
                    characters.map((item) => {
                        return (
                            <div key={item.id} className="card m-2" style={{ width: '18rem' }}>
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};