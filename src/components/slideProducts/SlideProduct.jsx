import React from "react";
import Product from "./product";
import "./slideProduct.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

function SlideProduct({ title, data = [] }) {
  return (
    <div className="Slide_product slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* الحماية الكاملة من الـ undefined و null */}
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                {" "}
                {/* أحسن نستخدم item.id لو موجود */}
                <Product item={item} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div
                style={{ padding: "60px", textAlign: "center", color: "#999" }}
              >
                جاري تحميل المنتجات...
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
