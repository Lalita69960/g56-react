import React from 'react';
import {Routes,Route, Link, NavLink, Outlet} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="/dashboard" element={<Dashboard/>}>
                <Route index element={<DashboardHome/>}/>
                <Route path="users" element={<ManageUsers/>}/>
                <Route path="invitations" element={<Invitations/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

const Home = () => {
    return(
        <div className="container">
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>

            <Link className="btn btn-primary" to="/dashboard">
                Dashboard
            </Link>

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

const Dashboard = () => {
    return (
        <div className="container-fluid vh-100 d-flex flex-column">
            <div className="row flex-grow-1">
                {/* Sidebar */}
                <div className="bg-light col-md-3 col-lg-2 px-0">
                    <div className="bg-light p-3 h-100">
                        <div className="nav flex-column">
                            <NavLink
                                to="/dashboard"
                                className="btn btn-outline-secondary w-100 mb-2"
                            >
                                Dashboard Home
                            </NavLink>
                            <NavLink
                                to="/dashboard/users"
                                className="btn btn-outline-success w-100 mb-2"
                            >
                                Manage Users
                            </NavLink>
                            <NavLink
                                to="/dashboard/invitations"
                                className="btn btn-outline-success w-100 mb-2"
                            >
                                Invitations
                            </NavLink>
                            <NavLink
                                to="/dashboard/settings"
                                className="btn btn-outline-success w-100 mb-2"
                            >
                                Settings
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <main className="col-md-9 col-lg-10 px-md-4 h-100">
                    <div className="pt-3">
                        <Outlet/>
                    </div>
                </main>
            </div>
        </div>)
};



//Routes in the Dashboard
const DashboardHome = () => <h2>Welcome to the Dashboard!</h2>;
const ManageUsers = () => <h2>Manage Users Page</h2>;
const Invitations = () => <h2>Invitations Page</h2>;
const Settings = () => <h2>Settings Page</h2>;



export default AppRouter;