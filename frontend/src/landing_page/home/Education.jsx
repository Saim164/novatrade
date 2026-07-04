import "./home.css";

function Education() {
    return (
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <img src="media/images/education_forge.svg" alt="" className="education-img" />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="home-heading mb-4">Free Investing Education</h1>
                    <p className="mb-3">Forge, Master investing with Forge, our learning platform offering structured lessons from beginner to advanced topics.</p>
                    <a href="" className="links-home-page">Forge &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className="mt-5 mb-3">Join our investor community to ask questions, share ideas, and learn from other traders and investors.</p>
                    <a href="" className="links-home-page">Community &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;