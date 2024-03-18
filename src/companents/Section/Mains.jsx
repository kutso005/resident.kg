import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { get } from "../../api/api";
const Mains = ({ searchInput }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
  };
  const [leftResidents, setLeftResidents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const residents = await get.getSlider();
      setLeftResidents(residents);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="big_slider">
        <Slider {...settings}>
          {leftResidents
            ?.filter((el) => {
              return el.title.toLowerCase().includes(searchInput.toLowerCase());
            })
            .map((el, indx) => (
              <div className="slider_img" key={indx}>
                <img src={el.img} />
                <div className="slider_box_shadow" />
                <div className="slider-test_text">
                  <h6 className="create" style={{ width: "60%" }}>
                    {el.title}
                    {/* <span className="create_span">Монолит - </span>
                создаем надежность и <br /> комфорт вместе! */}
                  </h6>
                  <p className="project mt-3 ">{el.description}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mains;
