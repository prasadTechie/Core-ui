import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-fff navbar" id="main_header_top">
      <header className="navbar-nav home-banner-container">
        <nav className="flex nav flex-space_between">
          <div className="flex flex-flex_start flex-align_center header-right-buttons">
            <div className="navbar-brand">
              <a href="index.html">
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/logo_whjr.png"
                  className="m-auto img-responsive"
                  alt="WhiteHat Jr logo"
                />
              </a>
            </div>
            <div className="nav-item custom-nav-item">
              <button className="onclick-menu btn btn-shadow curriculum_btn">
                <span>Curriculum + Pricing</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#5A7184"
                  width="24px"
                  height="24px"
                  style={{ marginTop: "2px" }}
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>
              </button>
              <ul className="onclick-menu-content color-5A7184">
                <li>
                  <button className="headerPricingTab" data-pricing-plan="fl1">
                    Foundation Level 1 (Grade 1-2)
                  </button>
                </li>
                <li>
                  <button className="headerPricingTab" data-pricing-plan="fl2">
                    Foundation Level 2 (Grade 3-4)
                  </button>
                </li>
                <li>
                  <button className="headerPricingTab" data-pricing-plan="fl3">
                    Foundation Level 3 (Grade 5)
                  </button>
                </li>
                <li>
                  <button className="headerPricingTab" data-pricing-plan="ml4">
                    Mastery Level 4 (Grade 6-8)
                  </button>
                </li>
                <li>
                  <button
                    className="headerPricingTab"
                    data-pricing-plan="applied-tech"
                  >
                    Professional Level 6 (Grade 9-12)
                  </button>
                </li>
              </ul>
            </div>
            <div className="nav-item custom-nav-item course-item">
              <button className="onclick-menu btn btn-shadow courses_btn">
                <span className="courses color-5A7184">Courses:</span>
                <label
                  style={{ "--index": 1 }}
                  htmlFor="radio-africa"
                  className="active-clr"
                >
                  Coding
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#5A7184"
                  width="24px"
                  height="24px"
                  style={{ marginTop: "2px" }}
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex header-left-buttons">
            <div className="join-class-button">
              <a
                href="https://code.whitehatjr.com/s/login"
                className="btn-outline-primary button login_btn loginbtn_oldBtn"
                style={{
                  borderRadius: 0,
                  border: "2px solid #FF8D1A",
                  color: "#FF8D1A",
                }}
                data-loginflow="0"
              >
                Join Class Now
              </a>
              <span className="join-class-subtext" style={{ color: "#FF8D1A" }}>
                Already Booked a Class ?
              </span>
            </div>
            <div className="trial-btn">
              <a className="book_trial nav-item">
                <button
                  className="btn btn-primary book_trial_btn color-fff"
                  data-event-prop="top_right_nav"
                  style={{ borderRadius: 0 }}
                >
                  <span className="btn-text">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                      <path
                        d="M1.28571 16.7143V13.8214H4.17857V16.7143H1.28571ZM4.82143 16.7143V13.8214H8.03571V16.7143H4.82143ZM1.28571 13.1786V9.96428H4.17857V13.1786H1.28571ZM4.82143 13.1786V9.96428H8.03571V13.1786H4.82143ZM1.28571 9.32143V6.42857H4.17857V9.32143H1.28571ZM8.67857 16.7143V13.8214H11.8929V16.7143H8.67857ZM4.82143 9.32143V6.42857H8.03571V9.32143H4.82143ZM12.5357 16.7143V13.8214H15.4286V16.7143H12.5357ZM8.67857 13.1786V9.96428H11.8929V13.1786H8.67857ZM5.14286 4.5C5.14286 4.67076 4.99219 4.82143 4.82143 4.82143H4.17857C4.00781 4.82143 3.85714 4.67076 3.85714 4.5V1.60714C3.85714 1.43638 4.00781 1.28571 4.17857 1.28571H4.82143C4.99219 1.28571 5.14286 1.43638 5.14286 1.60714V4.5ZM12.5357 13.1786V9.96428H15.4286V13.1786H12.5357ZM8.67857 9.32143V6.42857H11.8929V9.32143H8.67857ZM12.5357 9.32143V6.42857H15.4286V9.32143H12.5357ZM12.8571 4.5C12.8571 4.67076 12.7065 4.82143 12.5357 4.82143H11.8929C11.7221 4.82143 11.5714 4.67076 11.5714 4.5V1.60714C11.5714 1.43638 11.7221 1.28571 11.8929 1.28571H12.5357C12.7065 1.28571 12.8571 1.43638 12.8571 1.60714V4.5ZM16.7143 3.85714C16.7143 3.15402 16.1317 2.57143 15.4286 2.57143H14.1429V1.60714C14.1429 0.723215 13.4196 0 12.5357 0H11.8929C11.0089 0 10.2857 0.723215 10.2857 1.60714V2.57143H6.42857V1.60714C6.42857 0.723215 5.70536 0 4.82143 0H4.17857C3.29464 0 2.57143 0.723215 2.57143 1.60714V2.57143H1.28571C0.582589 2.57143 0 3.15402 0 3.85714V16.7143C0 17.4174 0.582589 18 1.28571 18H15.4286C16.1317 18 16.7143 17.4174 16.7143 16.7143V3.85714Z"
                        fill="#fff"
                      />
                    </svg>
                    Book a FREE Trial
                  </span>
                </button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </nav>
  );
};

export default Navbar;
