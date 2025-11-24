import {useContext} from "react";
import {ThemeContext, useTheme} from "./ThemeContext.jsx";

function Content() {

    //const { theme } = useContext(ThemeContext);
    const { theme } = useTheme();

    return (
        <main className={`container mt-4 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <div className="p-4 rounded">
                <h2 className="mb-4">Welcome to our app!</h2>
                <p className="mb-2">Current theme: {theme}</p>
                <div className="card">
                    <div className={`card-body ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white'}`}>
                        <h5 className="card-title">Example Card</h5>
                        <p className="card-text">This is an example of how the theme context affects nested components.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Content;