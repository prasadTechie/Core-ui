import React, { useState, useEffect } from "react";
import burgerIcon from "./../../../assets/images/mobile/small-icons/open2x.png";
import closeIcon from "./../../../assets/images/mobile/small-icons/close2x.png";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("curriculum");

  useEffect(() => {
    const pathname = "/";
    if (!pathname.includes("excitingnews")) {
      document.getElementById("curriculum")?.classList.add("navbar-active");
    }
  }, []);

  const openNav = () => {
    setIsNavOpen(true);
    document.getElementById("backdrop")?.classList.add("dropdown-backdrop");
    const navbarNav = document.querySelector(".navbar-nav");
    if (navbarNav) {
      navbarNav.style.visibility = "visible";
      navbarNav.style.opacity = "1";
      navbarNav.style.transitionDelay = "0s";
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.getElementById("backdrop")?.classList.remove("dropdown-backdrop");
    const navbarNav = document.querySelector(".navbar-nav");
    if (navbarNav) {
      navbarNav.style.visibility = "hidden";
      navbarNav.style.opacity = "0";
      navbarNav.style.transitionDelay = "0s";
    }
  };

  const getActiveMenu = (menu) => {
    setActiveMenu(menu);
    ["curriculum", "buy", "math"].forEach((menuId) => {
      const element = document.getElementById(menuId);
      if (element) {
        if (menuId === menu) {
          element.classList.add("navbar-active");
        } else {
          element.classList.remove("navbar-active");
        }
      }
    });
  };

  return (
    <>
      <header className="navbar-nav bg-fff">
        <nav>
          <img
            src={closeIcon}
            className="m-auto"
            onClick={closeNav}
            id="close"
            alt="Close Navigation"
            loading="lazy"
            style={{ display: isNavOpen ? "block" : "none" }}
          />
          <ul className="p-0">
            <li>
              <div onClick={() => getActiveMenu("curriculum")}>
                <a
                  href="https://www.whitehatjr.com/#"
                  className="onclick-menu curriculum font18 text-bold"
                  id="curriculum"
                >
                  Curriculum and Pricing
                </a>
              </div>
              <a
                className="color-5A7184 font18 nav-tab headerPricingTab"
                data-pricing-plan="fl1"
                onClick={closeNav}
              >
                (Grade 1-2)
              </a>
              <a
                class="color-5A7184 font18 nav-tab headerPricingTab "
                data-pricing-plan="fl2"
                onclick={closeNav}
              >
                (Grade 3-4)
              </a>

              <a
                className="color-5A7184 font18 nav-tab headerPricingTab "
                data-pricing-plan="fl3"
                onclick={closeNav}
              >
                (Grade 5)
              </a>

              <a
                className="color-5A7184 font18 nav-tab headerPricingTab "
                data-pricing-plan="ml4"
                onclick={closeNav}
              >
                (Grade 6-8)
              </a>

              <a
                className="color-5A7184 font18 nav-tab headerPricingTab "
                data-pricing-plan="applied-tech"
                onclick={closeNav}
              >
                (Grade 9-12)
              </a>
            </li>
            <li>
              <div className="nav-item custom-nav-item">
                <div className="flex flex-align_center">
                  <div
                    className="course-dropdown general-dropdown-course"
                    style={{ display: "flex" }}
                  >
                    <span className="courses">Courses:</span>
                    <button></button>
                    <div className="options">
                      <input
                        id="radio-africa"
                        type="radio"
                        name="region"
                        value="africa"
                        defaultChecked
                      />
                      <label htmlFor="radio-africa" className="active-clr">
                        Coding
                      </label>
                      {/* Add other radio buttons here */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div className="divider divider-bg m-15"></div>
          </ul>
        </nav>
      </header>

      <nav className="navbar bg-fff d-flex">
        <div className="toggle-bar">
          <img
            src={burgerIcon}
            className="m-auto"
            onClick={openNav}
            id="open"
            alt=""
            style={{ display: isNavOpen ? "none" : "block", width: "6.5vw" }}
            loading="lazy"
          />
        </div>

        <span className="navbar-brand" id="whitehatjr-logo">
          <img
            src="https://s3-cdnwhjr.whjr.online/website/desktop/logo_whjr.png"
            alt="WhiteHat Jr logo"
            loading="lazy"
          />
        </span>

        <div
          className="join-class-button-mobile"
          style={{
            borderRadius: 0,
            border: "2px solid #FF8D1A",
            color: "#FF8D1A",
          }}
        >
          <a
            href="https://code.whitehatjr.com/s/login?click_source=website"
            className="login_btn"
            style={{ color: "#FF8D1A" }}
          >
            Join Class
          </a>
          <span className="join-class-subtext" style={{ color: "#FF8D1A" }}>
            Already Booked a Class?
          </span>
        </div>
        <div id="backdrop" onClick={closeNav}></div>
      </nav>
    </>
  );
};

export default Navbar;
