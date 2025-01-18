import React from "react";

const HeroBanner = () => {
  const toggleSwitch = () => {
    console.log("Toggle switch clicked");
  };

  const isInputNumber = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <div id="heroBanner" class="hero-section math-only-hero-section">
      <div className="home-banner-container">
        <section className="class-contents is-visible-viewport">
          <h1 className="color-191919">
            Your Own Personal Teacher <br />
            Live, Online Classes
          </h1>
          <div className="sidebar-inner-front-grade slider-inner-min-height">
            <div
              className="sidebar-inner-heading-grade"
              style={{ marginBottom: "14px" }}
            >
              Book your FREE class
            </div>
            <div className="course-change-switch">
              <div
                className="slider-changes font18"
                style={{ paddingTop: 0, marginBottom: "16px" }}
              >
                <div>
                  <h6 className="text-normal" style={{ color: "#191919" }}>
                    For Kids
                  </h6>
                </div>
                <div>
                  <label className="slider__tabs-switch">
                    <input
                      type="checkbox"
                      id="togglebtn1"
                      className="curriculum__tabs-switch-input"
                      onClick={toggleSwitch}
                    />
                    <span className="switch__tabs-slider rounds"></span>
                  </label>
                </div>
                <div>
                  <span className="text-normal" style={{ color: "#191919" }}>
                    For Adults (18+)
                  </span>
                </div>
              </div>
            </div>
            <div className="slider1">
              <p
                style={{
                  color: "#5A7184",
                  fontSize: "14px",
                  lineHeight: "20px",
                  paddingBottom: "8px",
                  marginLeft: "5px",
                }}
              >
                Select your child's grade/class in school
              </p>
              <div className="sidebar-grade-table">
                <div className="grade-row">
                  {[...Array(6)].map((_, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={`radio-12-${index + 1}`}
                        name="switch-two"
                        value={index + 1}
                      />
                      <label
                        htmlFor={`radio-12-${index + 1}`}
                        className={`sidebar-grade-td-pad ${
                          index === 0
                            ? "top-left-radius"
                            : index === 5
                            ? "top-right-radius"
                            : ""
                        }`}
                      >
                        <div className="sidebar-grade-name">Class</div>
                        <div className="sidebar-grade-num">{index + 1}</div>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="grade-row">
                  {[...Array(6)].map((_, index) => (
                    <div key={index + 6}>
                      <input
                        type="radio"
                        id={`radio-12-${index + 7}`}
                        name="switch-two"
                        value={index + 7}
                      />
                      <label
                        htmlFor={`radio-12-${index + 7}`}
                        className={`sidebar-grade-td-pad ${
                          index === 0
                            ? "bottom-left-radius"
                            : index === 5
                            ? "bottom-right-radius"
                            : ""
                        }`}
                      >
                        <div className="sidebar-grade-name">Class</div>
                        <div className="sidebar-grade-num">{index + 7}</div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="pseudo-bft-btn">
                  <button
                    className="btn btn-primary color-fff"
                    data-event-prop="silicon_valley"
                    style={{ borderRadius: 0 }}
                  >
                    <span className="btn-text">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                      >
                        <path
                          d="M1.28571 16.7143V13.8214H4.17857V16.7143H1.28571Z..."
                          fill="#fff"
                        />
                      </svg>
                      Schedule a FREE Class
                    </span>
                  </button>
                </span>
              </div>
            </div>
            <div className="slider2 hide">
              <form id="form-for-musicplus">
                <div className="form-group mobile-input-wrapper">
                  <select name="" id="dialcode-input">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                  <input
                    type="tel"
                    className="form-control mobile-input"
                    placeholder="Enter your mobile number"
                    maxLength="10"
                    onKeyPress={isInputNumber}
                  />
                  <svg
                    className="MuiSvgIcon-root input-valid"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </div>
                <span className="mobile-error-one" id="mobile-error"></span>
                <button
                  type="button"
                  className="btn btn-primary signup-btn-music color-fff"
                >
                  Schedule a FREE Music Class
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="grade-class-banner grade-class-banner-new music-image-new">
          <img
            src="https://s3-cdnwhjr.whjr.online/website/desktop/master-banner-1x.png"
            alt=""
            className="hero-illustration-bg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
