import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light m-3 pt-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<Link to="/all-characters">
				<span className="navbar-brand mb-0 h1">All Characters</span>
			</Link>
			<Link to="/favorites">
				{/* <button type="button" class="btn btn-primary">
					Favorites <span class="badge badge-secondary"></span>
				</button> */}

				<button type="button" className="btn btn-primary position-relative">
					Favorites
					<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
						{store.favorites.length}
					</span>
				</button>

			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
