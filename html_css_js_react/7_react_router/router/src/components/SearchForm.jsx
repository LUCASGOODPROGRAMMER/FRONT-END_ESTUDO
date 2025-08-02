import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?name=" + query);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar produto"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
