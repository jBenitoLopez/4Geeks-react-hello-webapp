const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [], // guardaremos todos nuestros personajes como favoritos
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addToFavorites: (character) => {
				// 1. Recuperar el almacen de variables globales
				const store = getStore();

				// 2. Crear una nueva variable con el estado anterior + el nuevo
				const newFavorites = [...store.favorites, { ...character }];

				// 3. Machacar la variable de estado con la nueva info
				setStore({ favorites: newFavorites });
			},
			removeFromFavorites: (character) => {
				// 1. Recuperar el almacen de variables globales
				const store = getStore();

				// 2. Crear una nueva variable con el estado anterior + el nuevo
				const newFavorites = store.favorites.filter((fav) => fav.id !== character.id);

				// 3. Machacar la variable de estado con la nueva info
				setStore({ favorites: newFavorites });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
