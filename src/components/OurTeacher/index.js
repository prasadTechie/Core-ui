import React from "react";

const OurTeacher = () => {
  return (
    <div id="ourTeacher" className="our-teacher-section">
      <div className="container">
        <h2 className="section-heading">Our Expert Coding Educators</h2>
        <div className="ourteacher-steps-section">
          <div className="teacher-steps-image">
            <div>
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/teacher-process-2x.png"
                alt="teacher-step"
                className=""
              />
            </div>
          </div>
          <div className="teacher-steps-content">
            <h4>
              Top 1% teachers selected by an industry-leading 4-step teacher
              assessment process by top 1% of early childhood coding experts
            </h4>
            <p className="font18 color-5A7184">
              WhiteHat Jr follows a rigorous 4-Step Selection Process for
              confirming teacher candidates so your children are taught by the
              Top Early Childhood Coding Experts.
            </p>

            <div className="rating-booktrial-button">
              <div className="button-group">
                <a
                  className="view_live_comment nav-item"
                  href="live-teacher-dashboard.html"
                >
                  <button className="btn view_superstar_btn view_superstar_btn__mobile button login_btn view-comment-desktop-btn">
                    <img
                      src="https://s3-cdnwhjr.whjr.online/website/desktop/play-icon.png"
                      alt=""
                      loading="lazy"
                    />
                    &nbsp;
                    <span>View Live Comment</span>
                  </button>
                </a>

                <a className="book_trial nav-item">
                  <button
                    className="btn btn-primary book_trial_btn color-fff"
                    data-event-prop="expert_educators"
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
                        />
                      </svg>
                      Book a FREE Trial
                    </span>
                  </button>
                </a>
              </div>
              <div className="stars-content-wrapper">
                <div className="stars-wrapper">
                  <span className="global-icon star"></span>
                  <span className="global-icon star"></span>
                  <span className="global-icon star"></span>
                  <span className="global-icon star"></span>
                  <span className="global-icon half-star"></span>
                </div>

                <div className="rating-content">
                  <span className="font16">
                    <span className="text-bold">4.7+ out of 5 stars</span> from
                    8.6k+ reviews by our students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeacher;
