import React from "react";
import "./Player.css";
import Nav from "../../components/Nav/Nav";
import PlayerControl from "../../components/Movie/PlayerControl";
import FilmInfo from "../../components/Movie/FilmInfo";

const Player = () => {
  return (
    <div>
      <Nav />
      <PlayerControl />
      <FilmInfo />
    </div>
  );
};

export default Player;
