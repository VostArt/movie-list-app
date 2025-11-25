import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onToggleFavorite }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default MovieList;
