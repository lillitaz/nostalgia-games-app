import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import SearchResults from "../components/SearchResults";

const searchInput = "pacman";

const searchQuery = `subject:${searchInput} collection:softwarelibrary_msdos_games`;
const apiUrl = `https://archive.org/advancedsearch.php?q=${searchQuery}&output=json`;

const fetchSearchQuery= async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

function Home() {
  const [loading, setLoading] = useState(true);
  const [results, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchQuery().then((data) => {
      setLoading(false);
      setSearchResults(data.response.docs);
    });
  }, []);
  
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SearchResults searchResults={results} />
    </>
  );
}

export default Home;