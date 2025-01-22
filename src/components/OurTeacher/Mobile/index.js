import React from "react";

const OurTeacher = () => {
  const educators = [
    {
      name: "Dr. Farida Khan",
      title: "PhD IITB, Gold Medalist",
      imgSrc:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/farida1x.png",
      imgSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/farida1x.png 1x, https://s3-cdnwhjr.whjr.online/website/mobile/home-page/farida2x.png 2x",
    },
    {
      name: "Rajeev Jha",
      title: "Advanced Game Designer, TFI Fellow",
      imgSrc:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/rajiv1x.png",
      imgSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/rajiv1x.png 1x, https://s3-cdnwhjr.whjr.online/website/mobile/home-page/rajiv2x.png 2x",
    },
    {
      name: "Abhijeet Gawande",
      title: "IB Educational Technologist, AI Expert",
      imgSrc:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/abhijeet1x.png",
      imgSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/abhijeet1x.png 1x, https://s3-cdnwhjr.whjr.online/website/mobile/home-page/abhijeet2x.png 2x",
    },
    {
      name: "Gauri Parulkar",
      title: "Computer Scientist, Entrepreneur, Science Quotient",
      imgSrc:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/gauri1x.png",
      imgSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/mobile/home-page/gauri1x.png 1x, https://s3-cdnwhjr.whjr.online/website/mobile/home-page/gauri2x.png 2x",
    },
  ];

  return (
    <div className="pt-15 mb-15 is-visible-viewport">
      <div className="p-15">
        <h2 className="text-center pt-10">Our Expert Coding Educators</h2>
      </div>
      <div className="p-15">
        <img
          src="https://s3-cdnwhjr.whjr.online/website/desktop/teacher-process-1x.png"
          srcSet="https://s3-cdnwhjr.whjr.online/website/desktop/teacher-process-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/teacher-process-2x.png 2x"
          alt="Teacher Process"
          className="teacherImg"
          loading="lazy"
        />
      </div>
      <div className="pt-15 pb-15">
        <h4 className="m-0 pb-10 pl-15 pr-15">
          Top 1% teachers selected by an industry-leading 4-step teacher
          assessment process by top 1% of early childhood coding experts
        </h4>
        <p className="font14 color-5A7184 pb-10 pt-10 pl-15 pr-15">
          WhiteHat Jr follows a rigorous 4-Step Selection Process for confirming
          teacher candidates so your children are taught by the Top Early
          Childhood Coding Experts.
        </p>
        <h4 className="pb-10 pt-10 pl-15 pr-15">
          Meet our IIT and IB-trained Curriculum Creators
        </h4>
        <div className="over-flow-scroll">
          <div className="curriculum-team d-flex">
            {educators.map((educator, index) => (
              <div key={index}>
                <div
                  className={educator.name.toLowerCase().replace(/\s/g, "-")}
                >
                  <img
                    src={educator.imgSrc}
                    srcSet={educator.imgSrcSet}
                    alt={educator.name}
                    loading="lazy"
                  />
                  <div className="text-center">
                    <div className="font14 font-bold p-10">{educator.name}</div>
                    <p className="color-5A7184 font14">{educator.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pl-15 pr-15 pb-10">
        <a
          className="view_live_comment nav-item"
          href="https://www.whitehatjr.com/live-teacher-dashboard"
        >
          <button className="btn view_superstar_btn view_superstar_btn__mobile button login_btn view-comment-desktop-btn">
            <img
              src="https://s3-cdnwhjr.whjr.online/website/desktop/play-icon.png"
              alt="Play Icon"
              loading="lazy"
            />
            &nbsp;
            <span>View Live Comment</span>
          </button>
        </a>
      </div>
      <div className="rating pl-15 pr-15 pb-15">
        <div className="d-flex">
          <div className="icon-process star"></div>
          <div className="icon-process star"></div>
          <div className="icon-process star"></div>
          <div className="icon-process star"></div>
          <div className="icon-process half-star"></div>
        </div>
        <div className="font14 pt-10">
          <span className="text-bold">4.7+ out of 5 stars</span> from 8.6k+
          reviews by our students
        </div>
      </div>
      <div className="divider divider-bg"></div>
    </div>
  );
};

export default OurTeacher;
