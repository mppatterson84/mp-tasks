import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.michael-patterson.com/">
          Michael-Patterson.com
        </a>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-md-8">
            <li className="nav-item">
              <a href="" className="nav-link">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
