import React from "react";

const Reviews = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Our Reviews</h6>
              <h2 className="ft-bold">
                What Our Customer <span className="theme-cl">Saying</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="reviews-slide">
              {/* Single review */}
              <div className="single-list">
                <div className="single_review">
                  <div className="sng_rev_thumb">
                    <figure>
                      <img
                        src="https://via.placeholder.com/500x500"
                        className="img-fluid circle"
                        alt="Mark Jevenue"
                      />
                    </figure>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0 fs-md ft-medium">Mark Jevenue</h4>
                    <span className="fs-sm theme-cl">CEO of Addle</span>
                  </div>
                  <div className="sng_rev_caption text-center">
                    <div className="rev_desc mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua veniam esse cillum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single review */}
              <div className="single-list">
                <div className="single_review">
                  <div className="sng_rev_thumb">
                    <figure>
                      <img
                        src="https://via.placeholder.com/500x500"
                        className="img-fluid circle"
                        alt="Henna Bajaj"
                      />
                    </figure>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0 fs-md ft-medium">Henna Bajaj</h4>
                    <span className="fs-sm theme-cl">Aqua Founder</span>
                  </div>
                  <div className="sng_rev_caption text-center">
                    <div className="rev_desc mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua veniam esse cillum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single review */}
              <div className="single-list">
                <div className="single_review">
                  <div className="sng_rev_thumb">
                    <figure>
                      <img
                        src="https://via.placeholder.com/500x500"
                        className="img-fluid circle"
                        alt="John Cenna"
                      />
                    </figure>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0 fs-md ft-medium">John Cenna</h4>
                    <span className="fs-sm theme-cl">CEO of Plike</span>
                  </div>
                  <div className="sng_rev_caption text-center">
                    <div className="rev_desc mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua velit esse cillum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single review */}
              <div className="single-list">
                <div className="single_review">
                  <div className="sng_rev_thumb">
                    <figure>
                      <img
                        src="https://via.placeholder.com/500x500"
                        className="img-fluid circle"
                        alt="Madhu Sharma"
                      />
                    </figure>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0 fs-md ft-medium">Madhu Sharma</h4>
                    <span className="fs-sm theme-cl">Team Manager</span>
                  </div>
                  <div className="sng_rev_caption text-center">
                    <div className="rev_desc mb-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut laboree voluptate
                        velit esse cillum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
