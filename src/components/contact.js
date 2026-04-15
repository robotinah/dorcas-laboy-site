import React from "react";
import { Link } from "react-router-dom";
import data from "../data/contact.json";
import { contactFormAction, socialLink } from "../global";

const Contact = ({ isBg }) => {
  const { contact } = data;
  console.log(process.env.REACT_APP_CONTACTFORM); // ADD HERE
  return (
    // <!-- ========== Contact section start ========== -->
    <section
      id="contact"
      className={`p-80px-tb ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{contact.subtitle}</span>
              <h2 className="display-6">{contact.title}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!--  contact form area start --> */}
          <div
            className="col-lg-8 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="contact-form-box">
              <form
                id="contact-form"
                method="post"
                action={contactFormAction.link}
              >
                <div className="message col">
                  <p className="email-loading alert alert-warning">
                    <img src="assets/images/loading.gif" alt="loader" />
                    &nbsp;&nbsp;&nbsp;Sending...
                  </p>
                  <p className="email-success alert alert-success">
                    <i className="icofont-check-circled"></i> Tu mensaje ha sido enviado correctamente. 💌 Pronto estaremos conectando contigo.
                  </p>
                  <p className="email-failed alert alert-danger">
                    <i className="icofont-close-circled"></i> Algo salió mal. 😕 Por favor intenta nuevamente o escríbenos directamente.
                  </p>
                </div>
                <div className="mb13">
                  <input
                    name="name"
                    className="contact-name"
                    id="contact-name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="mb13">
                  <input
                    name="email"
                    className="contact-email"
                    id="contact-email"
                    type="email"
                    placeholder="Tu correo"
                    required
                  />
                </div>
                <div className="mb13">
                  <input
                    name="subject"
                    className="contact-subject"
                    id="contact-subject"
                    type="text"
                    placeholder="Asunto"
                    required
                  />
                </div>
                <div className="mb30">
                  <textarea
                    name="message"
                    className="contact-message"
                    id="contact-message"
                    placeholder="Tu Mensaje"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button button__primary align-items-center"
                >
                  <span>{contact.btnText}</span>
                </button>
              </form>
            </div>
          </div>
          {/* <!--  contact form area end --> */}
          {/* <!-- contact information start --> */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="contact__address p-30px">
              <ul className="contact__address__content">
                <li>
                  <span>{contact.address}</span>
                  {contact.addressText1},&nbsp;
                  {contact.addressText2}
                </li>
                <li>
                  <span>{contact.email}</span>
                  <Link to="mailto:dorcaslaboy@hmakers.org">{contact.emailText}</Link>
                </li>
              </ul>
              <h4>{contact.socialTitle}</h4>
              <ul className="social-icon mt-3">
                {socialLink.facebook === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.facebook}>
                      <img
                        className="img-fluid"
                        src="assets/icons/Facebook.png"
                        alt="icon"
                        width="15"
                        height="15"
                      />
                    </a>
                  </li>
                )}
                {socialLink.instagram === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.instagram}>
                      <img
                        className="img-fluid"
                        src="assets/icons/Instagram.png"
                        alt="icon"
                        width="15"
                        height="15"
                      />
                    </a>
                  </li>
                )}
                {socialLink.titok === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.tiktok}>
                      <img
                        className="img-fluid"
                        src="assets/icons/TikTok.png"
                        alt="icon"
                        width="15"
                        height="15"
                      />
                    </a>
                  </li>
                )}
                {socialLink.youtube === "" ? (
                  ""
                ) : (
                  <li>
                    <a href={socialLink.youtube}>
                      <img
                        className="img-fluid"
                        src="assets/icons/YouTube.png"
                        alt="icon"
                        width="15"
                        height="15"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/* <!-- contact information end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Contact section end ========== -->
  );
};

export default Contact;
