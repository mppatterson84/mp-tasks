import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ username, csrftoken, setUsername, setTasks }) => {
  const logout = async () => {
    await fetch(
      `${process.env.REACT_APP_API_HOST}/api/tasks/v1/rest-auth/logout/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        credentials: 'include'
      }
    );
    setUsername('');
    setTasks([]);
  };

  let menu;

  if (username === '') {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-8">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-8">
        <li className="nav-item">
          <Link to="/login" className="nav-link" onClick={logout}>
            Sign out
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tasks
        </Link>
        <div>{menu}</div>
      </div>
    </nav>
  );
};

export default Nav;
