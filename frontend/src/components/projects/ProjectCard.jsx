import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({id, title, description, imgURL, URL, githubURL}) => {
    const linkIcon = <a href={URL} target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} className="projects__card__icon linkicon" /></a>;
    return (
        <article className="projects__card">
            <section className="projects__card__text">
                <h1 className="projects__card__title">{title}</h1>
                <p className="projects__card__description">{description}</p>
                <article className="projects__card__iconContainer">
                    <a href={githubURL} target="_blank"><FontAwesomeIcon icon={faGithub} className="projects__card__icon" /></a>
                    {URL ? linkIcon : "" }
                </article>
            </section>
            <section className="projects__card__img">
                <img src={imgURL} alt={title} />
            </section>
        </article>
    );
};

export default ProjectCard;