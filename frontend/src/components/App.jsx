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
    

    setDarkMode() {
        this.darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
        var body = document.querySelector('body');
        body.setAttribute("data-theme", `${this.darkMode ? "dark" : "light"}`);
    }
    

    render() {
        this.setDarkMode();
        const logo = <a href="/"><img src="../images/logo.svg" class="logo" alt="Logo" /></a>;

        return (
            <div class="app">
                <header className="app__header">
                    {window.location.pathname === '/' ? "" : logo}
                    <ThemeButton onClick={ this.darkMode ? this.props.darkModeOff : this.props.darkModeOn } darkMode={this.props.darkMode} />
                </header>
                
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