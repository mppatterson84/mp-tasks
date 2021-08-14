const Profile = ({ username }) => {
  return (
    <div className="card my-3 mx-auto p-2">
      <h3 className="mb-3 fw-normal">Profile</h3>
      <p>{username ? `Hi, ${username}` : 'Please sign in.'}</p>
    </div>
  );
};

export default Profile;
