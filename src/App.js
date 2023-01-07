import React, { useState } from 'react';
import { useEffect } from 'react'

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=55710912';

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    //aysnc functions are ones that take time, so they are done not in sync 
    //to keep the user experience smooth and feel fast
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    //so response stores the return from the api call using title as a paramerter
    //data then converts it into json

    useEffect(()=> {
        searchMovies('batman');
    }, []);

    return (
        <div className="app">
            <h1>Movie Gallery</h1>
            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    //onchange allows for us to change the search
                />
                <img 
                src={SearchIcon}
                alt='search'
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                    ))} 
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;
