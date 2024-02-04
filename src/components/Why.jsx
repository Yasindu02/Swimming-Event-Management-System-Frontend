import React from "react";

const WhyUs = () => {
  return (
    <div className="container mt-4">
      <section className="why_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose Us
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Comprehensive Swim Management</h5>
                <p>
                  Opt for a comprehensive swim management solution. We are
                  committed to providing a platform that covers all aspects of
                  swim event management, from registrations to results.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Secure Swim Data Handling:</h5>
                <p>
                  Ensure the security and privacy of swimmer data. Our system
                  prioritizes robust data security measures, safeguarding
                  participant information throughout the swim management process.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Efficient Event Execution</h5>
                <p>
                  Experience efficient planning and execution of swim events. Our
                  support team is dedicated to resolving any issues promptly,
                  ensuring smooth and successful swim meets.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>User-Friendly Swim Platform</h5>
                <p>
                  Navigate effortlessly through our user-friendly platform
                  designed specifically for swim administrators and participants.
                  We prioritize simplicity for a seamless swim management experience.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="/subscription"> Get Started </a>
          </div>
          <br></br>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
