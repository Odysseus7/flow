import React from "react";
import Card from "./Card";
import { cardData } from "./data";

const Cards = () => {
	const renderCards = () => {
		return cardData.map((card) => (
			<Card
				key={card.title}
				title={card.title}
				description={card.description}
			/>
		));
	};

	return <div className="cards cards_home">{renderCards()}</div>;
};

export default Cards;
