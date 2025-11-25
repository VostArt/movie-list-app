import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FavoritesCounter from './components/FavoritesCounter';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Крестный отец",
      year: 1972,
      rating: 9.2,
      description: "Эпическая сага о сицилийской мафиозной семье Корлеоне.",
      isFavorite: false
    },
    {
      id: 2,
      title: "Побег из Шоушенка",
      year: 1994,
      rating: 9.3,
      description: "Драма о надежде и дружбе в тюремных стенах.",
      isFavorite: false
    },
    {
      id: 3,
      title: "Темный рыцарь",
      year: 2008,
      rating: 9.0,
      description: "Бэтмен сражается с хаотичным Джокером в Готэме.",
      isFavorite: false
    },
    {
      id: 4,
      title: "Форрест Гамп",
      year: 1994,
      rating: 8.8,
      description: "История простого человека, ставшего свидетелем ключевых событий американской истории.",
      isFavorite: false
    },
    {
      id: 5,
      title: "Начало",
      year: 2010,
      rating: 8.8,
      description: "Группа специалистов по внедрению в сны выполняет сложную задачу.",
      isFavorite: false
    }
  ]);

  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Загрузка избранных из localStorage при загрузке
  useEffect(() => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites);
      setFavorites(favoriteIds);
      
      // Обновляем состояние isFavorite для фильмов
      setMovies(prevMovies => 
        prevMovies.map(movie => ({
          ...movie,
          isFavorite: favoriteIds.includes(movie.id)
        }))
      );
    }
  }, []);

  // Сохранение избранных в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (movieId) => {
    setMovies(prevMovies => 
      prevMovies.map(movie => 
        movie.id === movieId 
          ? { ...movie, isFavorite: !movie.isFavorite }
          : movie
      )
    );

    setFavorites(prevFavorites => {
      if (prevFavorites.includes(movieId)) {
        return prevFavorites.filter(id => id !== movieId);
      } else {
        return [...prevFavorites, movieId];
      }
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Моя коллекция фильмов</h1>
        <FavoritesCounter count={favorites.length} />
      </header>
      
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        <MovieList 
          movies={filteredMovies} 
          onToggleFavorite={handleToggleFavorite}
        />
        
        {filteredMovies.length === 0 && (
          <div className="no-results">
            Фильмы не найдены. Попробуйте изменить поисковый запрос.
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Всего фильмов: {movies.length} | Избранных: {favorites.length}</p>
      </footer>
    </div>
  );
}

export default App;
