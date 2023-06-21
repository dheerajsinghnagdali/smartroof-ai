import { SVGProps } from "react";

export const Windows = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.5 11H1.5V1H11.5V11Z" fill="white" />
      <path d="M23.5 11H13.5V1H23.4992V11H23.5Z" fill="white" />
      <path d="M11.5 23H1.5V13H11.5V23Z" fill="white" />
      <path d="M23.5 23H13.5V13H23.4992V23H23.5Z" fill="white" />
    </svg>
  );
};
