import { useEffect, useState } from "react";
import EmbeddedGame from "../components/EmbeddedGame";
import Loading from "../components/Loading";

const fetchGame = () => {
    return fetch("/api/users").then((res) => res.json());
};
  
const Account = () => {
    const [loading, setLoading] = useState(false);
    const [game, setGame] = useState(null);
    const [src, setSource] = useState(null);

    useEffect(() => {
        fetchGame()
            .then((game) => {
                setLoading(false);
                setGame(game);
                setSource(src);
            })
    }, [game, src]);
    
    if (loading) {
        return <Loading />;
    }
    
    return <EmbeddedGame></EmbeddedGame>
};
  
export default Account;