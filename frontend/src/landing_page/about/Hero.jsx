import './about.css';

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 text-center mt-3 mb-5">
        <h1 className=" hero-heading">
          We built NovaTrade to showcase modern full-stack development.
          <br />
          Now we're demonstrating real-world web technologies through practical
          implementation.
        </h1>
      </div>
      <div className="row border-top mt-5 mb-5 p-3 p-md-5">
        <div className="col-12 col-md-6 mt-4 mt-md-5 px-3 px-md-5 about-para">
          <p className="px-0 px-md-5">
            NovaTrade was created as a portfolio project to demonstrate the
            concepts used in modern web applications. Throughout its
            development, the focus has been on building a practical MERN stack
            application using React, Express, MongoDB, REST APIs, JWT
            authentication, responsive design, and clean project architecture.
          </p>
          <p className="px-0 px-md-5">
            This platform is fictional and does not provide real financial or
            investment services.
          </p>
          <p className="px-0 px-md-5">
            It has been developed purely for educational and portfolio purposes
            to showcase technical skills and problem-solving ability. Please do
            not submit sensitive financial information or expect any real
            trading functionality.
          </p>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-5 px-3 px-md-5 about-para">
          <p className="px-0 px-md-5">
            In addition to the core application, this project demonstrates
            authentication, REST APIs, database relationships, responsive
            design, and modern frontend development practices.
          </p>
          <p className="px-0 px-md-5">
            Every feature was built to strengthen practical full-stack
            development skills, with a focus on clean architecture, scalable
            code, and real-world problem solving.
          </p>
          <p className="px-0 px-md-5">
            This project will continue to evolve as new technologies are learned
            and additional features are implemented throughout the developer’s
            learning journey..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
