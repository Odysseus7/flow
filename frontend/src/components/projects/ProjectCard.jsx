import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({id, title, description, imgURL, URL, githubURL}) => {
    return (
        <article className="projects__card">
            <section className="projects__card__text">
                <h1 className="projects__card__title">{title}</h1>
                <p className="projects__card__description">{description}</p>
            </section>
            <section className="projects__card__img">
                <img src={imgURL} alt={title} />
            </section>
        </article>
    );
};

export default ProjectCard;