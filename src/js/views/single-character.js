import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
/*
    1. Declarar una variable de estado para albergar la informacion del personaje
    2. Mediante eluso de useEffect, hacer una llamada a la API. Hay que parametrizarla porque solo queremos la info de un personaje.
        url: https://rickandmortyapi.com/1
    3. Cuando obtengamos la info de la API, actualizar la variable de estado y modificar el JSC para mostrar la información
    nombre, status, psecies, gender, img

    ★☆
*/

export const SingleCharacter = () => {

    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState({});
    let [isFavorite, setIsFavorite] = useState(false);

    const isFavoriteFn = () => {
        return store.favorites.some((fav) => character.id === fav.id)
    }

    useEffect(() => {
        setIsFavorite(isFavoriteFn);
        getSingleCharacter();
        console.log('useEffect', store.favorites, isFavorite);
    }, []);

    const getSingleCharacter = () => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then(({ id, name, image, status, species, gender }) => {
                setCharacter({ id, name, image, status, species, gender });
            })
            .catch((error) => console.error(error));
    }

    const handleClickFavorite = () => {

        // console.log('handleClickFavorite.before', character, isFavorite);

        if (isFavorite) {
            actions.removeFromFavorites(character);
            setIsFavorite(false)
        } else {
            actions.addToFavorites(character);
            setIsFavorite(true)
        }

        // console.log('Almacén de variables globales tras añadir a favoritos', store);
    }
    // , status, psecies, gender, 
    return (
        <div className="text-center mt-3">
            <div className="row d-flex justify-content-center">
                <div className="card m-2" style={{ width: '32rem' }}>
                    <div className="position-relative">
                        <img src={character.image} className="card-img-top" alt={character.name} />
                        <span className={`favorite ${isFavorite && 'favorite-yes'}`} onClick={handleClickFavorite}>★</span>
                    </div>
                    <div className="card-body mb-4">
                        <h2 className="card-title my-3">{character.name}</h2>
                        <p className="card-text"><b>Status: </b>{character.status}</p>
                        <p className="card-text"><b>Species: </b>{character.species}</p>
                        <p className="card-text"><b>Gender: </b>{character.gender}</p>
                        {/* <p><button className="btn btn-primary" onClick={handleClickFavorite}>Add to Favorite</button></p> */}
                    </div>

                </div>
            </div>
        </div >
    );
};
