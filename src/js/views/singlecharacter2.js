import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export function SingleCharacter() {

    // id es el nomnre del parámetro que hemos puesto como parámetro dinámico del a ruta en layout.js

    // <Route path="/character/:id" element={<SingleCharacter />} />


    const { id } = useParams();

    /**
     * 1. DEclarar una variable de estado para albergar la información del personaje
     * 2. Mediante el uso de useEffect, hacer una llamada a la API.  Hay que parametrizarla porque solo queremos la info de un personaje. https://rickandmortyapi.com/api/character/1 , nos daría la información del personaje con id=1 
     * 3. Cuando obtengamos la info de la API, actualizar la variable de estado y modificar el JSX para mostrar la información : 
     * 
     * - Nombre
       - Imagen
       - Status
       - Species
        - Gender
     */

    const getCharacter = () => {
        fetch('https://rickandmortyapi.com/api/character/' + id)
            .then(res => res.json())
            .then(data => setCharacter(data));
    }

    useEffect(() => {
        getCharacter(); // <--- implementame !!
    }, [])

    const [character, setCharacter] = useState({
        name: '',
        image: '',
        gender: '',
        species: '',
        status: ''
    })

    return (
        <div className="card mx-auto" style={{
            width: "18rem"
        }}>
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.gender}</p>
                <p className="card-text">{character.species}</p>
                <p className="card-text">{character.status}</p>
            </div>
        </div>
    );
}