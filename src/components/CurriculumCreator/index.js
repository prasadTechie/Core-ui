import React from "react";

const CurriculumCreator = () => {
  return (
    <div id="curriculumCreator" className="curriculum-creater-section">
      <div className="container">
        <h4 className="text-center sub-section-heading">
          Meet our IIT and IB-trained Curriculum Creators
        </h4>
        <div className="curriculum-creators">
          <div className="creator">
            <div className="creator-profile">
              <div className="hideoverflow-image curriculum-image">
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/farida.png"
                  alt="curriculumCreator"
                  className="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="creator-details">
              <span className="font18 color-183B56 creator-name">
                Dr. Farida Khan
              </span>

              <span className="font18 color-5A7184 creator-achivement">
                PHD IITB, Gold Medalist
              </span>
            </div>
          </div>
          <div className="creator">
            <div className="creator-profile">
              <div className="hideoverflow-image curriculum-image">
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/rajeev.png"
                  alt="curriculumCreator"
                  className="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="creator-details">
              <span className="font18 color-183B56 creator-name">
                Rajeev Jha
              </span>
              <span className="font18 color-5A7184 creator-achivement">
                Advanced Game Designer, TFI Fellow.
              </span>
            </div>
          </div>
          <div className="creator">
            <div className="creator-profile">
              <div className="hideoverflow-image curriculum-image">
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/abhijit.png"
                  alt="curriculumCreator"
                  className="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="creator-details">
              <span className="font18 color-183B56 creator-name">
                Abhijeet Gawande
              </span>
              <span className="font18 color-5A7184 creator-achivement">
                IB Educational Technologist, AI Expert
              </span>
            </div>
          </div>
          <div className="creator">
            <div className="creator-profile">
              <div className="hideoverflow-image curriculum-image">
                <img
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/gauri.png"
                  alt="curriculumCreator"
                  className="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="creator-details">
              <span className="font18 color-183B56 creator-name">
                Gauri Parulkar
              </span>
              <span className="font18 color-5A7184 creator-achivement">
                Computer Scientist, Entrepreneur, Science Quotient
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumCreator;
