import { useEffect, useState } from "react";
import EmbeddedGame from "../components/EmbeddedGame";
import Loading from "../components/Loading";

const identifier = "eat_it_20";

const fetchGame = async () => {
  try {
    const response = await fetch(`https://archive.org/metadata/${identifier}`);
      const data = await response.json();
      console.log(data)

      return data;
  } catch (error) {
    console.error(error);
  }
};

const Account = () => {
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState({});

    useEffect(() => {
    
        fetchGame().then((data) => {
            setLoading(false)
            setGameData(data);
        });
    }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <EmbeddedGame gameData={gameData} />
    </>
  );
};

export default Account;
