import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from "../../actions/projectsActions";
import ProjectCard from './ProjectCard';

class ProjectList extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    renderProjects() {
        return this.props.projects.map(project => 
                <ProjectCard key={project._id} id={project._id} title={project.name} description={project.description} imgURL={project.img[0]}/>
            );
    }

    render() {
        return (
            <div className="main main__projects">
                <div className="projects__container">
                    {this.renderProjects()}
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        projects: state.projects
    }
} 

export default connect(mapStateToProps, { fetchProjects })(ProjectList);