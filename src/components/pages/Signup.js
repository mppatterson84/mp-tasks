import { useState } from 'react';
import { Redirect } from 'react-router';

const Signup = () => {
  const [username, setUsername] = useState('Guest');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await fetch(
      `${process.env.REACT_APP_API_HOST}/api/tasks/v1/rest-auth/registration/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password1,
          password2
        })
      }
    );

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="card my-3 mx-auto p-2">
      <form onSubmit={submit}>
        <h3 className="mb-3 fw-normal">Create New User Account</h3>
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-2"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password1"
          className="form-control mb-2"
          name="password1"
          required
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password2"
          className="form-control mb-2"
          name="password2"
          required
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit" className="w-100 btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;
