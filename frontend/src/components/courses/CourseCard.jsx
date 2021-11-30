import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const CourseCard = ({title, description, author, URL}) => {
    return (
        <article className="courses__card">
            <section className="courses__card__text">
                <h1 className="courses__card__title">{title}</h1>
                <p className="courses__card__author">by {author}</p>
                <p className="courses__card__description">{description}</p>
            </section>
            <a href={URL} target="_blank" rel="noreferrer">
                <article className="courses__card__link">
                    more info &nbsp; <FontAwesomeIcon icon={faLink} className="courses__card__icon linkicon" />
                </article>
            </a>
        </article>
    );
};

export default CourseCard;