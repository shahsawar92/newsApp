import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function CountrySwitcher() {
    const { currentCountry, setCurrentCountry } = useContext(AppContext);
    const countries = ['us', 'gb'];
    return (
        <div className="country-switcher">
            {countries.map(country => (
                <button
                    key={country}
                    onClick={() => setCurrentCountry(country)}
                    className={`country-button ${currentCountry === country ? 'active' : ''}`}
                >
                    {country.toUpperCase()}
                </button>
            ))}
        </div>

    );
}

export default CountrySwitcher;
