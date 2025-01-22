import React from "react";

const Superstar = () => {
  const students = [
    {
      id: "img-1",
      name: "David Chea",
      age: 10,
      certificate: "App Developer Certificate, Silicon Valley Winner",
      description:
        "Created 'Safe zone' App that marks zones which are not safe for children and provides alerts if someone is entering this area.",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/david-1x.png",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/david-2x.png",
      detailsIcons: [
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/herculean-22x.png",
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/time-keeper-2-2x.png",
      ],
    },
    {
      id: "img-2",
      name: "Hiranya Rajni",
      age: 7,
      certificate: "App Developer Certificate, Silicon Valley Winner",
      description:
        "Created a 'Sign Language' App which allows people to communicate with hearing impaired individuals using the American Sign Language. She was also covered by Forbes.",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider2-1x.png",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider2-2x.png",
      detailsIcons: [
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/time-keeper-1-2x.png",
      ],
    },
    {
      id: "img-3",
      name: "Mae Mae",
      age: 9,
      certificate: "App Developer Certificate, Silicon Valley Winner",
      description:
        "Created 'Anti Bullying' App which allows children to report incidents of bullying and harassment in a quick and standardised way. Her app was also recognised by Hon’ble HRD minister.",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider3-1x.pn",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider3-2x.png",
      detailsIcons: [
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/time-keeper-1-2x.png",
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/herculean-2x.png",
      ],
    },
    {
      id: "img-4",
      name: "Shaurya Sharma",
      age: 12,
      certificate: "App Developer Certificate, Silicon Valley Winner",
      description:
        "Created a 'Slack for School' App which allows students and teachers to engage in a more meaningful manner, with exchange of homework and conversations.",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider1-1x.png",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider1-2x.png",
      detailsIcons: [
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/timekeeper-2x.png",
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/trialblazer-2x.png",
      ],
    },
    {
      id: "img-5",
      name: "Yuvraj Shah",
      age: 11,
      certificate: "App Developer Certificate, Silicon Valley Winner",
      description:
        "Created 'Med Maze' app that helps connect individuals who have medicines that are about to expire with people who need them and cannot afford them.",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider4-1x.png",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/studentSlider4-2x.png",
      detailsIcons: [
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/class-streak-2x.png",
        "./Live Online Coding, Math & Music Classes for kids @ WhiteHat Jr_files/trailblazer-1-2x.png",
      ],
    },
  ];

  return (
    <div className="is-visible-viewport">
      <div className="p-15">
        <h2 className="m-0 pt-15 text-center">WhiteHat Jr Superstars</h2>
      </div>
      <div className="carousel">
        <div
          className="slides"
          style={{
            touchAction: "pan-y",
            userSelect: "none",
            WebkitUserDrag: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        >
          {students.map((student, index) => (
            <div key={student.id}>
              <input
                type="radio"
                name="radio-buttons"
                id={student.id}
                data-swipe-index={index}
                defaultChecked={index === 0}
              />
              <div className="slide-container">
                <div className="slide-image">
                  <div className="d-flex">
                    <div className="studentSliderImg">
                      <img
                        srcSet={`${student.image1x} 1x, ${student.image2x} 2x`}
                        loading="lazy"
                        alt={`${student.name}`}
                      />
                    </div>
                    <div className="details">
                      {student.detailsIcons.map((icon, i) => (
                        <div className="text-center p-10" key={i}>
                          <img
                            src={icon}
                            alt="Details Icon"
                            className="detailsIcon"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="info-card p-15">
                    <h4 className="m-0 pb-10">
                      {student.name}, Age {student.age}
                    </h4>
                    <p className="font14 pb-15">{student.certificate}</p>
                    <p className="font14 color-5A7184">{student.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="carousel-dots">
            {students.map((student) => (
              <label
                key={student.id}
                htmlFor={student.id}
                className="carousel-dot bg-primary"
                id={`${student.id}-dot`}
              ></label>
            ))}
          </div>
        </div>
      </div>
      <div className="p-15 margin-top-7"></div>
      <div className="divider divider-bg"></div>
    </div>
  );
};

export default Superstar;
