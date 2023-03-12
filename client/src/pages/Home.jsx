import { useEffect, useState } from "react";
import RegisterForm from "../components/FormRegister";
import Loading from "../components/Loading";
import SearchResults from "../components/SearchResults";
import SearchBar from "../components/Bar:Search";
import LoginForm from "../components/FormLogin";

function Home() {
  const [loading, setLoading] = useState(true);
  const [results, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const apiUrl = `https://archive.org/advancedsearch.php?q=subject:${searchInput}%20collection:softwarelibrary_msdos_games&output=json`;

  useEffect(() => {
    const fetchSearchQuery = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSearchResults(data.response.docs);
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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RegisterForm />
      <LoginForm></LoginForm>
      <SearchBar handleSearchInput={handleSearchInput} />
      <SearchResults searchResults={results} />
    </>
  );
}

export default Home;
