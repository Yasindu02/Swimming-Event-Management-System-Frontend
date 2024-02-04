import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="" />
          </div>
        </div>

        {/* <!-- slider section --> */}
        <section className="slider_section">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        <h1>
                          Revolutionize Your Swim Coaching with Our
                          <br />
                          Event Management System
                        </h1>
                        <p>
                          Elevate your coaching experience and streamline event
                          planning with our cutting-edge Swimming Event Management
                          System. Say goodbye to the hassle of managing details on
                          spreadsheets and embrace a seamless process that empowers
                          you to focus on what you do best – coaching. Our platform
                          ensures every swimming event is a success, from meticulous
                          planning to receiving the well-deserved applause from
                          participants. Let's create extraordinary aquatic moments
                          together!
                        </p>
                        <div className="btn-box">
                          <a href="/about" className="btn1">
                            {" "}
                            Get Started{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
