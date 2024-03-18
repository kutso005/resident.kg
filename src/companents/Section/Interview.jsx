import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
const Interview = ({ residentList, searchInput }) => {
  const lang = localStorage.getItem("lang") || "ru";
  const settings = {
    dots: true,
    fade: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };
  return (
    <div className="interview">
      <Slider {...settings}>
        {residentList?.Interviews?.filter((el) => {
          return el.title.toLowerCase().includes(searchInput.toLowerCase());
        }).map((el) => (
          <NavLink className="a" key={el.slug} to={`/${lang}/news/${el.slug}`}>
            <div>
              <div className="grid_view" style={{ margin: "120px 0" }}>
                <div className="black_bg">
                  <div>
                    <button className="popular_text onrow">
                      {el.cat_title}
                    </button>
                    <h5
                      className="popular_title onrow"
                      style={{ fontSize: "24px" }}
                    >
                      {el.title}
                    </h5>
                    <p className="popular_project onrow">{el.created_at}</p>
                    <h6 className="view">читать статью</h6>
                  </div>
                </div>
                <img
                  style={{
                    width: "100%",
                    height: "540px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={el.img}
                  alt="alt"
                />
              </div>
            </div>
          </NavLink>
        ))}
      </Slider>
    </div>
  );
};

export default Interview;
