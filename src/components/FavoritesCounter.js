import React from 'react';

const FavoritesCounter = ({ count }) => {
  return (
    <div className="favorites-counter">
      <span className="counter-icon">❤️</span>
      <span className="counter-text">Избранные: {count}</span>
    </div>
  );
};

export default FavoritesCounter;
