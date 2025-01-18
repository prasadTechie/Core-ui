import React, { useState } from "react";

const Superstar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const superstars = [
    {
      id: 1,
      name: "David Chea, Age 10",
      subtitle: "Proud WhiteHat Jr Alumni",
      description:
        "Created 'Safe zone' App that marks zones which are not safe for children and provides alerts if someone is entering this area.",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/david-desktop-2x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/david-desktop-2x.png 2x",
      awards: [
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/herculean-22x.png",
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/time-keeper-2-2x.png",
      ],
    },
    {
      id: 2,
      name: "Hiranya Rajni, Age 7",
      subtitle: "Proud WhiteHat Jr Alumni",
      description:
        "Created a 'Sign Language' App which allows people to communicate with hearing impaired individuals using the American Sign Language. She was also covered by Forbes.",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/hiranya-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/hiranya-2x.png 2x",
      awards: [
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/time-keeper-1-2x.png",
      ],
    },
    {
      id: 3,
      name: "Mae Mae, Age 9",
      subtitle: "Proud WhiteHat Jr Alumni",
      description:
        "Created 'Anti Bullying' App which allows children to report incidents of bullying and harassment in a quick and standardised way. Her app was also recognised by Hon’ble HRD minister.",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/mae-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/mae-2x.png 2x",
      awards: [
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/time-keeper-1-2x.png",
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/herculean-2x.png",
      ],
    },
    {
      id: 4,
      name: "Shaurya Sharma, Age 12",
      subtitle: "Proud WhiteHat Jr Alumni",
      description:
        "Created a 'Slack for School' App which allows students and teachers to engage in a more meaningful manner, with exchange of homework and conversations.",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/shaurya-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/shaurya-2x.png 2x",
      awards: [
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/timekeeper-2x.png",
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/trialblazer-2x.png",
      ],
    },
    {
      id: 5,
      name: "Yuvraj Shah, Age 11",
      subtitle: "Proud WhiteHat Jr Alumni",
      description:
        "Created 'Med Maze' app that helps connect individuals who have medicines that are about to expire with people who need them and cannot afford them.",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/yuvraj-1x.png 1x , https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/yuvraj-2x.png 2x",
      awards: [
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/class-streak-2x.png",
        "https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/trailblazer-1-2x.png",
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? superstars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === superstars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="wh-superstars">
      <h2>WhiteHat Jr Superstars</h2>
      <div className="container">
        <div className="wh-superstars__carousel-wrap">
          {/* Images */}
          <div className="wh-superstars__image-wrap">
            {superstars.map((superstar, index) => (
              <div
                key={index}
                className={`wh-superstars__img-content ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <div className="superstar-wrapper">
                  <div className="hideoverflow-image">
                    <img
                      srcSet={superstar.imageSrcSet}
                      alt="whitehat-superstar"
                      className="card-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="wh-superstars__content-wrap">
            {superstars.map((superstar, index) => (
              <div
                key={index}
                className={`wh-superstars__content ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <h4>{`${index + 1}/${superstars.length}`}</h4>
                <p className="wh-superstars__content-title">{superstar.name}</p>
                <p className="wh-superstars__content-sub-title">
                  {superstar.subtitle}
                </p>
                <p className="color-5A7184">{superstar.description}</p>
                <div className="wh-superstars__awards-wrap">
                  {superstar.awards.map((award, idx) => (
                    <div key={idx} className="wh-superstars__award">
                      <img src={award} alt="award-badge" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="wh-superstars__navigation-btns">
            {superstars.map((_, index) => (
              <div
                key={index}
                className={`wh-superstars__navigation-btn ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => handleIndexChange(index)}
              ></div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="global-icon wh-superstars__navigation-btn-left"
            onClick={handlePrev}
          ></button>
          <button
            className="global-icon wh-superstars__navigation-btn-right"
            onClick={handleNext}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Superstar;
