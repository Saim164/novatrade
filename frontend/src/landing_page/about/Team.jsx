import './about.css';

function Team() {
  return (
    <div className="container">
      <div className="row border-top text-center mt-5 p-5">
        <h1>People</h1>
      </div>
      <div className="row mb-5 text-muted px-5 py-3">
        <div className="col-12 col-md-4 img-sec text-center px-5">
          <img src="media/images/avatar.png" alt="" className="mb-4" />
          <p>Saim Mazhar</p>
          <p className="position-text">Developer</p>
        </div>
        <div className="col-12 col-md-8 about-para px-5 team-para py-3">
          <p>
            This project was independently designed and developed to strengthen
            full-stack development skills through practical implementation. It
            represents continuous learning in frontend development, backend
            architecture, databases, authentication, deployment, and responsive
            web design. Every feature contributes to the developer's
            professional portfolio and learning journey.
          </p>
          <p>
            Currently expanding expertise in full-stack development, cloud
            deployment, and modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
