import React from 'react';
import './style/style.css';
import {
    Warpper,
    Header,
    NavBar
} from '../../Global/components/index.jsx';

export default () => {
    return (
        <Warpper>
            <Header />
            <NavBar />
            <h1>Error ! 404</h1>
            <h1>Page not found</h1>
        </Warpper>
    );
}