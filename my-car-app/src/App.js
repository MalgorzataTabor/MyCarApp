

import React from 'react';
import Main from './Main';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const App = () => (
    <div>
        <Navbar />
        <div className="container">
            <Main />
        </div>
        <div className="fixed-action-btn">
            <Link to="/cars/add" className="btn-floating btn-large red">
                <i className="fa fa-plus"></i>
            </Link>
        </div>
    </div>
)

export default App;
