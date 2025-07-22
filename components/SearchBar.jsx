import { Input } from "antd"

const { Search } = Input;

const SearchBar = () => {
  return (
    <div className="search-field">
      <Search placeholder="search note" className="search-input" />
    </div>
  )
}

export default SearchBar