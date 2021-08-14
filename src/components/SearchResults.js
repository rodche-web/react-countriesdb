import {NavLink} from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({countriesList}) => {

    if (countriesList.length === 0) {
        return <p>Search for a country.</p>
    }

    return (
        <div className='results-container'>
            <h1>Search Results</h1>
            <ul className='results-list'>
                {countriesList && countriesList.map(country => <li><NavLink className='result-link' to={`/country/${country.name}`}>{country.name}</NavLink></li>)}
            </ul>
        </div>
    )
}

export default SearchResults
