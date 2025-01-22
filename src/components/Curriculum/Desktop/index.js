import React, { useState } from "react";

const Curriculum = () => {
  return (
    <div id="curriculum-section 2343">
      <div className="container">
        <div className="curriculum__tabs">
          <div className="curriculum__tabs-container">
            <div
              className="tab learning-type-tab"
              data-learning-type="1:4"
              data-1-to-m="true"
            >
              <h5 className="font-futura-bold">Private Batch</h5>
              <div className="text font-futura-bold">
                (1 Teacher &amp; upto 6 Students)
              </div>
            </div>

            <div
              className="tab learning-type-tab"
              data-learning-type="1:1"
              data-1-to-m="true"
            >
              <h5 className="font-futura-bold">Solo Class</h5>
              <div className="text font-futura-bold">
                (1 Teacher &amp; 1 Student)
              </div>
            </div>
          </div>

          <div className="curriculum__tabs_child-tabs learning-type-child-tab">
            <div
              className="curriculum__tabs_child-container hide"
              data-learning-type="1:4"
            >
              <div
                className="tab"
                data-learning-child-plan="codingCurriculum"
                data-learning-type="1:4"
              >
                <h5 className="font-futura-bold">Coding Curriculum</h5>
              </div>
            </div>

            <div
              className="curriculum__tabs_child-container hide"
              data-learning-type="1:1"
            >
              <div
                className="tab"
                data-learning-child-plan="codingCurriculum"
                data-learning-type="1:1"
              >
                <h5 className="font-futura-bold">Coding Curriculum</h5>
              </div>
            </div>
          </div>

          <div className="curriculum__tabs_sub-tabs learning-type-sub-tab">
            <div className="curriculum__tabs" data-learning-type="1:4">
              <div
                className="curriculum__tabs-container hide"
                data-learning-child-plan="codingCurriculum"
                data-learning-type="1:4"
              >
                <div
                  className="tab"
                  data-pricing-plan="fl1"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:4"
                >
                  <h5 className="font-futura-bold">Foundation Level 1</h5>
                  <div className="text font-futura-bold">(Grade 1-2)</div>
                </div>

                <div
                  className="tab"
                  data-pricing-plan="fl2"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:4"
                >
                  <h5 className="font-futura-bold">Foundation Level 2</h5>
                  <div className="text font-futura-bold">(Grade 3-4)</div>
                </div>

                <div
                  className="tab"
                  data-pricing-plan="fl3"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:4"
                >
                  <h5 className="font-futura-bold">Foundation Level 3</h5>
                  <div className="text font-futura-bold">(Grade 5)</div>
                </div>

                <div
                  className="tab"
                  data-pricing-plan="ml4"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:4"
                >
                  <h5 className="font-futura-bold">Mastery Level 4</h5>
                  <div className="text font-futura-bold">(Grade 6-8)</div>
                </div>
              </div>
            </div>

            <div className="curriculum__tabs" data-learning-type="1:1">
              <div
                className="curriculum__tabs-container hide"
                data-learning-child-plan="codingCurriculum"
                data-learning-type="1:1"
              >
                <div
                  className="tab"
                  data-pricing-plan="fl1"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:1"
                >
                  <h5 className="font-futura-bold">Foundation Level 1</h5>
                  <div className="text font-futura-bold">(Grade 1-2)</div>
                </div>

                <div
                  className="tab"
                  data-pricing-plan="fl2"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:1"
                >
                  <h5 className="font-futura-bold">Foundation Level 2</h5>
                  <div className="text font-futura-bold">(Grade 3-4)</div>
                </div>

                <div
                  className="tab"
                  data-pricing-plan="fl3"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:1"
                >
                  <h5 className="font-futura-bold">Foundation Level 3</h5>
                  <div className="text font-futura-bold">(Grade 5)</div>
                </div>

                <div
                  className="tab"
                  data-pricing-plan="ml4"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:1"
                >
                  <h5 className="font-futura-bold">Mastery Level 4</h5>
                  <div className="text font-futura-bold">(Grade 6-8)</div>
                </div>

                <div
                  className="tab"
                  data-pricing-plan="applied-tech"
                  data-learning-child-plan="codingCurriculum"
                  data-learning-type="1:1"
                >
                  <h5 className="font-futura-bold">Professional Level 6</h5>
                  <div className="text font-futura-bold">(Grade 9-12)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="plan-change-switch"></div>

          <div className="curriculum__tabs-content">
            <div className="curriculum-learning-type" data-learning-type="1:4">
              <div
                className="curriculum-learning-type-body hide"
                data-learning-child-plan="codingCurriculum"
                data-learning-type="1:4"
              >
                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="fl1"
                  data-learning-type="1:4"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 9,599"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/e34d2d93-f5fe-4f49-840b-813a1ca61736.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 9,599</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6208"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 94,736"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/e34d2d93-f5fe-4f49-840b-813a1ca61736.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 94,736</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6209"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 181,332"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/e34d2d93-f5fe-4f49-840b-813a1ca61736.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 181,332</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6210"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>

                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="fl2"
                  data-learning-type="1:4"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 9,599"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/79b6d153-e7f2-4dd1-84c3-3262909dd0f0.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 9,599</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6208"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 94,736"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/79b6d153-e7f2-4dd1-84c3-3262909dd0f0.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 94,736</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6209"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 181,332"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/79b6d153-e7f2-4dd1-84c3-3262909dd0f0.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 181,332</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6210"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>

                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="fl3"
                  data-learning-type="1:4"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 9,599"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/8f658249-155b-4b21-b156-0f802ae96cb7.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 9,599</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6208"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 94,736"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/8f658249-155b-4b21-b156-0f802ae96cb7.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 94,736</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6209"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 181,332"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/8f658249-155b-4b21-b156-0f802ae96cb7.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 181,332</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6210"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>

                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="ml4"
                  data-learning-type="1:4"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 9,599"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/2fa19a7c-8a5d-460c-8c8d-d779c831e095.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 9,599</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6208"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 94,736"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/2fa19a7c-8a5d-460c-8c8d-d779c831e095.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 94,736</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6209"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 181,332"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/2fa19a7c-8a5d-460c-8c8d-d779c831e095.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 181,332</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6210"
                          data-affiliate-id="f2d0f2eb-7c8d-42cb-9424-8ece499bf464"
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>
              </div>
            </div>

            <div className="curriculum-learning-type" data-learning-type="1:1">
              <div
                className="curriculum-learning-type-body hide"
                data-learning-child-plan="codingCurriculum"
                data-learning-type="1:1"
              >
                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="fl1"
                  data-learning-type="1:1"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 12,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/e34d2d93-f5fe-4f49-840b-813a1ca61736.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 12,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6190"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 138,946"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/e34d2d93-f5fe-4f49-840b-813a1ca61736.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 138,946</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6191"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 259,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/e34d2d93-f5fe-4f49-840b-813a1ca61736.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 259,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6192"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>

                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="fl2"
                  data-learning-type="1:1"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 12,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/79b6d153-e7f2-4dd1-84c3-3262909dd0f0.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 12,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6190"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 138,946"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/79b6d153-e7f2-4dd1-84c3-3262909dd0f0.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 138,946</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6191"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 259,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/79b6d153-e7f2-4dd1-84c3-3262909dd0f0.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 259,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6192"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>

                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="fl3"
                  data-learning-type="1:1"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 12,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/8f658249-155b-4b21-b156-0f802ae96cb7.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 12,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6190"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 138,946"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/8f658249-155b-4b21-b156-0f802ae96cb7.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 138,946</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6191"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 259,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/8f658249-155b-4b21-b156-0f802ae96cb7.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 259,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6192"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>

                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="ml4"
                  data-learning-type="1:1"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 12,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/2fa19a7c-8a5d-460c-8c8d-d779c831e095.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 12,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6190"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 138,946"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/2fa19a7c-8a5d-460c-8c8d-d779c831e095.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 138,946</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6191"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 259,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/2fa19a7c-8a5d-460c-8c8d-d779c831e095.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 259,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6192"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>

                <div
                  className="curriculum__pricing_tab_context"
                  data-learning-child-plan="codingCurriculum"
                  data-pricing-plan="applied-tech"
                  data-learning-type="1:1"
                >
                  <div className="plan_cont" data-pricing-plan-type="one_time">
                    <div
                      className="plan sic  "
                      data-course-plan-type="sic"
                      data-credit-count="8"
                      data-course-duration="60"
                      data-selling-price="₹ 12,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Monthly Plan</h4>
                        <div className="details">
                          <div>8 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="content">Coding Fundamentals</div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/85a553cd-6055-45f7-924c-27c85fd2eb42.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 12,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6190"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">Introduction to Coding</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan andard  "
                      data-course-plan-type="andard"
                      data-credit-count="96"
                      data-course-duration="60"
                      data-selling-price="₹ 138,946"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Annual Plan</h4>
                        <div className="details">
                          <div>96 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/85a553cd-6055-45f7-924c-27c85fd2eb42.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-block">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-none">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 138,946</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6191"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
                            </div>
                            <div className="detail">
                              App Developer Certificate
                            </div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-playstore"></div>
                            </div>
                            <div className="detail">
                              Publish your app To Playstore
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="plan emium  "
                      data-course-plan-type="emium"
                      data-credit-count="192"
                      data-course-duration="60"
                      data-selling-price="₹ 259,999"
                    >
                      <div className="heading">
                        <h4 className="font-futura-bold">Two Year Plan</h4>
                        <div className="details">
                          <div>192 Classes</div>
                        </div>
                      </div>
                      <div className="plan_desc  ">
                        <h6 className="font-futura-bold">
                          Curriculum Includes
                        </h6>

                        <div className="label">Introduction to Coding</div>

                        <div className="label">App Developer Certificate</div>

                        <div className="content">
                          Coding Fundamentals, Creative Coding, STEM Apps, Game
                          Development, AI, Front End &amp; Back End App
                          Development, Code a Satellite
                        </div>
                        <a
                          href="https://s3-whjr-curriculum-uploads.whjr.online/85a553cd-6055-45f7-924c-27c85fd2eb42.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="color-primary viewCurriculumDetails"
                        >
                          View Detailed curriculum
                        </a>
                      </div>
                      <div className="price_desc ">
                        <div className="plan_tag popular d-none">
                          Most Popular
                        </div>
                        <div className="plan_tag best-value d-block">
                          Best Value
                        </div>
                        <div className="price">
                          <h3 className="font-futura-bold ">₹ 259,999</h3>
                        </div>
                        <button
                          className="submit-btn text-bold btn-primary"
                          data-id="6192"
                          data-affiliate-id=""
                        >
                          <span className="text-bold">Buy Now</span>
                        </button>
                        <div className="content_center">
                          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
                          <h6 className="font-futura-bold">Achievements</h6>
                        </div>
                        <div className="achievements">
                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-lifetime"></div>
                            </div>
                            <div className="detail">Lifetime Access</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-space"></div>
                            </div>
                            <div className="detail">Space Tech</div>
                          </div>

                          <div className="box">
                            <div className="curriculum__bg-circle">
                              <div className="curriculum__bg global-icon curriculum__bg__achievement-fellowship"></div>
                            </div>
                            <div className="detail">18 Under 18 Fellowship</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="plan_cont hide"
                    data-pricing-plan-type="subscriptions"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="curriculum__bottom"
            style={{ justifyContent: "center" }}
          >
            <a className="book_trial nav-item">
              <button
                className="btn btn-primary book_trial_btn color-fff"
                data-event-prop="curriculum_and_pricing"
                style={{ borderRadius: 0 }}
              >
                <span className="btn-text">
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <path
                      d="M1.28571 16.7143V13.8214H4.17857V16.7143H1.28571ZM4.82143 16.7143V13.8214H8.03571V16.7143H4.82143ZM1.28571 13.1786V9.96428H4.17857V13.1786H1.28571ZM4.82143 13.1786V9.96428H8.03571V13.1786H4.82143ZM1.28571 9.32143V6.42857H4.17857V9.32143H1.28571ZM8.67857 16.7143V13.8214H11.8929V16.7143H8.67857ZM4.82143 9.32143V6.42857H8.03571V9.32143H4.82143ZM12.5357 16.7143V13.8214H15.4286V16.7143H12.5357ZM8.67857 13.1786V9.96428H11.8929V13.1786H8.67857ZM5.14286 4.5C5.14286 4.67076 4.99219 4.82143 4.82143 4.82143H4.17857C4.00781 4.82143 3.85714 4.67076 3.85714 4.5V1.60714C3.85714 1.43638 4.00781 1.28571 4.17857 1.28571H4.82143C4.99219 1.28571 5.14286 1.43638 5.14286 1.60714V4.5ZM12.5357 13.1786V9.96428H15.4286V13.1786H12.5357ZM8.67857 9.32143V6.42857H11.8929V9.32143H8.67857ZM12.5357 9.32143V6.42857H15.4286V9.32143H12.5357ZM12.8571 4.5C12.8571 4.67076 12.7065 4.82143 12.5357 4.82143H11.8929C11.7221 4.82143 11.5714 4.67076 11.5714 4.5V1.60714C11.5714 1.43638 11.7221 1.28571 11.8929 1.28571H12.5357C12.7065 1.28571 12.8571 1.43638 12.8571 1.60714V4.5ZM16.7143 3.85714C16.7143 3.15402 16.1317 2.57143 15.4286 2.57143H14.1429V1.60714C14.1429 0.723215 13.4196 0 12.5357 0H11.8929C11.0089 0 10.2857 0.723215 10.2857 1.60714V2.57143H6.42857V1.60714C6.42857 0.723215 5.70536 0 4.82143 0H4.17857C3.29464 0 2.57143 0.723215 2.57143 1.60714V2.57143H1.28571C0.582589 2.57143 0 3.15402 0 3.85714V16.7143C0 17.4174 0.582589 18 1.28571 18H15.4286C16.1317 18 16.7143 17.4174 16.7143 16.7143V3.85714Z"
                      fill="#fff"
                    />
                  </svg>
                  Book a FREE Trial
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
