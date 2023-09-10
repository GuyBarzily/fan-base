// src/pages/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<Home />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
