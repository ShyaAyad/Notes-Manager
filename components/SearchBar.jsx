import Search from "antd/es/transfer/search"

const SearchBar = () => {
  return (
    <div className="search-field">
      <Search placeholder="search note" className="search-input"/>
    </div>
  )
}

export default SearchBar