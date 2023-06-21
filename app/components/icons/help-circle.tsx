import { SVGProps } from "react";

export const HelpCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_554_88303)">
        <path
          d="M7.57435 7.50033C7.77027 6.94338 8.15698 6.47375 8.66598 6.1746C9.17498 5.87546 9.77343 5.76611 10.3553 5.86592C10.9372 5.96573 11.465 6.26826 11.8452 6.71993C12.2255 7.1716 12.4336 7.74326 12.4327 8.33366C12.4327 10.0003 9.93268 10.8337 9.93268 10.8337M9.99935 14.167H10.0077M18.3327 10.0003C18.3327 14.6027 14.6017 18.3337 9.99935 18.3337C5.39698 18.3337 1.66602 14.6027 1.66602 10.0003C1.66602 5.39795 5.39698 1.66699 9.99935 1.66699C14.6017 1.66699 18.3327 5.39795 18.3327 10.0003Z"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_554_88303">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
