import { useEffect, useState } from "react";
import EmbeddedGame from "../components/EmbeddedGame";
import Loading from "../components/Loading";
import LoginForm from "../components/FormLogin";
import SearchBar from "../components/Bar:Search";
import SearchResults from "../components/SearchResults";

const identifier = "eat_it_20";

const fetchGame = async () => {
  try {
    const response = await fetch(`https://archive.org/metadata/${identifier}`);
      const data = await response.json();
      return data;
  } catch (error) {
    console.error(error);
  }
};

const Account = () => {
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState({});
  const [results, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const apiUrl = `https://archive.org/advancedsearch.php?q=subject:${searchInput}%20collection:softwarelibrary_msdos_games&output=json`;



    useEffect(() => {
      const fetchSearchQuery = async () => {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setSearchResults(data.response.docs);
          console.log(data.response.docs)

        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      if (searchInput) {
        fetchSearchQuery();
      } else {
        setSearchResults([]);
        setLoading(false);
      }
    }, [searchInput, apiUrl]);
  
    const handleSearchInput = (e) => {
      setSearchInput(e.target.value);
    };
  
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
      <LoginForm></LoginForm>
      <SearchBar handleSearchInput={handleSearchInput} />
      <SearchResults searchResults={results} />
      {gameData?.files && <EmbeddedGame gameData={gameData} />}
    </>
  );
};

export default Account;
