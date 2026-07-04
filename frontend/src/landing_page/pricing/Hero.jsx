import "./pricing.css"

function Hero() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center pt-5 pb-3 border-bottom">
                    <h1 className="mb-4">Pricing</h1>
                    <h3 className="text-muted fs-5 pb-3">All pricing displayed is fictional and for portfolio demonstration only.</h3>
                </div>
                <div className="row hero-row2">
                    <div className="col-12 col-sm-6 col-lg-4 py-4 px-3">
                        <img src="media/images/pricing0.svg" alt="Pricing Hero" className="img-fluid" />
                        <h4 className="text-center mt-3">No Account Opening Fee</h4>
                        <p className="text-center text-muted mt-3">Create and explore your account without any sign-up charges.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 py-4 px-3">
                        <img src="media/images/intradayTrades.svg" alt="Pricing Hero" className="img-fluid" />
                        <h4 className="text-center mt-3">Transparent Trading Costs</h4>
                        <p className="text-center text-muted mt-3">Clear and easy-to-understand pricing with no hidden charges.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 py-4 px-3">
                        <img src="media/images/pricing0.svg" alt="Pricing Hero" className="img-fluid" />
                        <h4 className="text-center mt-3">Simple Investment Experience</h4>
                        <p className="text-center text-muted mt-3">Designed to make investing straightforward for beginners and experienced users alike.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;