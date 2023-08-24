import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsItem from '../NewsItem/NewsItem';
import AppContext from '../../context/AppContext';

const NewsList = React.memo(() => {
    const { currentCountry, news, loading } = useContext(AppContext);

    const countryString = currentCountry === 'us' ? 'United States' : 'Great Britain';

    return (

        <Container>
            <Row>
                <div className="p-3 font-weight-bold h4 rounded-circle bg-light">Top News From {countryString}:</div>
            </Row>
            {loading ? <div>Loading...</div> :
                <Row>
                    {news.length > 0 &&
                        news.map((newsItem) => (
                            <Col key={newsItem.url} lg={4} md={6} sm={12} className='mb-4'>
                                <NewsItem news={newsItem} />
                            </Col>
                        ))}
                </Row>
            }
        </Container>
    );
});

export default NewsList;
