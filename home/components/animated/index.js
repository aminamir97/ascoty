import React from "react";
import classes from "./style/animated.module.css";
import { useState, useEffect, useRef } from "react";
import BTN from "../../components/button";
import CustomBtnComponent from "../../assets/buttonCustom";

function Animated({
  WhatDiffRef,
  contentScrollRef,
  overlayZoom,
  textRef,
  windowWidth,
}) {
  const svgRef = useRef(null);

  return (
    <div className={classes.overflow} ref={WhatDiffRef}>
      <div className={classes.container} ref={contentScrollRef}>
        <div className={classes.text} ref={textRef}>
          <h2>Commerce Arabia... Personalized e-commerce</h2>
          <p>
            Commerce Arabia is an e-commerce platform built from the ground up
            to support the MENA markets and Arabic language functionalities and
            tools. We bring you the best UX/UI practices to make sure you leave
            a lasting impression on your targeted audience. Our solution
            simplifies the selling and buying processes to increase your growth,
            conversions, and long-term customer loyalty by: -Gaining the agility
            to build what your customers need with speed -Getting closer to your
            customers and driving more revenue -Delivering personalized
            experiences that matter and drive the next click -Streamlining your
            business and keeping up with shifting market demands -Reacting to
            changing customer needs by effectively meeting incoming demands with
            your supply chain -Getting a complete understanding of your
            customers' interactions and preferences Commerce Arabia provides you
            with an efficient combination of, Flexibility, Stability, Agility,
            Scalability, and much more. Our Flexible APIs allow you to build
            your own customized app and promote your business.
          </p>

          <BTN text="View Our Products" color="#FFFFFF" />
          {/* <CustomBtnComponent txt="View Our Products" txtColor="#FFFFFF" /> */}
        </div>

        <div className={classes.imgContainer}></div>
      </div>

      {windowWidth ? (
        <svg
          className={classes.logoBanner}
          ref={overlayZoom}
          width="375"
          height="600"
          viewBox="0 0 375 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M375 0H0V600H375V0ZM174.082 256.114C142.194 288.676 133.687 332.744 132.203 342.134L132.177 342.107C132.149 342.363 132.136 342.605 132.136 342.861C132.136 346.256 134.9 349.018 138.298 349.018C139.363 349.018 140.348 348.749 141.224 348.277H141.21C148.814 344.114 162.055 334.765 176.212 315.203C180.54 309.235 188.887 307.888 194.873 312.212C200.846 316.537 202.194 324.876 197.866 330.858C177.533 358.974 157.74 370.452 147.75 374.804C142.923 376.906 138.096 377.956 133.363 377.956C132.554 377.956 131.745 377.943 130.937 377.862C123.79 377.121 116.995 373.672 112.02 367.933C103.336 357.896 104.954 343.953 105.439 340.612C106.033 335.775 113.651 279.623 154.977 237.442C160.733 231.554 167.07 227.324 173.812 224.832C185.583 220.48 197.395 221.154 207.951 226.785C213.317 229.641 218.091 233.818 222.162 239.233C230.886 250.833 252.904 285.699 268.72 358.503C270.283 365.71 265.713 372.823 258.499 374.386C251.286 375.936 244.167 371.382 242.603 364.174C227.906 296.517 208.464 265.477 200.792 255.279C199.093 253.015 197.272 251.358 195.385 250.348C191.65 248.354 187.619 248.206 183.075 249.876C180.082 250.981 177.048 253.083 174.082 256.114Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          className={classes.logoBanner}
          ref={overlayZoom}
          width="2105"
          height="1080"
          viewBox="0 0 2105 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2104.54 0H0V1080H2104.54V0ZM1016.9 421.697C931.042 509.377 908.133 628.038 904.139 653.322L904.066 653.25C903.994 653.939 903.957 654.592 903.957 655.281C903.957 664.423 911.4 671.86 920.549 671.86C923.417 671.86 926.068 671.134 928.428 669.865H928.391C948.868 658.655 984.52 633.479 1022.64 580.806C1034.3 564.735 1056.77 561.107 1072.89 572.752C1088.97 584.397 1092.6 606.852 1080.95 622.959C1026.2 698.668 972.902 729.576 946 741.293C933.002 746.952 920.005 749.782 907.261 749.782C905.083 749.782 902.904 749.745 900.726 749.528C881.484 747.533 863.186 738.246 849.789 722.792C826.408 695.766 830.765 658.22 832.072 649.223C833.669 636.2 854.182 484.999 965.459 371.417C980.962 355.565 998.026 344.174 1016.18 337.463C1047.87 325.745 1079.68 327.559 1108.11 342.723C1122.55 350.413 1135.41 361.659 1146.37 376.242C1169.86 407.476 1229.15 501.36 1271.74 697.398C1275.95 716.806 1263.64 735.96 1244.22 740.168C1224.79 744.34 1205.62 732.079 1201.41 712.671C1161.84 530.49 1109.48 446.909 1088.83 419.448C1084.25 413.353 1079.35 408.891 1074.27 406.17C1064.21 400.801 1053.36 400.402 1041.12 404.901C1033.06 407.875 1024.89 413.535 1016.9 421.697Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
}

export default Animated;
