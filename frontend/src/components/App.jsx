import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { GlobalStyles } from "./Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./Theme/Themes"
import ProjectList from "./projects/ProjectList";
import { darkModeOn } from "../actions";
import { darkModeOff } from "../actions";
import { ThemeProvider } from "styled-components";
import ThemeButton from './Theme/ThemeButton';
import "../scss/style.scss";

class App extends Component {
    
    render() {
        const darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
        return (
            
            <ThemeProvider theme={ darkMode ? darkTheme : lightTheme}>
                <GlobalStyles />
                <div>
                    <BrowserRouter>
                        <Route path="/projects" component={ProjectList} />
                    </BrowserRouter>
                    <ThemeButton onClick={ darkMode ? this.props.darkModeOff : this.props.darkModeOn } darkMode={this.props.darkMode} />
                </div>
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