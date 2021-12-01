import React from 'react';

const BookCard = ({name, description, author, image, URL}) => {
    return (
        <article className="books__card">
            <section className="books__card__text">
                <h1 className="books__card__title">{name}</h1>
                <p className="books__card__author">by {author}</p>
                <p className="books__card__description">{description}</p>
            </section>
            <section className="books__card__image">
                <img src={image} alt={`cover of${name}`} />
            </section>
            {/* <a href={URL} target="_blank" rel="noreferrer">
                <article className="books__card__link">
                    more info &nbsp; <FontAwesomeIcon icon={faLink} className="books__card__icon linkicon" />
                </article>
            </a> */}
        </article>
    );
};

export default BookCard;