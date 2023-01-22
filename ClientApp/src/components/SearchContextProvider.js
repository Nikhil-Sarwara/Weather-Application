import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("None");
    const [searchResult, setSearchResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [selectedCity, setSelectedCity] = useState({});

    return (
        <SearchContext.Provider value={{searchQuery, setSearchQuery, loading, setLoading, searchResult, setSearchResult, notFound, setNotFound}}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchContextProvider };
