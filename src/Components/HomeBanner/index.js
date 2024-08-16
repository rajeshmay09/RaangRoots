import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="HomeBanner">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/ss24_strapi_web_a966c2c903/ss24_strapi_web_a966c2c903.jpg"
            className="w-100"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/static_web_Adidas_puma_and_more_fc269fe01d/static_web_Adidas_puma_and_more_fc269fe01d.png"
            className="w-100"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/ss24_strapi_web_a966c2c903/ss24_strapi_web_a966c2c903.jpg"
            className="w-100"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/ss24_strapi_web_a966c2c903/ss24_strapi_web_a966c2c903.jpg"
            className="w-100"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
