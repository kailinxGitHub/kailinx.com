import "../styles/ProfilePicture.css";

function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      <div className="background-blur"></div>
      <img
        className="profile-picture"
        src="src/assets/ProfilePicture.png"
        alt="Profile Picture"
      />
    </div>
  );
}

export default ProfilePicture;
