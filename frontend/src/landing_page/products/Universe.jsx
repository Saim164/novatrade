import './product.css';
import { Link } from 'react-router-dom';

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h1 className="universe-heading mb-4 mt-4">Nova League</h1>
        <p className="final-para">
          Explore the NovaTrade Developer Blog to discover how this platform was
          built, the technologies behind it, and the concepts used throughout
          the project.
        </p>
      </div>
      <div className="row px-5 universe-row-img text-center">
        <div className="col-12 col-sm-6 col-lg-4 px-5 mb-4 mb-lg-0">
          <img
            src="media/images/themes_logo.png"
            alt="themes Logo"
            className="mb-1 "
          />
          <p className="text-muted final-para text-center">
            Thematic investing platform
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 px-5 mb-4 mb-lg-0">
          <img
            src="media/images/flash_logo.png"
            alt="flash Logo"
            className="mb-1"
          />
          <p className="text-muted final-para text-center">
            Research and analysis tools
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 px-5">
          <img
            src="media/images/optix_logo.svg"
            alt="Optix Logo"
            className="mb-1"
          />
          <p className="text-muted final-para text-center">
            Educational resources
          </p>
        </div>
      </div>
      <div className="row px-5 text-center">
        <div className="col-12 col-sm-6 col-lg-4 px-5 mt-5 universe-row-img">
          <img
            src="media/images/nova_fundhouse_logo.png"
            alt="nova fund house Logo"
            className="mb-1"
          />
          <p className="text-muted final-para text-center">
            Thematic investing platform
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 px-5 mt-5 universe-row-img">
          <img
            src="media/images/hammer_logo.png"
            alt="hammer Logo"
            className="mb-1"
          />
          <p className="text-muted final-para text-center">
            Research and analysis tools
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 px-5 mt-5 universe-row-img">
          <img
            src="media/images/shield_logo.png"
            alt="Shield Logo"
            className="mb-1"
          />
          <p className="text-muted final-para text-center">
            Educational resources
          </p>
        </div>
      </div>
      <div className="row mt-5 mb-5 text-center">
        <div>
          <Link className="text-decoration-none" to="/Signup">
            <button className="py-2 btn btn-primary fs-5 herobtn">
              Signup Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
