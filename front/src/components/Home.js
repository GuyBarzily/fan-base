// src/components/Home.js
import React from 'react';
import { getLeagues } from '../axios.js'

const Home = () => {
    const handleButtonClick = async () => {
        try {
            await getLeagues(); // Call the getLeagues function
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page of your app!</p>
            <button onClick={handleButtonClick}>Fetch Leagues</button>

        </div>
    );
};

export default Home;
