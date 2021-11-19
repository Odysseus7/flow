import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchProject } from "../../actions/projectsActions";

class Project extends Component {

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <div className="project__card">
            {/* <div className="projects__carousel">
                <img src={imgURL} alt={title} />
            </div>
            <div className="project__card__text">
                <h1 className="project__card__title">{title}</h1>
                <p className="projects__card__description">{description}</p>
            </div> */}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        project: state.project
    }
} 


export default withRouter(connect(mapStateToProps, { fetchProject })(Project));