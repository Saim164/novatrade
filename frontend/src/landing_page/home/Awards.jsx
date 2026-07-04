function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 p-5 text-center text-md-start">
                    <img src="media/images/largestBroker_final.svg" alt="LargestBroker app img" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 p-5">
                    <h1>Trusted by Modern Investors</h1>
                    <p className="mb-4">Thousands of investors rely on NovaTrade to manage their portfolios with confidence. Trade across multiple asset classes using fast, reliable, and easy-to-use investing tools.</p>
                    <div className="row mt-4 mb-3">
                        <div className="col-12 col-sm-6">
                            <ul>
                                <li><p>ETFs</p></li>
                                <li><p>Mutual Funds</p></li>
                                <li><p>Option trading</p></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6">
                            <ul>
                                <li><p>Stocks & IPOS</p></li>
                                <li><p>Commodities</p></li>
                                <li><p>Bonds</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;