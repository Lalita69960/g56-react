import {ThemeProvider} from "./ThemeContext.jsx";
import Content from "./Content.jsx";
import Navbar from "./Navbar.jsx";
import React from "react";

function AppCtx() {
    return (
        <ThemeProvider>
            <div className="container mt-5">
                <Navbar/>
                <Content />
            </div>
        </ThemeProvider>
    );
}

export default AppCtx;