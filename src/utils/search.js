import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import NewsItem from '../components/NewsItem/NewsItem';

function SearchNews() {
    const { currentCountry, news } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState('');

    const lowercasedSearchQuery = searchQuery.toLowerCase();
    const filteredNews = searchQuery
        ? news.filter(newsItem =>
            newsItem.title.toLowerCase().includes(lowercasedSearchQuery)
        )
        : [];

    return (
        <Container>
            <Row>
                <div className="p-3 font-weight-bold h4 rounded-circle bg-light">
                    Search News Form{' '}
                    {currentCountry === 'us' ? 'United States' : 'Great Britain'}:
                </div>
            </Row>
            <Row>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search news by title"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="mb-3"
                    />
                </Col>
            </Row>
            <Row>
                {filteredNews.length > 0 ? (
                    filteredNews.map(newsItem => (
                        <Col key={newsItem.url} lg={4} md={6} sm={12} className="mb-4">
                            <NewsItem news={newsItem} />
                        </Col>
                    ))
                ) : (
                    <Col>
                        {searchQuery && <p>No news found.</p>}
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default SearchNews;
