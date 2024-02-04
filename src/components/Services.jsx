import React from "react";

const Services = () => {
  return (
    <div className="container mt-4">
      <section className="service_section">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our Services
              </h2>
              <p>
                Dive into a seamless event management experience with our
                comprehensive services. Sign up for the swimming management system today!
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Swimmer Registration</h5>
                    <p>
                      Effortless registration process for swimmers, ensuring a smooth start to your event. Manage participant details and streamline the registration experience.
                    </p>
                    <a href="/login"> Get Started </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Data Security</h5>
                    <p>
                      Prioritize the security and confidentiality of swimmer information and event data. Our system employs robust security measures to safeguard your data.
                    </p>
                    <a href="/login"> Get Started </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>User-Friendly Dashboard</h5>
                    <p>
                      Navigate through the system effortlessly with a user-friendly dashboard. Simplify the management process for both administrators and participants.
                    </p>
                    <a href="/login"> Get Started </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="/why"> View All </a>
            </div>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
