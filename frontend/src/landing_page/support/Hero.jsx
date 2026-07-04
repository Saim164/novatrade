import './support.css';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="container hero">
        <div className="row hero-row1">
          <div className="col-12 col-md-5">
            <h4 className="fs-5">NovaTrade Support Center</h4>
          </div>
          <div className="col-2 d-none d-md-block"></div>
          <div className="col-12 col-md-5">
            <a href="">Track Tickets</a>
          </div>
        </div>
        <div className="row hero-row2">
          <div className="col-12 col-md-5">
            <h3 className="fs-5 mb-3">
              Search for answers, browse help articles, or create a support
              request if you need additional assistance
            </h3>
            <input
              type="text"
              placeholder="Search for help articles or topics…?"
              className="hero-input mb-3"
            />
            <br />
            <a href="">Track Account Verification</a>
            &nbsp;&nbsp;
            <a href="">Check Account Status</a>
            &nbsp;&nbsp;
            <a href="">Trading & Order Guide</a>
            &nbsp;&nbsp;
            <a href="">Orbit User Guide</a>
          </div>
          <div className="col-2 d-none d-md-block"></div>
          <div className="col-12 col-md-5 mt-4 mt-md-0">
            <h3 className="fs-5 mb-3">Featured</h3>
            <ol>
              <li>
                <a href="">Platform Updates & Maintenance</a>
              </li>
              <li>
                <a href="">Latest Feature Releases</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
