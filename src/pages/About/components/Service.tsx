export default function Service() {
  return (
    <div className="px-3 py-20 font-poppins lg:px-30">
      <div className="bg-white rounded-[2px] flex flex-col items-center gap-10 py-10 drop-shadow-xl md:grid md:grid-cols-3 md:place-self-center w-full">
        <div className="flex flex-col justify-center items-center gap-1">
          <span>
            <svg
              width="91"
              height="87"
              viewBox="0 0 91 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.2298 14.7457H43.6085C44.0673 14.7457 44.5073 14.5635 44.8317 14.2391C45.1561 13.9147 45.3383 13.4747 45.3383 13.0159C45.3383 12.5572 45.1561 12.1172 44.8317 11.7928C44.5073 11.4684 44.0673 11.2861 43.6085 11.2861H33.2298C32.771 11.2861 32.331 11.4684 32.0066 11.7928C31.6822 12.1172 31.5 12.5572 31.5 13.0159C31.5 13.4747 31.6822 13.9147 32.0066 14.2391C32.331 14.5635 32.771 14.7457 33.2298 14.7457Z"
                fill="#363E40"
              ></path>
              <path
                d="M90.3719 51.291C90.3701 49.7427 90.0088 48.216 89.3164 46.8312C88.624 45.4464 87.6194 44.2413 86.3819 43.3109C88.5145 40.7792 89.7115 37.591 89.7723 34.2814C89.7723 22.4265 74.8615 0.319824 46.343 0.319824C17.4209 0.319824 2.91373 22.0921 2.91373 34.2814C2.94744 37.1183 3.84445 39.8778 5.48535 42.1923C3.92385 43.3742 2.6835 44.9286 1.87769 46.7134C1.07187 48.4983 0.726306 50.4567 0.872572 52.4096C1.08726 54.9356 2.12429 57.3216 3.82475 59.2019C3.23343 60.7083 2.92838 62.3117 2.92526 63.93C2.92526 76.765 21.9991 86.8209 46.3545 86.8209C70.71 86.8209 89.7838 76.765 89.7838 63.93C89.7446 61.6659 89.1337 59.4484 88.0079 57.4836C89.5119 55.769 90.3507 53.5717 90.3719 51.291ZM82.5533 57.4952C72.5781 62.7191 62.3147 65.3138 48.6724 65.9827C48.8685 65.5329 49.053 65.0716 49.2375 64.6219C50.7482 60.8856 52.1782 57.3452 56.9062 56.5495C68.565 55.0735 78.2288 51.1757 84.0063 45.8825C84.9027 46.4799 85.6379 47.2892 86.1468 48.2386C86.6557 49.188 86.9226 50.2484 86.9239 51.3256C86.9123 54.8313 83.8679 56.8148 82.5648 57.4952H82.5533ZM46.3545 3.79094C72.2091 3.79094 86.3242 23.9718 86.3242 34.2929C86.3242 44.8216 68.023 53.7242 46.3545 53.7242C24.686 53.7242 6.3733 44.8216 6.3733 34.2929C6.3733 23.3491 19.7388 3.79094 46.3545 3.79094ZM7.68795 44.8677C14.8262 52.2366 29.2873 57.1723 46.343 57.1723C47.3463 57.1723 48.338 57.1723 49.3182 57.1723C47.9145 59.0636 46.8027 61.1549 46.0201 63.3764C45.628 64.3567 45.2475 65.2677 44.8669 66.098C42.9872 69.8459 41.7764 72.0023 38.6627 72.5905C36.6792 72.971 34.0499 72.9249 31.19 69.1309C30.7726 68.4636 30.4138 67.7613 30.1176 67.0321C28.457 63.3534 25.3779 56.4919 16.1639 58.9597C15.7949 59.052 15.4374 59.1673 15.0107 59.2826C14.4104 59.5009 13.7877 59.6517 13.1541 59.7324C11.3748 59.8767 9.59705 59.4365 8.09077 58.4785C6.58449 57.5205 5.432 56.0971 4.80836 54.4245C4.18471 52.7519 4.12397 50.9214 4.63537 49.2111C5.14677 47.5008 6.20236 46.0041 7.64182 44.9484L7.68795 44.8677ZM46.3545 83.3613C24.686 83.3613 6.38484 74.4702 6.38484 63.93C6.39595 63.1507 6.50443 62.3759 6.70773 61.6236C8.75806 62.816 11.1246 63.3513 13.4885 63.1573C14.3854 63.061 15.2678 62.8597 16.1178 62.5577L17.0403 62.2809C22.9332 60.7356 24.9513 64.0222 26.9578 68.4851C27.3451 69.4518 27.8321 70.3755 28.4108 71.2412C30.9133 74.574 33.7847 76.2115 37.1405 76.2115C37.8643 76.2101 38.5863 76.1406 39.297 76.0039C43.3793 75.2313 45.3743 72.5443 46.9657 69.5806C62.0841 69.0271 73.2701 66.3402 84.1677 60.6203C84.5944 60.4012 84.998 60.1475 85.3786 59.8938C85.9867 61.1738 86.3093 62.5706 86.3242 63.9876C86.3242 74.4702 68.023 83.3613 46.3545 83.3613Z"
                fill="#363E40"
              ></path>
              <path
                d="M52.3529 24.9631C52.8115 24.9627 53.2512 24.7802 53.5753 24.4557L61.4862 16.4872C61.7917 16.1592 61.9581 15.7255 61.9502 15.2774C61.9423 14.8293 61.7607 14.4017 61.4438 14.0848C61.1269 13.7678 60.6993 13.5863 60.2512 13.5784C59.803 13.5705 59.3693 13.7368 59.0414 14.0424L51.1074 21.9994C50.8658 22.2413 50.7013 22.5494 50.6347 22.8848C50.5681 23.2201 50.6024 23.5677 50.7332 23.8836C50.8639 24.1994 51.0854 24.4695 51.3696 24.6596C51.6538 24.8497 51.9879 24.9513 52.3298 24.9516L52.3529 24.9631Z"
                fill="#363E40"
              ></path>
              <path
                d="M36.9715 23.5221C36.6436 23.2166 36.2099 23.0502 35.7618 23.0581C35.3136 23.066 34.8861 23.2476 34.5691 23.5645C34.2522 23.8814 34.0707 24.309 34.0628 24.7571C34.0549 25.2053 34.2212 25.639 34.5268 25.9669L42.4953 33.9355C42.8232 34.241 43.2569 34.4074 43.7051 34.3994C44.1532 34.3915 44.5808 34.21 44.8977 33.8931C45.2146 33.5761 45.3962 33.1486 45.4041 32.7004C45.412 32.2523 45.2456 31.8186 44.9401 31.4907L36.9715 23.5221Z"
                fill="#363E40"
              ></path>
              <path
                d="M69.1992 27.5854C68.3702 27.5854 67.6992 28.2564 67.6992 29.0854V30.9014C67.6992 31.7304 68.3702 32.4014 69.1992 32.4014C70.0282 32.4014 70.6992 31.7304 70.6992 30.9014V29.0854C70.6992 28.2574 70.0272 27.5854 69.1992 27.5854Z"
                fill="#363E40"
              ></path>
            </svg>
          </span>
          <div className="font-semibold text-[19px]">Unique Taste</div>
          <p className="font-light text-[13px] text-center px-20 text-red-600 md:px-5 lg:px-25">
            A burger is more than just a, it is a wish fulfilled.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <span>
            <svg
              width="69"
              height="93"
              viewBox="0 0 69 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.14453 34.6596L17.0329 13.8159L31.9213 34.6596H2.14453Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M17.0312 13.8159H52.7633L67.6517 34.6596H31.9196"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M52.7633 1.90527H17.0312V13.816H52.7633V1.90527Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M31.9213 34.6597H2.14453V91.2355H31.9213V34.6597Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M67.654 34.6597H31.9219V91.2355H67.654V34.6597Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M67.6533 34.6597H2.14453V49.548H67.6533V34.6597Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M67.6533 76.3469H2.14453V91.2353H67.6533V76.3469Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <div className="font-semibold text-[19px]">Certified Farm</div>
          <p className="font-light text-[13px] text-center px-20 text-red-600 md:px-5  lg:px-25">
            The last time you had a burger was too long ago.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <span>
            <svg
              width="93"
              height="84"
              viewBox="0 0 93 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9688 78.6434L28.0732 82.7131L34.1777 78.6434V72.5389L28.0732 68.4692L21.9688 72.5389V78.6434Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              ></path>
              <path
                d="M66.7383 78.6434L72.8428 82.7131L78.9473 78.6434V72.5389L72.8428 68.4692L66.7383 72.5389V78.6434Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.69141 44.0512V64.3995H58.597V23.7029H42.3184"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M87.0814 72.5389H91.151V64.3996V56.2603L76.9072 31.8423H58.5938"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M81.6617 39.9814H66.7383V52.1904H88.5679"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M91.151 64.3994H58.5938"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M58.599 72.5388H42.3203"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13.8307 72.5388H5.69141"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M34.1784 28.79L17.8997 37.9468L1.62109 28.79V10.4766L17.8997 1.31982L34.1784 10.4766V28.79Z"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M17.9023 11.4941V23.7031H26.0417"
                stroke="#363E40"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <div className="font-semibold text-[19px]">Home Delivery</div>
          <p className="font-light text-[13px] text-center px-20 text-red-600 md:px-5  lg:px-25">
            Why are you still reading this - go get a burger!
          </p>
        </div>
      </div>
    </div>
  );
}
