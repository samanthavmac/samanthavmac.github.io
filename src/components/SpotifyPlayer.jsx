// src/spotify/SpotifyPlayer.jsx
import React from 'react';

const SpotifyPlayer = ({ playlistId }) => {
  const handleEmbedError = () => {
    console.log('Error loading Spotify playlist.');
  };

  return (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}`}
        width="100%"
        height="40%"
        allowtransparency="true"
        title="Spotify Player"
        allowFullScreen
        allow="autoplay; encrypted-media"
        loading="lazy"
        onError={handleEmbedError}
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
