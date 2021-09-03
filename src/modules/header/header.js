import React from 'react';
import './header.css';
import { BrowserRouter as Router, Link, useRouteMatch } from 'react-router-dom';

export function Header() {
  let match = { url: 'http://localhost:3000' }; //useRouteMatch();
  // link routing system ain't working :/
  return (
    <>
      <div className="header-main">
        <h2>Header</h2>
        <div className="links-to-pages">
          <Router>
            <Link to={`${match.url}/home`}>linkToHome</Link>
            <Link to={`${match.url}/search`}>linkToSearch</Link>
            <Link to={`${match.url}/faq`}>linkToFAQ</Link>
          </Router>
        </div>
      </div>
    </>
  );
}
