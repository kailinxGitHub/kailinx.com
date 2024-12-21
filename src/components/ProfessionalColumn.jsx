import "../styles/ProfessionalColumn.css";

function ProfessionalColumn() {
  const openResume = () => {
    window.open("resume.pdf", "_blank");
  };
  return (
    <div>
      <div className="professional-column">
        <div className="prof-card-container">
          <div className="prof-card">
            <div className="card-text">Projects</div>
          </div>
          <div className="prof-card" onClick={openResume}>
            <div className="card-text roboto-regular">Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalColumn;
