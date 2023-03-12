import "./EmbeddedGame.css";
import React from "react";

const EmbeddedGame = ({ gameData }) => (
        <div>
                <h1>{gameData.metadata.title}</h1>
                <h2>Published in {gameData.metadata.date}</h2>
                <h2>Created by {gameData.metadata.creator}</h2>
                <p>Media Type: {gameData.metadata.mediatype}</p>
                <p>Emulator: {gameData.metadata.emulator}</p>
                <p>{gameData.metadata.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                <iframe title="Embedded Game" src={`https://archive.org/embed/${gameData.metadata.identifier}`} width="560" height="384"></iframe>
        </div>
)

export default EmbeddedGame;
