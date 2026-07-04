import './home.css';

function Pricing() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-12 col-md-6 text-overflow p-5">
          <h1 className="mb-4 home-heading">Simple & Transparent Pricing</h1>
          <p>
            Competitive pricing designed to keep investing affordable, with
            clear fees and no hidden costs.
          </p>
          <a href="/pricing" className="links-home-page">
            See pricing &nbsp; <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-12 col-md-6 mb-5 p-5">
          <div className="row text-center">
            <div className="col-6 border p-3">
              <h1>0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-6 border p-3">
              <h1>20</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
