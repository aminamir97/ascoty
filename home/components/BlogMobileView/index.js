import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Link from "next/link";
import Image from "next/image";
import BTN from "../OneProject/button";
import classes from "./style/blogMobile.module.css";
import CustomBtnComponent from "../../assets/buttonCustom";
export default function BlogMobile() {
  const arr = [10000, 20000, 30000, 40000, 50070];
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="max-w-[100rem] m-auto">
      <div
        style={{
          padding: `0 ${chevronWidth}px`,
          backgroundColor: "#f8f6f6",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={20}
          leftChevron={
            <button className="  border  border-[#6D2E88]  p-2    rounded-full  xsm:ml-[10rem] xsm:mt-[37rem] sm:ml-[25rem] sm:mt-[36rem] ">
              <svg
                className="  "
                width="15"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13909 14.0225C7.98587 14.0225 7.77371 13.938 7.59692 13.7811C5.41055 11.8619 3.21828 9.94871 1.03781 8.02349C0.542778 7.58895 0.548671 6.93112 1.0437 6.49658C3.24186 4.56533 5.44001 2.6401 7.63817 0.714878C8.0448 0.358803 8.62233 0.401049 8.96414 0.805407C9.31773 1.22183 9.27058 1.81328 8.84627 2.18746C7.24333 3.59366 5.64628 4.99382 4.04333 6.40002C3.76635 6.64746 3.48937 6.89491 3.2065 7.13028C3.08274 7.23288 3.08274 7.28116 3.2065 7.38979C4.49121 8.51837 5.77003 9.64092 7.05475 10.7695C7.64406 11.2885 8.23928 11.8015 8.82859 12.3266C9.15861 12.6223 9.24701 13.0206 9.09379 13.4069C8.94646 13.7811 8.61055 14.0164 8.13909 14.0225Z"
                  fill="#6D2E88"
                />
              </svg>
            </button>
          }
          rightChevron={
            <button className="border  border-[#6D2E88]  p-2  xsm:mr-[10rem] xsm:mt-[37rem] sm:mr-[25rem] sm:mt-[36rem]  rounded-full">
              <svg
                width="15"
                height="15"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.49218 0.349609C1.70765 0.349609 2.00599 0.468427 2.25461 0.689089C5.32919 3.38795 8.41207 6.07832 11.4784 8.78567C12.1745 9.39673 12.1662 10.3218 11.4701 10.9329C8.37892 13.6487 5.28776 16.3561 2.1966 19.0634C1.62478 19.5641 0.812621 19.5047 0.331958 18.9361C-0.16528 18.3505 -0.0989815 17.5188 0.497703 16.9926C2.75185 15.0151 4.9977 13.0461 7.25185 11.0687C7.64135 10.7207 8.03085 10.3727 8.42864 10.0417C8.60267 9.89746 8.60267 9.82957 8.42864 9.6768C6.62201 8.08973 4.82367 6.51116 3.01704 4.92409C2.18831 4.19421 1.35129 3.47282 0.522565 2.73445C0.058477 2.31859 -0.0658324 1.75845 0.149637 1.21528C0.356819 0.689089 0.829195 0.358096 1.49218 0.349609Z"
                  fill="#6D2E88"
                />
              </svg>
            </button>
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {arr.map((item) => (
            <div key={item.toString()}>
              <div className="">
                <Image
                  src="https://static.ascot.ws/assets/Images/blogMobilebg.jpg"
                  alt="blog article"
                  className=" w-full h-full "
                  width={400}
                  height={400}
                />
              </div>
              <div className="">
                <div className="">
                  <Link href="#">
                    <a className=" my-3 text-[#36A9E1] hover:text-[#2c85b1]">
                      {" "}
                      E-Commerce
                    </a>
                  </Link>
                </div>
                <div>
                  <p className=" text-[20px] font-semibold">
                    Ecommerce marketing and selling
                  </p>
                  <p className="text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ItemsCarousel>
      </div>
      <div className=" mt-24 mb-12 grid justify-center">
        <div className={classes.btn}>
          {/* <BTN text="View Our Blog" color="#6D2E88" link="/blog" /> */}
          <CustomBtnComponent txt="View Our Blog" txtColor="#6D2E88" link="/blog"  />
        </div>
      </div>
    </div>
  );
}
