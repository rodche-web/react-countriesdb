import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';

import './SearchBar.css';

const SearchBar = (props) => {
    const [name, setName] = useState('');
    const {searchCountry} = props;

    const submitHandler = e => {
        e.preventDefault();
        searchCountry(name);
        setName('');
    }
    return (
        <div clasName='search-bar'>
            <form onSubmit={submitHandler}>
                <input className='search-input' type='text' value={name} onChange={e => setName(e.target.value)} />
                <button className='search-btn'><FaSearch /></button>
            </form>
        </div>
    )
}

export default SearchBar
