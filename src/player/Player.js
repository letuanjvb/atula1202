import React, { useRef } from "react";
import "./Player.css";
import Nav from "../Nav";
import PlayerControl from "./PlayerControl";
import FilmInfo from "./FilmInfo";


const Player = () => {
  return (
    <div>
    <Nav/>
    <PlayerControl/>
    <FilmInfo />
    </div>
  );
};

export default Player 