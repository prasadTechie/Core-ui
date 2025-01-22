import Navbar from "../components/Navbar/Desktop";
import HeroSection from "../components/HeroSection/Desktop";
import MiniCraft from "../components/MiniCraft/Desktop";
import Articles from "../components/WhyCoding/Desktop";
import WhyCoding from "../components/WhyCoding/Desktop";
import Superstar from "../components/SuperStar/Desktop";
import VideoPopup from "../components/VideoPopup/Desktop";
import Projects from "../components/Project/Desktop";
import Curriculum from "../components/Curriculum/Desktop";
import OurTeacher from "../components/OurTeacher/Desktop";
import CurriculumCreator from "../components/CurriculumCreator";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer/Desktop";
import "../assets/styles/global.css";

const Desktop = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <OurCourses /> */}
      <MiniCraft />
      <Articles />
      <WhyCoding />
      <Superstar />
      <VideoPopup />
      <Projects />
      {/*======== CURRICULUM =========*/}
      <div id="course-pricing-start">&nbsp;</div>
      <Curriculum />

      <div className="curriculum-pricing-comparison">
        <div className="container">
          <h6 className="curriculum__heading font-futura-bold">
            World’s first of its kind learning pedagogy
          </h6>

          <h2 className="curriculum__heading font-futura-bold">
            Private Batch vs Solo Class
          </h2>

          <table className="pricing-comparison-table">
            <thead>
              <tr>
                <th>
                  <span className="recommended d-none">Recommended</span>
                </th>
                <th>
                  Private Batch{" "}
                  <span className="recommended d-block">Recommended</span>
                </th>
                <th>
                  Solo Class{" "}
                  <span className="recommended d-none">Recommended</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy Row for spacing */}
              <tr className="empty-line">
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td className="pricing-comparison-section">Class Size</td>
                <td>Up to 6 students</td>
                <td>1 student</td>
              </tr>

              {/* Dummy Row for spacing */}
              <tr className="empty-line">
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td className="pricing-comparison-section">
                  Individual Attention
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
              </tr>

              {/* Dummy Row for spacing */}
              <tr className="empty-line">
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td className="pricing-comparison-section">
                  Fixed Class Schedule
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
              </tr>

              {/* Dummy Row for spacing */}
              <tr className="empty-line">
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td className="pricing-comparison-section">
                  Individual Projects
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
              </tr>

              {/* Dummy Row for spacing */}
              <tr className="empty-line">
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td className="pricing-comparison-section">
                  Personalised 1 on 1 Learning Experience
                </td>
                <td>
                  <img
                    src="images/Wrong-cross.svg"
                    alt="Wrong"
                    loading="lazy"
                  />
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
              </tr>

              {/* Repeat the pattern for remaining rows */}

              <tr>
                <td className="pricing-comparison-section">
                  Holiday Allowance
                </td>
                <td>
                  <img
                    src="images/Wrong-cross.svg"
                    alt="Wrong"
                    loading="lazy"
                  />
                </td>
                <td>
                  <img
                    src="images/Correct-tick.svg"
                    alt="Correct"
                    loading="lazy"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p className="footnote-padding">
            *Applicable only with purchase of 76 &amp; 144 classes package
          </p>
        </div>
      </div>

      <div className="full-body-container">
        <OurTeacher />
        <CurriculumCreator />
        <DownloadApp />
        <Footer />
      </div>
    </>
  );
};

export default Desktop;
