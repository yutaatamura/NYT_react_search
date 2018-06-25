import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>

<nav className="navbar navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">NYT Article Search</Link>
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/"><button type="button" className="btn btn-info">Home</button></Link>
        </li>
        <li className="nav-item">
            <Link to="/savedArticles"><button type="button" className="btn btn-info">Saved Articles</button></Link>
        </li>
    </ul>
</nav>;

export default Nav;
