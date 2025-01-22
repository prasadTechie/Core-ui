import React from "react";

const Footer = () => {
  return (
    <div id="footer-section">
      <div className="p-15">
        <div className="p-15">
          <img
            src="https://s3-cdnwhjr.whjr.online/website/creatorspace/footer-logo1x.png"
            srcSet="https://s3-cdnwhjr.whjr.online/website/creatorspace/footer-logo1x.png 1x, https://s3-cdnwhjr.whjr.online/website/creatorspace/footer-logo1x.png 2x"
            alt="WhiteHat Jr Logo"
            loading="lazy"
          />
          <p className="color-5A7184 pb-15 pt-5 font14 footer-logo-content">
            Do you want your child to create the world’s next big tech platform?
            WhiteHat Jr's mission is to empower a whole generation to become
            creators versus consumers of technology. We teach fundamentals of
            coding--logic, structure, sequence, and algorithmic thinking to
            enable kids to generate creative outcomes like websites, animations,
            and apps.
          </p>
          <div className="d-flex">
            <div className="social-icon-bg">
              <a
                href="https://www.facebook.com/whitehatjr/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon icon-fb"></div>
              </a>
            </div>
            <div className="social-icon-bg">
              <a
                href="https://twitter.com/whitehatjunior"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon icon-twitter"></div>
              </a>
            </div>
            <div className="social-icon-bg">
              <a
                href="https://www.youtube.com/channel/UCB8Dp0OcTLX9vxXwh4TCIzA"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon icon-youtube"></div>
              </a>
            </div>
            <div className="social-icon-bg">
              <a
                href="https://in.linkedin.com/company/whitehatjr"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon icon-linkedin"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex pt-15 pl-15 pr-15">
          <div className="margin-right-50">
            <h4 className="m-0 pb-5 pt-5">Important Links</h4>
            <div className="color-5A7184 font14 footer-link">
              <div>
                <a
                  className="link"
                  href="https://code.whitehatjr.com/t/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Teacher Login
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://code.whitehatjr.com/s/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Student Login
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://code.whitehatjr.com/trial/register?utm_source=website&utm_content=website&utm_medium=website"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://www.whitehatjr.com/space-explorer-program"
                  target="_blank"
                  rel="noreferrer"
                >
                  Space Explorer Program
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://www.byjusfutureschool.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BYJU'S FutureSchool
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="m-0 pb-5 pt-5">More</h4>
            <div className="color-5A7184 footer-link font14">
              <div>
                <a
                  className="link"
                  href="https://code.whitehatjr.com/terms-conditions"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms &amp; Conditions
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://code.whitehatjr.com/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://www.whitehatjr.com/complaint-redressal"
                  target="_blank"
                  rel="noreferrer"
                >
                  Complaint Redressal
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://www.whitehatjr.com/fulfillment-refund-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fulfillment Policy
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://www.whitehatjr.com/help-desk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Help Desk
                </a>
              </div>
              <div>
                <a
                  className="link"
                  href="https://www.whitehatjr.com/video-gallery"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex pt-15 pl-15 pr-15">
          <span className="color-5A7184 footer-link font14">*</span>
          <p className="color-5A7184 footer-link font14">
            Some of the WhiteHat Jr classes are powered by Code.org which is
            completely free to access.
          </p>
        </div>
        <div className="wrapper">
          <section className="details-group color-5A7184">
            {[
              {
                title: "About WhiteHat Jr",
                content: `Today, in the computer age, not all schools teach coding in early childhood resulting in a major gap in the requirements of the new world and our children's skills. WhiteHat Jr introduces and prepares your child from 6-18 years for this new coding world. They learn fundamentals of coding--logic, structure, sequence, and algorithmic thinking--to generate creative outcomes like animations and apps. All classes are taught Live 1:1 Online in the comfort of your home by Top 1% selected teachers and subject matter experts.`,
              },
              {
                title: "Coding For Kids",
                content: `Whether you are a student interested in the IT careers that you could explore with a coding qualification or just fascinated by the world of tech and coding courses, WhiteHat Jr offers a wide range of online coding courses that make coding accessible to kids and young teenagers. We've put together a simple guide to answer some of the most commonly asked questions from parents and prospective students to help you understand the basics of what our kids programming courses cover, whether they are right for your child and how best to navigate them.`,
              },
            ].map(({ title, content }, i) => (
              <div className="details-container" key={i}>
                <div className="details__summary text-bold">{title}</div>
                <div className="details__content">
                  <p className="font14">{content}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="color-5A7184 text-center">
          <div className="d-flex align-items-center justify-center font14">
            Made with <div className="heart"></div> in India.
          </div>
          <div className="pt-15 pb-15 font14">
            Copyright WhiteHat Education Technology Pvt ltd © 2022. All Rights
            Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
