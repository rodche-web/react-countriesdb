import {useEffect, useState} from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';

import './CountryDetail.css';

const CountryDetail = () => {
    const [country, setCountry] = useState();
    const {name} = useParams();

    const fetchData = async name => {
        try {
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${name.toLowerCase()}?fullText=true`);
            const data = await res.json();
            console.log(data);
            setCountry(data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(name);
    }, [name])

    if(!country) {
        return <h3>Loading...</h3>
    }

    return (
        <main>
            <Link className='back-link' to='/'><FaArrowLeft />Go Back</Link>
            <div className='details-container'>
                <div className='details-image'>
                    <img src={country.flag} alt={country.name} />
                </div>
                <div className='details-description'>
                    <h1>{country.name}</h1>
                    <h3>Capital: {country.capital}</h3>
                    <p>Region: {country.region}, {country.subregion}</p>
                    <p>Population: {country.population}</p>
                    <p>Area: {country.area} sq. km.</p>
                    <p>Languages</p>
                    <ul>
                        {country.languages.map(lang => <li>{lang.name} ({lang.nativeName})</li>)}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default CountryDetail
