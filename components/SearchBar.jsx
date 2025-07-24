import { Input } from "antd";
import { useContext } from "react";
import { theSearchContext } from "../Context/SearchContext";

const { Search } = Input;

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(theSearchContext);

  return (
    <div className="search-field">
      <Search
        placeholder="search note"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
