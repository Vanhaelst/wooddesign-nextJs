import React from "react";
import Text from "@/components/Text";

const Success = () => (
  <div className="flex h-full items-center justify-center">
    <div className="subscribe-container">
      <div className="block text-center">
        <svg
          className="mx-auto my-[2em] block h-[100px] w-[100px] animate-moveupwards rounded-full stroke-primary shadow-[inset_0_0_0_#7ac142] transition-all duration-1000 ease-[ease] [stroke-miterlimit:10] [stroke-width:4]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          width="70"
        >
          <circle
            className="animate-stroke-circle fill-none stroke-primary [stroke-dasharray:166] [stroke-dashoffset:166] [stroke-miterlimit:10] [stroke-width:3]"
            cx="26"
            cy="26"
            r="23"
            fill="none"
          />
          <path
            className="origin-center animate-stroke-check [stroke-dasharray:48] [stroke-dashoffset:48] [stroke-width:3]"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <div className="w-full animate-reveal text-center opacity-0">
          <Text fontFamily="secondary">
            Uw contactverzoek werd succesvol verzonden. <br />
            Wij nemen zo snel mogelijk met u contact op.
          </Text>
        </div>
      </div>
    </div>
  </div>
);

export default Success;
