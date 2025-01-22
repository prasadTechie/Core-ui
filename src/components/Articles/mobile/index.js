import React from "react";

const Articles = () => {
  const students = [
    {
      name: "Shreya Kathare",
      age: "11",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/shreya-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/shreya-2x.jpg",
      description:
        "Shreya developed a school website which effectively communicated the school's vision and mission.",
    },
    {
      name: "Roy Nunez",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/roy-jr-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/roy-jr-2x.jpg",
      description:
        "Roy built an Air Hockey Battle app that allows you to play Air Hockey on your phone.",
    },
    {
      name: "Dhruva Shah",
      age: "13",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/dhruva-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/dhruva-2x.jpg",
      description:
        "Dhruva created a Space Shooter Game which resembles outer space.",
    },
    {
      name: "Anthony Watkins",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/anthony-watkins-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/anthony-watkins-2x.jpg",
      description:
        "Anthony built Control the Drone app that allows him to maneuver his own drone.",
    },
    {
      name: "Shridhar Shrivastav",
      age: "13",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/shridhar-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/shridhar-2x.jpg",
      description:
        "Shridhar built a Bubble Shooting Game which allows players to shoot and win over enemies.",
    },
    {
      name: "Skandini Nandan",
      age: "13",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/skandini-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/skandini-2x.jpg",
      description:
        "Skandini built an Origami Website which explains step-by-step method to create.",
    },
    {
      name: "Christian Sheeder",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/christian-sheeder-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/christian-sheeder-2x.jpg",
      description:
        "Christian developed Polio Vaccine Calculator app to keep a tab on vaccines required for kids.",
    },
    {
      name: "Kiara Bhandari",
      age: "8",
      image1x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/kiara-1x.jpg",
      image2x:
        "https://s3-cdnwhjr.whjr.online/website/mobile/social-certified/kiara-2x.jpg",
      description:
        "Kiara built a Restaurant application which allows restaurants to take online orders.",
    },
  ];

  return (
    <section className="is-visible-viewport">
      <div className="pt-15">
        <h2 className="p-15 text-center pb-5">
          Join 1 million+ students worldwide,
          <br />
          certified by WhiteHat Jr
        </h2>
      </div>
      <div className="p-15 over-flow-scroll pb-5">
        <div className="card-container" style={{ width: `calc(8 * 80vw)` }}>
          {students.map((student, index) => (
            <div className="certification-card mr-15" key={index}>
              <img
                srcSet={`${student.image1x} 1x, ${student.image2x} 2x`}
                alt={`${student.name}`}
                className="w-100"
                loading="lazy"
              />
              <div className="p-10">
                <h4>
                  {student.name}
                  {student.age && ` - Age ${student.age}`}
                </h4>
                <p className="font14 color-5A7184 pt-10 pb-10">
                  {student.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-15"></div>
      <div className="divider divider-bg"></div>
    </section>
  );
};

export default Articles;
