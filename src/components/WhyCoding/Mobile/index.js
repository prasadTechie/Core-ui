import React from "react";

const WhyCoding = () => {
  return (
    <section id="graph-box" className="IN is-visible-viewport">
      <div className="p-15">
        <div className="pt-15">
          <h2 className="m-0 text-center pt-5">Why Coding for Kids?</h2>
        </div>
        <div className="p-10">
          <div className="graph-box p-15 mb-10">
            <div className="graph-heading m-auto color-E95432 text-center text-medium font14 text-upper">
              Creativity scores at genius level
            </div>
            <div>
              <div className="container">
                <div className="barchart font14 is-visible-viewport">
                  <div></div>
                  <div></div>
                  <div
                    className="bar"
                    data-value="5"
                    data-label="Age 5"
                    data-tip="Age 5"
                    data-group="5"
                  ></div>
                  <div
                    className="bar"
                    data-value="10"
                    data-label="Age 10"
                    data-tip="Age 10"
                    data-group="10"
                  ></div>
                  <div
                    className="bar"
                    data-value="15"
                    data-label="Age 15"
                    data-tip="Age 15"
                    data-group="15"
                  ></div>
                  <div
                    className="bar"
                    data-value="35"
                    data-label="Age 35"
                    data-tip="Age 35"
                    data-group="35"
                  ></div>
                </div>
              </div>
              <div className="vertical-bar color-5A7184">
                {["100", "80", "60", "40", "20", "0"].map((value) => (
                  <div className="d-flex align-items-center" key={value}>
                    <div className={`range font14 text-${value}`}>{value}</div>
                    <div className={`age-${value}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex pt-15">
            <div className="vertical-line bg-primary"></div>
            <div className="d-flex pl-15 pt-15 pb-15 content-width">
              <div className="icon-process left-quote"></div>
              <div className="color-959EAD thinking-text text-center">
                Your kids can learn logic, structure, sequence and creative
                expression
              </div>
              <div className="icon-process right-quote"></div>
            </div>
          </div>
        </div>
        <h4 className="text-center m-0 p-15">Your Child Will Learn</h4>
        <div className="over-flow-scroll pt-10 kids-learn-section">
          <div className="d-flex box-container pb-10 wrapped-box-container">
            {[
              { icon: "structure", text: "Structure" },
              { icon: "creative", text: "Creative Thinking" },
              { icon: "logic", text: "Logic" },
              { icon: "sequencing", text: "Sequencing" },
              { icon: "algorithmic", text: "Algorithmic Thinking" },
            ].map((item, index) => (
              <div className="pr-15 box" key={index}>
                <div className={`icon-process ${item.icon} m-auto`}></div>
                <div className="font14 pt-10">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10"></div>
      </div>
      <div className="divider divider-bg"></div>
    </section>
  );
};

export default WhyCoding;
