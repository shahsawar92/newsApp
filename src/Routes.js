import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsList from './components/NewsList/NewsList';
import NewsDetails from './components/NewsDetail/NewsDetails';
import SearchNews from './utils/search';


function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/news/:newsId" element={<NewsDetails />} />
            <Route path="/search" element={<SearchNews />} />
        </Routes>
    );
}

export default AppRoutes;
