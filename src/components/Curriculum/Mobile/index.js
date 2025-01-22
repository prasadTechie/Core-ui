import React from "react";

const Curriculum = () => {
  const plans = [
    {
      id: "fl1",
      title: "Foundation Level 1 (Grade 1-2)",
      monthlyPrice: "₹ 9,599",
      annualPrice: "₹ 94,736",
      twoYearPrice: "₹ 181,332",
      monthlyCurriculum: "Sequence, Fundamentals Coding Blocks, Loops",
      annualCurriculum:
        "Events / UI, Conditionals, Complex Loop, Logic Structures, Turtle Coding",
      twoYearCurriculum:
        "Extended UI/UX, Rich GUI app, Space Tech simulation in Space Lab / Game Lab, Professional Game Design",
      pdfLink:
        "https://s3-whjr-curriculum-uploads.whjr.online/e34d2d93-f5fe-4f49-840b-813a1ca61736.pdf",
    },
    {
      id: "fl2",
      title: "Foundation Level 2 (Grade 3-4)",
      monthlyPrice: "₹ 12,999",
      annualPrice: "₹ 138,946",
      twoYearPrice: "₹ 259,999",
      monthlyCurriculum: "Sequence, Fundamentals Coding Blocks, Loops",
      annualCurriculum:
        "Events / UI, Conditionals, Complex Loop, Logic Structures, Turtle Coding",
      twoYearCurriculum:
        "Extended UI/UX, Rich GUI app, Space Tech simulation in Space Lab / Game Lab, Professional Game Design",
      pdfLink:
        "https://s3-whjr-curriculum-uploads.whjr.online/85a553cd-6055-45f7-924c-27c85fd2eb42.pdf",
    },
    // Add more plans as needed
  ];

  return (
    <div id="curriculum-section" className="is-visible-viewport">
      <div>
        <div className="curriculum__tabs">
          <div className="margin-bottom-14" id="half-height-margin-bottom">
            <div className="curriculum__tabs-container p-15">
              <div
                className="tab pricing-tab large font14 learning-type-tab active"
                data-learning-type="1:4"
              >
                <div className="tab-header">Private Batch</div>
                <div className="tab-sub-header">
                  (1 Teacher &amp; up to 6 Students)
                </div>
              </div>
              <div
                className="tab pricing-tab large font14 learning-type-tab"
                data-learning-type="1:1"
              >
                <div className="tab-header">Solo Class</div>
                <div className="tab-sub-header">
                  (1 Teacher &amp; 1 Student)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
