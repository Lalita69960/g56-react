import React from 'react';
import {Routes,Route} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

const Home = () => {
    return(
        <div className="container">
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
        </div>
    )
};
const About = () => {
    return (
        <div className="container">
            <h1>About Page</h1>
            <p>This is the about page of our application.</p>
        </div>
    );
}
const Contact = () => {
    return (
        <div className="container">
            <h1>Contact Page</h1>
            <p>This is the contact page of our application.</p>
        </div>
    );
}
const NotFound = () => {
    return(
        <div className="container text-center">
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    )

}

export default AppRouter;