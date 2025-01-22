import React from "react";

const HeroSection = () => {
  const toggleSwitch = () => {};
  const toggleModal = () => {};
  return (
    <div id="heroBanner" className="hero-section math-only-hero-section">
      <div className="home-banner-container">
        <div className="class-contents">
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
                      onClick={() => toggleSwitch()}
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
                    <React.Fragment key={index}>
                      <input
                        type="radio"
                        id={`radio-12-${index + 1}`}
                        name="switch-two"
                        value={index + 1}
                      />
                      <label
                        htmlFor={`radio-12-${index + 1}`}
                        className={`sidebar-grade-td-pad ${
                          index === 0 ? "top-left-radius" : ""
                        } ${index === 5 ? "top-right-radius" : ""}`}
                      >
                        <div className="sidebar-grade-name">Class</div>
                        <div className="sidebar-grade-num">{index + 1}</div>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
                <div className="grade-row">
                  {[...Array(6)].map((_, index) => (
                    <React.Fragment key={index + 7}>
                      <input
                        type="radio"
                        id={`radio-12-${index + 7}`}
                        name="switch-two"
                        value={index + 7}
                      />
                      <label
                        htmlFor={`radio-12-${index + 7}`}
                        className={`sidebar-grade-td-pad ${
                          index === 0 ? "bottom-left-radius" : ""
                        } ${index === 5 ? "bottom-right-radius" : ""}`}
                      >
                        <div className="sidebar-grade-name">Class</div>
                        <div className="sidebar-grade-num">{index + 7}</div>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="">
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
                          d="M1.28571 16.7143V13.8214H4.17857V16.7143H1.28571ZM4.82143 16.7143V13.8214H8.03571V16.7143H4.82143ZM1.28571 13.1786V9.96428H4.17857V13.1786H1.28571ZM4.82143 13.1786V9.96428H8.03571V13.1786H4.82143ZM1.28571 9.32143V6.42857H4.17857V9.32143H1.28571ZM8.67857 16.7143V13.8214H11.8929V16.7143H8.67857ZM4.82143 9.32143V6.42857H8.03571V9.32143H4.82143ZM12.5357 16.7143V13.8214H15.4286V16.7143H12.5357ZM8.67857 13.1786V9.96428H11.8929V13.1786H8.67857ZM5.14286 4.5C5.14286 4.67076 4.99219 4.82143 4.82143 4.82143H4.17857C4.00781 4.82143 3.85714 4.67076 3.85714 4.5V1.60714C3.85714 1.43638 4.00781 1.28571 4.17857 1.28571H4.82143C4.99219 1.28571 5.14286 1.43638 5.14286 1.60714V4.5ZM12.5357 13.1786V9.96428H15.4286V13.1786H12.5357ZM8.67857 9.32143V6.42857H11.8929V9.32143H8.67857ZM12.5357 9.32143V6.42857H15.4286V9.32143H12.5357ZM12.8571 4.5C12.8571 4.67076 12.7065 4.82143 12.5357 4.82143H11.8929C11.7221 4.82143 11.5714 4.67076 11.5714 4.5V1.60714C11.5714 1.43638 11.7221 1.28571 11.8929 1.28571H12.5357C12.7065 1.28571 12.8571 1.43638 12.8571 1.60714V4.5ZM16.7143 3.85714C16.7143 3.15402 16.1317 2.57143 15.4286 2.57143H14.1429V1.60714C14.1429 0.723215 13.4196 0 12.5357 0H11.8929C11.0089 0 10.2857 0.723215 10.2857 1.60714V2.57143H6.42857V1.60714C6.42857 0.723215 5.70536 0 4.82143 0H4.17857C3.29464 0 2.57143 0.723215 2.57143 1.60714V2.57143H1.28571C0.582589 2.57143 0 3.15402 0 3.85714V16.7143C0 17.4174 0.582589 18 1.28571 18H15.4286C16.1317 18 16.7143 17.4174 16.7143 16.7143V3.85714Z"
                          fill="#fff"
                        ></path>
                      </svg>
                      Schedule a FREE Class
                    </span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grade-class-banner grade-class-banner-new music-image-new">
          <img
            src="https://s3-cdnwhjr.whjr.online/website/desktop/master-banner-1x.png"
            alt=""
            className="hero-illustration-bg"
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="teachercam-section">
            <div className="teachercam-image">
              <button
                className="play-button"
                onClick={() =>
                  toggleModal(true, "https://www.youtube.com/embed/A-F4rju-CjA")
                }
              >
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/images/play-btn-whjr.png"
                  loading="lazy"
                  alt="Play Button"
                />
              </button>
            </div>
            <div className="teachercam-contents">
              <h2>WhiteHat Jr is more than just coding, math and music!</h2>
              <p className="font18 color-5A7184">
                Our proprietary, activity-based curriculum with live, real-time
                instruction generates: Problem Solving. Creative Thinking. Grit.
                Confidence. Communication.
              </p>
              <h3>🎉 🎉 And it's a lot of fun, too!</h3>
              <div className="rating-booktrial-button">
                <div className="button-group">
                  <a className="book_trial nav-item">
                    <button
                      className="btn btn-primary book_trial_btn color-fff"
                      data-event-prop="first fold"
                      style={{ borderRadius: 0 }}
                    ></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
