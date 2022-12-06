import React, { useRef } from "react";
import "./Player.css";
import Nav from "../Nav";
import PlayerControl from "./PlayerControl";


const Player = () => {
  return (
    <div>
    <Nav/>
    <PlayerControl/>
    </div>
  );
};

export default Player 