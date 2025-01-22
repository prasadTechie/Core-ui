import React from "react";

const VideoPopup = () => {
  return (
    <div className="is-visible-viewport">
      <div className="whitehat-coder bg-blue">
        <div className="saira-bg p-15 text-center color-fff">
          <h2 className="p-15">Saira’s video, Age 9, WhiteHat Jr Coder</h2>
          <p className="pt-5">
            Watch how coding with WhiteHat Jr helped Saira get better at Math.
          </p>
          <a href="https://www.whitehatjr.com/" id="link" className="play-icon">
            <div className="icon-arrow"></div>
          </a>
          <br />
        </div>
        <div className="saira-img"></div>
      </div>
      <div className="divider divider-bg"></div>
      <div id="popup">
        <iframe
          id="popupiframe"
          src="./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/saved_resource(2).html"
          title="Popup Video"
        ></iframe>
      </div>
      <div id="popupdarkbg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
    </div>
  );
};

export default VideoPopup;
