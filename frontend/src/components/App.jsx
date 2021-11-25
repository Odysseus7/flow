import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProjectList from "./projects/ProjectList";
import { darkModeOn } from "../actions";
import { darkModeOff } from "../actions";
import ThemeButton from './theme/ThemeButton';
import "../scss/style.scss";
import Home from './home/Home';

class App extends Component {
    render() {
        const darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
        var body = document.querySelector('body');
        body.setAttribute("data-theme", `${darkMode ? "dark" : "light"}`);

        return (
            <div class="App">
                <ThemeButton onClick={ darkMode ? this.props.darkModeOff : this.props.darkModeOn } darkMode={this.props.darkMode} />
                <BrowserRouter>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={ProjectList} />
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        darkMode: state.darkMode
    }
} 

export default connect(mapStateToProps, { darkModeOn, darkModeOff })(App);