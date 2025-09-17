import Resume from "../assets/GabrielDalpianDeCastilhosPedroResume-2.pdf";

const ExperienceAndEducation = () => {
  return (
    <section id="Exp">
    <div style={{ textAlign: "center", margin: "40px auto" }}>
      <h2 style={{ fontSize: "4em",color:"white", fontWeight: "bold", marginTop: "200px" }}>Education & Experience</h2>
      <img 
        src={Resume} alt="Resume" style={{width: "900px", height: "auto", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px",marginTop:"40px",outline: "3px solid white", outlineOffset: "4px",}} />
    </div>
    </section>
  );
};

export default ExperienceAndEducation;