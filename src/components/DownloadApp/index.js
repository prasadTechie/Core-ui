import React from "react";

const DownloadApp = () => {
  return (
    <div id="mobileAppSection" class="mobile-app-section">
      <div class="container">
        <h2 class="section-heading">Join the WhiteHat Jr Revolution</h2>
        <div class="mobile-section-wrapper">
          <div class="app-section">
            <div class="flex">
              <div class="app-learn-content">
                <div>
                  <h4 class="font-futura-bold">
                    Book a FREE Trial Class on the go
                  </h4>

                  <p class="font18 color-5A7184">
                    Book your free class from anywhere with the WhiteHat Jr
                    class booking app
                  </p>

                  <div class="playstore-icons">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.whitehatjr"
                      target="_blank"
                    >
                      <img
                        src="https://s3-cdnwhjr.whjr.online/website/desktop/playStore2x.png"
                        alt=""
                        class="playstore "
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/in/app/whitehat-jr-online-coding/id1524626185"
                      target="_blank"
                    >
                      <img
                        src="https://s3-cdnwhjr.whjr.online/website/desktop/appStore2x.png"
                        alt=""
                        class="appstore "
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-mobile-device">
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/mobile-device.png"
                srcset="https://s3-cdnwhjr.whjr.online/website/desktop/mobile-device.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/mobile-device.png 2x"
                alt="mobile device"
                class="img-responsive "
                loading="lazy"
              />
            </div>
            <span class="ellipse-img">
              <img
                src="https://s3-cdnwhjr.whjr.online/website/desktop/ellipse.png"
                alt="mobile-device"
                class="img-responsive"
                loading="lazy"
              />
            </span>
          </div>
          <div class="registartion-counts" id="teacher-info-section">
            <div class="reigstered-teachers">
              <div class="registered-teachers-icon">
                <div class="hideoverflow-image">
                  <img
                    src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/registration-process/step-1.svg"
                    alt=""
                    class="card-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div class="registered-count">
                <h3 id="registeredTeacher">
                  <div class="counter" data-target="11000">
                    0
                  </div>
                </h3>
                <p class="font18">No. of Registered Teachers</p>
              </div>
            </div>
            <div class="reigstered-teachers">
              <div class="registered-teachers-icon">
                <div class="hideoverflow-image">
                  <img
                    src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/registration-process/step-3.svg"
                    alt=""
                    class="card-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div class="registered-count">
                <h3 id="classTaken">
                  <div class="counter" data-target="8700000">
                    0
                  </div>
                </h3>
                <p class="font18">No. of Classes Taken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
