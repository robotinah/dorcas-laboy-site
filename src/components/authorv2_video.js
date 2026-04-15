import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { FiPlay } from "react-icons/fi";
import data from "../data/about.json";
import { socialLink } from "../global";

const AuthorV2 = ({ isBg }) => {
  const { aboutv2 } = data;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);
  return (
    // <!-- ========== Author section start ========== -->
    <section
      id="author"
      className={`section-padding authorv2 ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{aboutv2.subtitle}</span>
              <h2 className="display-6">{aboutv2.title}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          {/* <!-- author image area start --> */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="authorv2__image">
              <img
                className="img-fluid"
                src={aboutv2.image}
                alt="Dorcas Laboy autora del libro No Soy Mujer de Segunda Categoría"
              />
            </div>
          </div>
          {/* <!-- author image area end --> */}
          {/* <!-- author content area start --> */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>{aboutv2.description}</p>
            <div className="authorv2__content">
              <div className="authorv2__list">
                <div className="row">
                {aboutv2.userinfo?.map((item, i) => (
                  <div key={i} className="col-6 mb-3">
                    <h4>{item.title}</h4>
                    <p className="mb-0">{item.subtitle}</p>
                  </div>
                ))}
              </div>
              </div>
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
          {/* <!-- author content area end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Author section end ========== -->
  );
};

export default AuthorV2;
