import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
//import logo from '../images/Deezlogo.png';
AOS.init({
  duration: 700,
  offset: 300,
});

export default function Contact(props) {
  const alertmessage = () => {
    props.showalert(
      "Your Message has been sent successfully, We'll get back to you as soon as possible. Thanks!"
    );
    console.log("test");
  };
  return (
    <section id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="card1">
              <div>
                <h2 className="title1">Have Projects in mind?</h2>
                <h2 className="title1">Let's Work Together</h2>
                <p className="subtitle2">
                  Have a project in mind?Looking to partner or work together?
                </p>
                <p className="subtitle2">
                  Reach out through the form and I'll get back to you in the
                  next 48 hours.
                </p>
                <p className="subtitle2">
                  Or you can reach us through the Email given below
                </p>
                <div className="fs-4 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                  </svg>
                  flameoffire@gmail.com
                </div>
                <div className="fs-4 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                  +91-8839054030
                </div>
                <div className="fs-4 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  </svg>
                  Madhya Pradesh, India
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-8 pt-0 pt-lg-0 order-2 order-lg-1 d-flex flex-column  justify-content-center">
                        <h4 className="text1">Fill the form below </h4>
                        <form>
                          <div className="mb-3">
                            <div className="input-group flex-nowrap">
                              <span
                                className="input-group-text"
                                id="addon-wrapping"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-person"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="input-group flex-nowrap">
                              <span
                                className="input-group-text"
                                id="addon-wrapping"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-envelope"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                              </span>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="input-group flex-nowrap">
                              <span
                                className="input-group-text"
                                id="addon-wrapping"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-code"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                                </svg>
                              </span>
                              <input
                                type="Text"
                                className="form-control"
                                placeholder="Your Idea or Project"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="input-group flex-nowrap">
                              <span className="input-group-text">
                                Your Message
                              </span>
                              <textarea
                                className="form-control"
                                aria-label="With textarea"
                              ></textarea>
                            </div>
                          </div>

                          <Link
                            to="home"
                            type="submit"
                            className="btn mb-3"
                            onClick={alertmessage}
                          >
                            Submit
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
