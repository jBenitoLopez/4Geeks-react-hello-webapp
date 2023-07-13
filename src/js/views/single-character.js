import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
/*
    1. Declarar una variable de estado para albergar la informacion del personaje
    2. Mediante eluso de useEffect, hacer una llamada a la API. Hay que parametrizarla porque solo queremos la info de un personaje.
        url: https://rickandmortyapi.com/1
    3. Cuando obtengamos la info de la API, actualizar la variable de estado y modificar el JSC para mostrar la información
    nombre, status, psecies, gender, img
*/

export const SingleCharacter = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {

        getSingleCharacter();
    }, []);

    const getSingleCharacter = () => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then(({ id, name, image, status, species, gender }) => {
                setCharacter({ id, name, image, status, species, gender });
                // console.log(data)
            })
            .catch((error) => console.error(error));

    }
    // , status, psecies, gender, 
    return (
        <div className="text-center mt-3">
            <div className="row d-flex justify-content-center">
                <div className="card m-2" style={{ width: '32rem' }}>
                    <img src={character.image} className="card-img-top" alt={character.name} />
                    <div className="card-body mb-4">
                        <h2 className="card-title my-3">{character.name}</h2>
                        <p className="card-text"><b>Status: </b>{character.status}</p>
                        <p className="card-text"><b>Species: </b>{character.species}</p>
                        <p className="card-text"><b>Gender: </b>{character.gender}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};
