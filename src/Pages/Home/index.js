import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // import required modules
import { Pagination, Navigation } from "swiper/modules";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlSizeFullscreen } from "react-icons/sl";

import Rating from "@mui/material/Rating";
import ProductItem from "../../Components/ProductItem";
const Home = () => {
  return (
    <>
      <HomeBanner />
      <section className="homeProduct">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                  className="cursor"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className=" info">
                  <h3 className="mb-0 hd">Best Sellers</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ms-auto">View All</Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

//const [value, setValue] = React.useState<number | null>(2);
//<Rating
//name="simple-controlled"
//value={value}
//onChange={(event, newValue) => {
//  setValue(newValue);
//}}
///>
