import { useState } from 'react';
import { Redirect } from 'react-router';

const Login = ({ getUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async e => {
    e.preventDefault();

    await fetch(
      `${process.env.REACT_APP_API_HOST}/api/tasks/v1/rest-auth/login/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    setRedirect(true);
    getUser();
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="card my-3 mx-auto p-2">
      <form onSubmit={submit}>
        <h3 className="mb-3 fw-normal">Sign In</h3>
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-2"
          required
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="w-100 btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
