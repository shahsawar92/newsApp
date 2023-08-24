import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [currentCountry, setCurrentCountry] = useState('us');
    const [news, setnews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.fetchTopNews(currentCountry)
            .then(data => {
                setnews(data?.articles);
                setLoading(false);

            })
            .catch(error => {
                setLoading(false);

                console.error('Error fetching top news:', error);
            });
    }, [currentCountry]);
    const value = {
        currentCountry,
        setCurrentCountry,
        searchQuery,
        setSearchQuery,
        news,
        loading
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
