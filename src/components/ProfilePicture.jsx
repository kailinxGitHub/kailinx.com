import "../styles/ProfilePicture.css";
import ProfilePictureImage from "../assets/ProfilePicture.png";

function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      <div className="background-blur"></div>
      <img
        className="profile-picture"
        src={ProfilePictureImage}
        alt="Profile Picture"
      />
    </div>
  );
}

export default ProfilePicture;
