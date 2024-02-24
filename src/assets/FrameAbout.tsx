import React, { FC } from "react";

interface FrameAboutProps {
    className? : string
}

const FrameAbout: FC<FrameAboutProps> = ({className}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 137 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_15_5)">
        <path
          d="M84.1148 67.3451H136.194C136.637 67.3451 137 67.7026 137 68.1395V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2189V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06674e-05 134.639 0.00401052 134.198C0.439379 97.2877 30.9354 67.504 68.498 67.5H0.806238C0.362807 67.5 0 67.1425 0 66.7055V0.802389C0 0.361472 0.366822 4.42378e-08 0.814284 0.00397227C37.9778 0.429 68.0263 30.0181 68.498 66.6261V0.794445C68.498 0.3575 68.8608 0 69.3042 0H136.186C136.633 0 137 0.361472 136.996 0.802389C136.621 32.4967 114.079 58.9398 83.9334 65.78C83.0022 65.9905 83.1594 67.3451 84.1189 67.3451H84.1148Z"
          fill="url(#paint0_linear_15_5)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_15_5"
          x1="-76.6791"
          y1="-15.6159"
          x2="165.682"
          y2="81.008"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.427083" stop-color="#FF8709" />
          <stop offset="0.791667" stop-color="#F7BDF8" />
        </linearGradient>
        <clipPath id="clip0_15_5">
          <rect width="137" height="135" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FrameAbout;
