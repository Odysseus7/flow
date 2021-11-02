import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProjectList from "./projects/ProjectList";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/projects" component={ProjectList} />
            </BrowserRouter>
        </div>
    );
}

export default App;