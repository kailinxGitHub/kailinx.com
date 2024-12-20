import "../styles/SocialMediaColumn.css";
import Card from "./Card";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { RiNotionFill } from "react-icons/ri";

function SocialMediaColumn() {
  return (
    <div className="social-media-column">
      <div className="card-container">
        <Card
          title="Student"
          object={<FiLinkedin className="icon" />}
          link="https://www.linkedin.com/in/kailinx/"
        />
        <Card
          title="Developer"
          object={<FiGithub className="icon" />}
          link="https://github.com/kailinxGitHub"
        />
        <Card
          title="Email"
          object={<FiMail className="icon" />}
          link="mailto:kailinxgoogl@gmail.com"
        />
        <Card
          title="Personal"
          object={<RiNotionFill className="icon" />}
          link="https://kailinx.notion.site/"
        />
      </div>
    </div>
  );
}

export default SocialMediaColumn;
