import "./home.css"

function Hero() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <img src="media/images/homeHero_edit.png" alt="Heroimg" className="mb-5 hero-img" />
                <h1 className="mt-5">Invest in Everything</h1>
                <p className="mb-4">A modern investment platform to trade stocks, ETFs, mutual funds, and more,all from one secure place.</p>
                <button className="py-2  btn btn-primary fs-5 herobtn mb-5">Get Started</button>
            </div>
        </div>
    );
}

export default Hero;