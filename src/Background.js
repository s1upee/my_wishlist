import React from 'react';
import './Background.css';

function Background() {
  const rows = 10;
  const columns = 10;
  const hearts = [];

  // Генерация сердечек в шахматном порядке с уменьшающейся непрозрачностью
  for (let i = 0; i < rows; i++) {
    const opacity = (100 - i * 10) / 100;
    for (let j = 0; j < columns; j++) {
      if ((i + j) % 2 === 0) {
        hearts.push(
          <span
            key={`${i}-${j}`}
            className="heart"
            style={{
              top: `${i * 70}px`,
              left: `${j * 70}px`,
              opacity: opacity,
            }}
          >
            ♡
          </span>
        );
      }
    }
  }

  return <div className="background">{hearts}</div>;
}

export default Background;