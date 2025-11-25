import React from 'react';

const MovieCard = ({ movie, onToggleFavorite }) => {
  return (
    <div className={`movie-card ${movie.isFavorite ? 'favorite' : ''}`}>
      <div className="movie-header">
        <h3 className="movie-title">{movie.title}</h3>
        <button 
          className={`favorite-btn ${movie.isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(movie.id)}
          aria-label={movie.isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        >
          {movie.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="movie-info">
        <span className="movie-year">📅 {movie.year}</span>
        <span className="movie-rating">⭐ {movie.rating}</span>
      </div>
      
      <p className="movie-description">{movie.description}</p>
    </div>
  );
};

export default MovieCard;
