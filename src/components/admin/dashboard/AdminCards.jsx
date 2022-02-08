import React from "react";
import Card from "./AdminCard";
import { cardData } from "./data";

const Cards = () => {
	const renderCards = () => {
		return cardData.map((card) => (
			<Card
				key={Math.round(Math.random() * 100)}
				title={card.title}
				path={card.path}
				description={card.description}
			/>
		));
	};

	return <div className="cards cards__admin">{renderCards()}</div>;
};

export default Cards;
