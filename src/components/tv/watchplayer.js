import React from 'react';
import { Link } from 'react-router-dom';
import Player from './player';

const watchplayer = () => {
  return (
    <div>
      <Link className="banner_button" to={`/`}>
        quay lại
      </Link>
      <Player />
    </div>
  );
};

export default watchplayer;
