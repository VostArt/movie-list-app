import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Поиск фильмов..."
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
