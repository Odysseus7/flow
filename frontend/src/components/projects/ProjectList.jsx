import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from "../../actions/projectsActions";

class ProjectList extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    renderProjects() {
        // return this.props.projects.map(project => {

        // })
    }

    render() {
        return (
            <div>
               hoi 
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