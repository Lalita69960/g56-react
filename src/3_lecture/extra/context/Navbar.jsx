
import {ThemeContext, useTheme} from "./ThemeContext.jsx";
import {useContext} from "react";

function Navbar() {

    //const { theme, toggleTheme } = useContext(ThemeContext);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <span className="navbar-brand">My App</span>
                <button
                    className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}
                    onClick={toggleTheme}
                >
                    Switch to {theme === 'light' ? 'dark' : 'light'} mode
                </button>
            </div>
        </nav>
    );
}

export default Navbar;