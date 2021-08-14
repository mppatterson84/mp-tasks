const Login = () => {
  return (
    <div className="card my-3 mx-auto p-2">
      <form>
        <h3 className="mb-3 fw-normal">Sign In</h3>
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          required
        />
        <button type="submit" className="w-100 btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
