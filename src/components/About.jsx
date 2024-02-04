import React from "react";

const About = () => {
  return (
    <div>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center" style={{ marginTop: '-70px' }}>
            <h2>
              About SwimmingEase
            </h2>
            <br></br>
            <p>
              Welcome to SwimmingEase – your ultimate solution for seamless swimming event management. From effortless participant registration to flawless event execution, we prioritize simplicity and excellence. Explore our user-friendly platform designed to make your aquatic events unforgettable.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="./images/image1.jpg" alt="Swimming Event" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are SwimmingEase</h3>
                <p>
                  Immerse yourself in a world of aquatic excellence with "We Are SwimmingEase." Redefining swimming event management, we provide cutting-edge solutions that streamline and elevate your aquatic experiences. Our innovative approach ensures seamless coordination of events, effortless participant registration, and efficient engagement.
                </p>
                <p>
                  Committed to excellence, SwimmingEase stands as a beacon of reliability and innovation in the realm of aquatic event management. Join us in creating a future where swimming events are not just managed but perfected. We are SwimmingEase, pioneering the next wave in swimming event management solutions.
                </p>
                <a href="/service"> Get Started </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
