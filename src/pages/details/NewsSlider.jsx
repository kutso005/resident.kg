import React, { Component } from "react";
import Slider from "react-slick";

export default class NewsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      modal: false,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="slider_gallery_detail" style={{ position: "relative" }}>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {data?.slider &&
            Array.isArray(data?.slider) &&
            data?.slider.map((el) => (
              <div key={el.id} className="img_slider">
                <img src={el.image} alt={el.alt} title={el.img_title} />
              </div>
            ))}
        </Slider>
        {data?.slider?.length > 2 ? (
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={7}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {data?.slider &&
              Array.isArray(data?.slider) &&
              data?.slider.map((el) => (
                <div key={el.image} className="slider_img">
                  <img src={el.image} alt={el.alt} title={el.img_title} />
                </div>
              ))}
          </Slider>
        ) : (
          ""
        )}
      </div>
    );
  }
}

// import React from "react";
// import Slider from "react-slick";

// const NewsSlider = ({ data }) => {
//   const dataSlider = data?.slider?.map((el) => el.image);
//   console.log(dataSlider);
//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           <img src={`${dataSlider}/abstract0${i + 1}.jpg`} />
//         </a>
//       );
//     },
//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src={dataSlider + "/abstract01.jpg"} />
//         </div>
//         <div>
//           <img src={dataSlider + "/abstract02.jpg"} />
//         </div>
//         <div>
//           <img src={dataSlider + "/abstract03.jpg"} />
//         </div>
//         <div>
//           <img src={dataSlider + "/abstract04.jpg"} />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default NewsSlider;
