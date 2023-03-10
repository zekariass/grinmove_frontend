import FooterTwo from "components/footers/FooterTwo";
import HeaderOne from "components/headers/HeaderOne";
import "./About.css";
import Zekarias from "./images/Zekarias.jpg";
import React from "react";

const About = () => {
  return (
    <div>
      <HeaderOne />
      <div className="container">
        <section className="section about-section gray-bg" id="about">
          <div className="container about-page">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text go-to">
                  <h3 className="dark-color">About Me</h3>
                  <h6 className="theme-color lead">
                    A full stack Software Developer
                  </h6>
                  <p className="text-justify">
                    I <mark>design and develop</mark> fullstack websites and
                    applications in various frontend and backend technologies,
                    such as Python, Java, JavaScript, PHP, HTML, CSS, etc. I
                    have very good knowledge of frameworks, such as Django,
                    Djangorestframework, React, Spring, Bootstrap, etc. I have
                    an extended experiance with relational database management
                    systems, such as MySQL and Postgresql.
                  </p>
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>Name</label>
                        <p>Zekarias Semegnew Negese</p>
                      </div>
                      <div className="media">
                        <label>Residence</label>
                        <p>United Kingdom</p>
                      </div>
                      <div className="media">
                        <label>Address</label>
                        <p>243A Monument Road, Birmingham</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>zemaedot2@gmail.com</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>+44 753 784 8214</p>
                      </div>
                      <div className="media">
                        <label>Freelance</label>
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-avatar d-flex justify-content-center">
                  <img
                    // src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    src={Zekarias}
                    title=""
                    alt=""
                    className="avatar-img"
                  />
                </div>
              </div>
            </div>
            <div className="jumbotron-general p-3 mt-4 rounded-3 fst-italic">
              <h4 className="m-0px font-w-600 theme-color lead">
                <span>
                  <i className="ui exclamation triangle icon "></i>
                </span>
                This website is under development...
              </h4>
              <p className="">
                The website is an online platform for renting and selling
                different immovable properties, such as Apartments/Flats, Villa
                Houses, Venues, Commercial properties, Lands, etc. For
                development, I have used
                <mark> React + Djangorestframework + Postgresql</mark> stack.
                Currently, the Frontend is hosted in Google Firebase, and the
                Backend is hosted in Pythonanywhere hosting on the cloud. The
                database is served by Pythonanywhere cloud database service
                while for storage purpose I have used Azure Blob Storage
                service.
              </p>
              <p>
                I am applying the CI/CD (Continuous Integration / Continuous
                Delivery) practice of continuous software development
              </p>
            </div>
            {/* <div className="counter">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="500" data-speed="500">
                      500
                    </h6>
                    <p className="m-0px font-w-600">Happy Clients</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="150" data-speed="150">
                      150
                    </h6>
                    <p className="m-0px font-w-600">Project Completed</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="850" data-speed="850">
                      850
                    </h6>
                    <p className="m-0px font-w-600">Photo Capture</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="190" data-speed="190">
                      190
                    </h6>
                    <p className="m-0px font-w-600">Telephonic Talk</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <div className="footer-bg">
        <FooterTwo />
      </div>
    </div>
  );
};

export default About;
