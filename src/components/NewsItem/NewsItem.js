import React from 'react';
import { Link } from 'react-router-dom';

function NewsItem({ news }) {

    return (
        <div className="news-item card " style={{ height: "100%" }}>
            <div className="card-header" style={{ height: "7rem" }}>
                <h3 className="card-title" style={{ fontSize: "18px" }}>{news.title}</h3>
            </div>
            <div className="card-img-center " style={{ height: "12rem" }} >
                <img src={news.urlToImage} alt={news.title} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="card-body d-flex flex-column">
                <p className="card-text">{news.description}</p>
                <div className="mt-auto">
                    <Link to={`/news/${news?.source?.id}`} className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
