import "../styles/SocialMediaColumn.css";
import Card from "./Card";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { RiNotionFill } from "react-icons/ri";

const SocialMediaItems = [
  {
    title: "Student",
    object: <FiLinkedin className="icon" />,
    link: "https://www.linkedin.com/in/kailinx/",
  },
  {
    title: "Developer",
    object: <FiGithub className="icon" />,
    link: "https://github.com/kailinxGitHub",
  },
  {
    title: "Email",
    object: <FiMail className="icon" />,
    link: "mailto:kailinxgoogl@gmail.com",
  },
  {
    title: "Personal",
    object: <RiNotionFill className="icon" />,
    link: "https://kailinx.notion.site/",
  },
];

function SocialMediaColumn() {
  return (
    <div className="social-media-column">
      <div className="card-container">
        {SocialMediaItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            object={item.object}
            link={item.link}
          />
        ))}
        ;
      </div>
    </div>
  );
}

export default SocialMediaColumn;
