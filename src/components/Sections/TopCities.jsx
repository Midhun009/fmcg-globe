import React from "react";

const TopCities = () => {
  const cities = [
    {
      name: "New York",
      listings: 22,
      imgSrc: "https://via.placeholder.com/500x700",
    },
    {
      name: "San Diego",
      listings: 28,
      imgSrc: "https://via.placeholder.com/500x700",
    },
    {
      name: "Philadelphia",
      listings: 19,
      imgSrc: "https://via.placeholder.com/500x700",
    },
    {
      name: "San Francisco",
      listings: 35,
      imgSrc: "https://via.placeholder.com/500x700",
    },
    {
      name: "San Antonio",
      listings: 18,
      imgSrc: "https://via.placeholder.com/500x700",
    },
    {
      name: "Los Angeles",
      listings: 30,
      imgSrc: "https://via.placeholder.com/500x700",
    },
    {
      name: "Kansas City",
      listings: 25,
      imgSrc: "https://via.placeholder.com/500x700",
    },
    {
      name: "New Orleans",
      listings: 22,
      imgSrc: "https://via.placeholder.com/500x700",
    },
  ];

  return (
    <section className="gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Top Cities</h6>
              <h2 className="ft-bold">
                Explore By <span className="theme-cl">Locations</span>
              </h2>
            </div>
          </div>
        </div>

        {/* row */}
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="newlocationslider2">
              {cities.map((city, index) => (
                <div className="single-list" key={index}>
                  <div className="locationWrapps">
                    <div className="locationBody">
                      <img
                        src={city.imgSrc}
                        className="img-fluid"
                        alt={city.name}
                      />
                    </div>
                    <div className="capsText">
                      <h5 className="locationTitle">{city.name}</h5>
                      <span className="totalList">
                        {city.listings} Listings
                      </span>
                    </div>
                    <a href="#" className="locationLink"></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* /row */}
      </div>
    </section>
  );
};

export default TopCities;
