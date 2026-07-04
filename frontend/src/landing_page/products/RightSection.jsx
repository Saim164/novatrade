import "./product.css"

function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="container">
            <div className="row p-5 flex-column-reverse flex-md-row">
                <div className="col-12 col-md-6 product-section-content mt-5 px-5">
                    <h1 className="mt-5">{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="link-one mb-3 mt-3">
                        <a href={learnMore}>Learn More
                            &nbsp;
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 px-5 text-center text-md-start">
                    <img src={imageUrl} alt="" className="right-section-img" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;