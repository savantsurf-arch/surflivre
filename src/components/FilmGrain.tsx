import React from 'react';

export const FilmGrain: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.035] mix-blend-overlay film-grain"
    />
  );
};
