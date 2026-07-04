import './pricing.css';

function Brokerage() {
  return (
    <div className="container">
      <div className="row border-top mt-5 brokerage">
        <div className="col-12 col-md-6 brokerage-calculator overflow-hidden">
          <a href="" className="text-decoration-none">
            <h1 className="fs-5 mb-4 text-center">Brokerage Calculator</h1>
          </a>
          <ul className="list text-break text-muted">
            <li>Estimate your trading costs before placing an order.</li>
            <li>Understand potential brokerage and transaction fees.</li>
            <li>Compare different order values instantly.</li>
            <li>Plan investments with greater confidence</li>
            <li>Review estimated costs in real time.</li>
            <li>Make informed trading decisions with clear calculations.</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 brokerage-calculator overflow-hidden">
          <a href="" className="text-decoration-none">
            <h1 className="fs-5 mb-4 text-center">List of charges</h1>
          </a>
          <ul className="list text-break text-muted">
            <li>Transparent pricing with no hidden fees.</li>
            <li>All values shown are for demonstration purposes only.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
