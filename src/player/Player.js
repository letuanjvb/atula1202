// import React, { useRef } from 'react';
// import './Player.css';
// import Nav from '../Nav';
// import PlayerControl from './PlayerControl';
// import FilmInfo from './FilmInfo';

// const Player = () => {
//   return (
//     <div>
//       <Nav />
//       <PlayerControl />
//       <FilmInfo />
//     </div>
//   );
// };

// export default Player;

import React from 'react';
import { Player } from 'react-tuby';
import 'react-tuby/css/main.css';
// import "./Tuby.css";

const Tuby = () => {
  return (
    <div>
      <Player
        src={[
          {
            quality: 1080,
            url: 'https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/1080.mp4'
          },
          {
            quality: 720,
            url: 'https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/720.mp4'
          },
          {
            quality: 480,
            url: 'https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/480.mp4'
          }
        ]}
        subtitles={[
          {
            lang: 'en',
            language: 'English',
            url: 'https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt'
          },
          {
            lang: 'fr',
            language: 'French',
            url: 'https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/fr.vtt'
          }
        ]}
        poster="https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/poster.png"
        pictureInPicture="true"
        seekDuration="20"
        playerKey="abcd"
      />
      {/* <Player
        src="https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/1080.mp4"
        keyboardShortcut={{
          pause: false,
          forward: true,
          rewind: true,
          fullScreen: true,
          mute: true,
          subtitle: true,
          seekDuration: 20,
        }}
      /> */}
    </div>
  );
};

export default Tuby;
