import "./product.css"

function Hero() {
    return (
        <div className="container border-bottom">
            <div className="row text-center mt-5 mb-5 product-hero">
                <h1 className="mb-3">Technology</h1>
                <h2 className="text-muted hero-h2">Modern, powerful, and intuitive tools built for every investor</h2>
                <p className="text-muted hero-para mb-5">
                    Check out our <a href="">
                        investment offering &nbsp;
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;