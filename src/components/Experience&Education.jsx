import Resume from "../assets/resume.png";

const ExperienceAndEducation = () => {
  return (
    <div style={{ textAlign: "center", margin: "40px auto" }}>
      <h2 style={{ fontSize: "4em",color:"white", fontWeight: "bold", marginTop: "200px" }}>Resume</h2>
      <img 
        src={Resume} 
        alt="Resume" 
        style={{ 
          width: "900px", 
          height: "auto", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
          borderRadius: "10px",
          marginTop:"40px",
          outline: "3px solid white", 
          outlineOffset: "4px",
        }} 
      />
    </div>
  );
};

export default ExperienceAndEducation;