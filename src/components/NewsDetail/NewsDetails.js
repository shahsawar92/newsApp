import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import { Container } from 'react-bootstrap';
import api from '../../services/api';
import AppContext from '../../context/AppContext';

function NewsDetail() {
    const { newsId } = useParams();
    const [newsDetail, setNewsDetail] = useState(null);
    const { currentCountry } = useContext(AppContext);

    useEffect(() => {
        api.fetchTopNews(currentCountry)
            .then(data => {
                const selectedNews = data.articles.find(news => news?.source?.id === newsId);
                setNewsDetail(selectedNews);
            })
            .catch(error => {
                console.error('Error fetching top news:', error);
            });
    }, [newsId]);

    if (!newsDetail) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="news-detail">
            <div className="news-detail-header mb-4">
                <h2 className="news-detail-title">{newsDetail.title}</h2>
                <p className="news-detail-author">Author: {newsDetail.author}</p>
            </div>
            <div className="news-detail-image">
                <img src={newsDetail.urlToImage} className="img-fluid" alt={newsDetail.title} />
            </div>
            <p className="news-detail-description">{newsDetail.description}</p>

            <Link to="/" className="text-decoration-none">
                Back to List
            </Link>
        </Container>
    );
}

export default NewsDetail;
