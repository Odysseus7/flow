import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({id, title, description, imgURL}) => {
    return (
        <Link to={`/projects/${id}`}>
            <div className="projects__card">
                <div className="projects__card__text">
                    <h1 className="projects__card__title">{title}</h1>
                    <p className="projects__card__description">{description}</p>
                </div>
                <div className="projects__card__img">
                    <img src={imgURL} alt={title} />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;