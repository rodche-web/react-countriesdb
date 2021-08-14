import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const HomePage = ({searchCountry, countriesList}) => {
    return (
        <main>
            <SearchBar searchCountry={searchCountry} />
            <SearchResults countriesList={countriesList} />
        </main>
    )
}

export default HomePage
