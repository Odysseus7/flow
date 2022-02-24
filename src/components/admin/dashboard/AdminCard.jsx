import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, path, description }) => {
	return (
		<Link to={`/${path}`}>
			<div className="card card__home">
				<h1 className="card__home__title">{title}</h1>
				<p className="card__home__description">{description}</p>
			</div>
		</Link>
	);
};

export default Card;
