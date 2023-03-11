import "./EmbeddedGame.css";

const EmbeddedGame = () => (
        <div className="embeddedGame">
              <header className="game-header">
              <iframe title="Embedded Game" src={"https://archive.org/embed/msdos_Tetris_1986"} width="560" height="384"></iframe>
          </header>
        </div>
);

export default EmbeddedGame;
