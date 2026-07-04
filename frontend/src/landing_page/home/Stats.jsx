import './home.css';

function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-12 col-md-6 p-5 text-overflow">
          <h1 className="mb-5 home-heading">Trust with Confidence</h1>
          <h2 className="stats-heading">Customer-First always</h2>
          <p className="mb-4 text-muted">
            Everything we build is designed to provide a simple, secure, and
            reliable investing experience for every user.
          </p>
          <h2 className="stats-heading">Transparent Pricing</h2>
          <p className="mb-4 text-muted">
            Simple pricing with no hidden charges, so you always know exactly
            what you're paying.
          </p>
          <h2 className="stats-heading">Powerful Technology</h2>
          <p className="mb-4 text-muted">
            Fast execution, modern tools, and an intuitive platform built for
            both beginners and experienced investors.
          </p>
          <h2 className="stats-heading">Learn & Grow</h2>
          <p className="mb-4 text-muted">
            Improve your investing skills through educational resources,
            practical guides, and market insights.
          </p>
        </div>
        <div className="col-12 col-md-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem img"
            className="stats-img mb-4"
          />
          <div className="text-center">
            <a href="/products" className="links-home-page">
              Explore our products &nbsp;{' '}
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="" className="links-home-page">
              Try orbit demo &nbsp; <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
