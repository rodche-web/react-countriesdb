import {useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CountryDetail from './pages/CountryDetail';
import Header from './components/Header';

const App = () => {
    const [countriesList, setCountriesList] = useState([]);

    const searchCountry = async name => {
        try {
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
            const data = await res.json();
            setCountriesList(data)
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact><HomePage countriesList={countriesList} searchCountry={searchCountry} /></Route>
                <Route path='/country/:name'><CountryDetail /></Route>
            </Switch>
        </div>
    )
}

export default App
