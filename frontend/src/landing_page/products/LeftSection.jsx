import "./product.css"

function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-12 col-md-6 px-5 text-center text-md-start">
                    <img src={imageUrl} alt="" className="left-section-img" />
                </div>
                <div className="col-12 col-md-6 px-5 product-section-content mt-3">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="link-one mb-3 mt-3">
                        <a href={tryDemo}>Try Demo 
                        &nbsp;
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                        <a href={learnMore}>Learn More
                        &nbsp;
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                    <div className="link-two">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;