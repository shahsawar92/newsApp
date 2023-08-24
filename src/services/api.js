const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

async function fetchTopNews(country) {
    try {
        const response = await fetch(
            `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching top news:', error);
        throw error;
    }
}
const api = { fetchTopNews };

export default api;
