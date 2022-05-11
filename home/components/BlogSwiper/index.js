import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
export default function BlogSwiper() {
  const arr = [
    {
      id: 12,
      image:
        "https://static.ascot.ws/assets/Images/topics1.jpg",
    },
    {
      id: 29,
      image:
        "https://static.ascot.ws/assets/Images/topics2.jpg",
    },
    {
      id: 88,
      image:
        "https://static.ascot.ws/assets/Images/topics3.jpg",
    },
    {
      id: 666,
      image:
        "https://static.ascot.ws/assets/Images/topics2.jpg",
    },
    {
      id: 777,
      image:
        "https://static.ascot.ws/assets/Images/topics3.jpg",
    },
  ];

  const myLoader = ({ src, width, quality }) => {
    return `https://static.ascot.ws/assets/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <div className="">
      <div className="container">
        <Swiper
          slidesPerView={5}
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: -190,
            modifier:1,
            slideShadows: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          className="mySwiper"
        >
          {arr.map((item) => (
            <SwiperSlide key={item.id.toString()}>
              <div className="swiper">
                <div className="">
                  <img
                    src={item.image}
                    // width={503}
                    // height={336}
                    alt="blog article image"
                    // className=" w-full h-full "
                  />
                </div>

                <div className="relative">
                  <div className="">
                    <Link href="#">
                      <a className=" aSwip my-3 text-[#36A9E1] hover:text-[#2c85b1]">
                        {" "}
                        E-Commerce
                      </a>
                    </Link>
                  </div>
                  <div>
                    <p className="  text-[20px] font-semibold">
                      Ecommerce marketing and selling
                    </p>
                    <p className="  text-[16px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
