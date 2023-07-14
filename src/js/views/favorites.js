/**
 * 1. En el fichero layout.js añadir la nueva ruta para que renderice la vista views/favorites.js
 * 2. En el NavBar añadir un nuevo botón para navegar a la vista de favoritos 
 * 3. En esta vista, acceder a store.favorites, y renderizar todos los items alli presentes
 * 4. Para el tema de la fecha en la que hemos añadido como favoriots, teneis que informar de ello con una nueva propiedad en el momento de añadir el character a favorites (desde la vista singlecharacter, o en mismo flux.js)
 * 
 * 
 * Corregimos 17.30 - 17.45
 */
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export function Favorites() {
    const characters = [];

    const { store, actions } = useContext(Context);
    console.log(store.favorites)
    return (
        <div className="text-center mt-5">
            <h1 className="mb-5">Favorites!</h1>
            <div className="row d-flex justify-content-center">
                {
                    //https://jbenitolopez-super-lamp-6qvvg97v4pxc5pxq-3000.preview.app.github.dev/character/1
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
    )
}