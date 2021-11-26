import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const CourseCard = ({id, title, description, author, URL}) => {
    return (
        <article className="courses__card">
            <section className="courses__card__text">
                <h1 className="courses__card__title">{title}</h1>
                <p className="courses__card__description">{description}</p>
                <article className="courses__card__iconContainer">
                    <a href={URL} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} className="courses__card__icon linkicon" /></a>
                </article>
            </section>
        </article>
    );
};

export default CourseCard;