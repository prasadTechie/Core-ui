import React from "react";

const DownloadApp = () => {
  return (
    <div className="pt-15">
      <div className="p-15">
        <h2 className="text-center m-0 pt-15">
          Join the WhiteHat Jr Revolution
        </h2>
      </div>
      <div>
        <div className="p-15 d-flex learn-container">
          <div className="revolution-info">
            <h4 className="m-0 pb-15">Book a FREE Trial Class on the go</h4>
            <p className="pb-15 font14">
              Book your free class from anywhere with the WhiteHat Jr class
              booking app
            </p>
            <div className="d-flex">
              <a
                href="https://play.google.com/store/apps/details?id=com.whitehatjr"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/playStore2x.png"
                  alt="Google Play Store"
                  className="play-store-img"
                  loading="lazy"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/whitehat-jr-online-coding/id1524626185"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/appStore2x.png"
                  alt="Apple App Store"
                  className="app-store-img"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="logo-mobile">
            <img
              src="https://s3-cdnwhjr.whjr.online/website/mobile/mobile-device-mweb.png"
              srcSet="https://s3-cdnwhjr.whjr.online/website/mobile/mobile-device-mweb.png 1x, https://s3-cdnwhjr.whjr.online/website/mobile/mobile-device-mweb.png 2x"
              alt="Mobile Device"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="pl-15 pr-15">
        <div className="teacher-info" id="teacher-info-section">
          <div className="d-flex align-items-center">
            <div className="icon-revolution registred-student pr-15"></div>
            <div className="teacher-info-right-wrap">
              <h2 className="m-0 counter" data-target="11000">
                0
              </h2>
              <p className="font14">No. of Registered Teachers</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="icon-revolution registred-teacher pr-15"></div>
            <div className="teacher-info-right-wrap">
              <h2 className="m-0 counter" data-target="8700000">
                0
              </h2>
              <p className="font14">No. of Classes Taken</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
