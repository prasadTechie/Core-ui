import heroBanner from "./../../../assets/images/mobile/mobile-home-banner2x.png";
import ladyImage from "./../../../assets/images/mobile/android-section-2x.png";
const HeroSection = () => {
  return (
    <>
      <div className="pb-0 text-center p-15 is-visible-viewport">
        <div className="p-15">
          <h1 className="m-0">
            Your Own Personal Teacher Live, Online Classes
          </h1>
        </div>
      </div>
      <div id="hero-banner-section-math" className="is-visible-viewport">
        <img
          src={heroBanner}
          alt="home background"
          className="w-100 music"
          loading="lazy"
        />
      </div>

      <div className="sidebar-inner-front-grade sidebar-inner-front-grade-whjr is-visible-viewport">
        <div className="sidebar-inner-heading-grade">Book your FREE class</div>
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
                  onclick="toggleSwithc()"
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
          <div className="sidebar-grade-table">
            <div className="grade-row">
              <input type="radio" id="radio-12-1" name="switch-two" value="1" />
              <label for="radio-12-1" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">1</div>
              </label>
              <input type="radio" id="radio-12-2" name="switch-two" value="2" />
              <label for="radio-12-2" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">2</div>
              </label>
              <input type="radio" id="radio-12-3" name="switch-two" value="3" />
              <label for="radio-12-3" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">3</div>
              </label>
              <input type="radio" id="radio-12-4" name="switch-two" value="4" />
              <label for="radio-12-4" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">4</div>
              </label>
              <input type="radio" id="radio-12-5" name="switch-two" value="5" />
              <label for="radio-12-5" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">5</div>
              </label>
              <input type="radio" id="radio-12-6" name="switch-two" value="6" />
              <label for="radio-12-6" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">6</div>
              </label>
            </div>
            <div className="grade-row">
              <input type="radio" id="radio-12-7" name="switch-two" value="7" />
              <label for="radio-12-7" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">7</div>
              </label>
              <input type="radio" id="radio-12-8" name="switch-two" value="8" />
              <label for="radio-12-8" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">8</div>
              </label>
              <input type="radio" id="radio-12-9" name="switch-two" value="9" />
              <label for="radio-12-9" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">9</div>
              </label>
              <input
                type="radio"
                id="radio-12-10"
                name="switch-two"
                value="10"
              />
              <label for="radio-12-10" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">10</div>
              </label>
              <input
                type="radio"
                id="radio-12-11"
                name="switch-two"
                value="11"
              />
              <label for="radio-12-11" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">11</div>
              </label>
              <input
                type="radio"
                id="radio-12-12"
                name="switch-two"
                value="12"
              />
              <label for="radio-12-12" className="sidebar-grade-td-pad">
                <div className="sidebar-grade-name">Class</div>
                <div className="sidebar-grade-num">12</div>
              </label>
            </div>
          </div>

          <div className="">
            <span className="pseudo-bft-btn">
              <button className="btn btn-primary ">
                <div className="mr-10 icon-process schedule-icon"></div>
                Schedule a FREE Class
              </button>
            </span>
          </div>
        </div>

        <div className="slider2 hide">
          <form id="form-for-musicplus">
            <div className="form-group mobile-input-wrapper">
              <input
                type="tel"
                className="form-control mobile-input"
                id=""
                placeholder="Enter your mobile number"
                maxlength="10"
                onkeypress="isInputNumber(event)"
              />
              <svg
                className="MuiSvgIcon-root input-valid"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
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

      <div className="is-visible-viewport">
        <div className="android-section-container pt-10 review-banner-IN">
          <div id="androidImage" className="">
            <img
              src="https://s3-cdnwhjr.whjr.online/website/home/android-section.png"
              alt=""
              className="w-100"
            />
          </div>
          <div className="teachercamText">
            <h2 className="m-0">
              WhiteHat Jr is more than just coding, math and music!
            </h2>
            <div className="font14 color-5A7184 activity">
              Our proprietary, activity-based curriculum with live, real-time
              instruction generates: Problem Solving. Creative Thinking. Grit.
              Confidence. Communication.
            </div>
            <h3>🎉 🎉 And it's a lot of fun, too!</h3>
            <div>
              <span className="trial-button-first">
                <button
                  className="btn btn-primary"
                  data-event-prop="first fold"
                  onClick={() => console.log("Booking a Free Trial")}
                >
                  <div className="mr-10 icon-process schedule-icon"></div>
                  Book a FREE Trial
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="p-15"></div>
        <div className="divider divider-bg"></div>
      </div>
    </>
  );
};

export default HeroSection;
