import React from 'react';

//notice that it there is {movie} instead of props, we are destructuring the prop to be movie
const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>    
            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/400'}
                    alt={movie.Title}
                />
            </div> 

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
}
export default MovieCard