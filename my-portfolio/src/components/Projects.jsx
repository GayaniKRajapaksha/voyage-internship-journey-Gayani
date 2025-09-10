function Projects() {
  const myProjects = ["Meal Planner",  "Vehicle Price Predictor" , "Portfolio Website", "Student Learning Management System  ", "DEBRA Event management Web Application"];
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {myProjects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
export default Projects;
