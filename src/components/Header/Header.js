import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CountrySwitcher from '../../utils/countrySwitcher';
import './Header.css';
import { Row, Col } from 'react-bootstrap';
import AppContext from '../../context/AppContext';

export default function Header() {
    const { currentCountry, onChangeCountry } = useContext(AppContext);

    return (
        <header className="header">
            <Row className="d-flex align-items-center flex-wrap ">
                <Col className="text-center text-md-start header-group">
                    <NavLink to="/" activeClassName="active" className="header-link">
                        Top News
                    </NavLink>
                    <NavLink to="/categories" activeClassName="active" className="header-link">
                        Categories
                    </NavLink>
                    <NavLink to="/search" activeClassName="active" className="header-link">
                        Search
                    </NavLink>
                </Col>
                <Col className="text-center">
                </Col>
                <Col className="text-end mt-3 mt-sm-0">
                    <CountrySwitcher currentCountry={currentCountry} onChangeCountry={onChangeCountry} />
                </Col>
            </Row>
        </header>
    );
}
