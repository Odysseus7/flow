import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { GlobalStyles } from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/Themes"
import ProjectList from "./projects/ProjectList";
import { darkModeOn } from "../actions";
import { darkModeOff } from "../actions";
import { ThemeProvider } from "styled-components";
import ThemeButton from './theme/ThemeButton';
import "../scss/style.scss";
import Home from './home/Home';

class App extends Component {
    render() {
        const darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
        return (
            <ThemeProvider theme={ darkMode ? darkTheme : lightTheme}>
                <GlobalStyles />
                    <ThemeButton onClick={ darkMode ? this.props.darkModeOff : this.props.darkModeOn } darkMode={this.props.darkMode} />
                    <BrowserRouter>
                        <Route path="/" exact component={Home} />
                        <Route path="/projects" component={ProjectList} />
                    </BrowserRouter>
            </ThemeProvider>
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