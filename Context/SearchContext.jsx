import { createContext, useState } from "react";

export const theSearchContext = createContext(null);

const SearchContext = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const values = { searchTerm, setSearchTerm };
  return (
    <theSearchContext.Provider value={values}>
      {props.children}
    </theSearchContext.Provider>
  );
};

export default SearchContext;
