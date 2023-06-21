import { SVGProps } from "react";

export const Bag = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.4033 8.85107L13.96 12.4641C13.1205 13.1301 11.9394 13.1301 11.0999 12.4641L6.61914 8.85107"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4089 21C20.4502 21.0084 22.5 18.5095 22.5 15.4384V8.57001C22.5 5.49883 20.4502 3 17.4089 3H7.59114C4.54979 3 2.5 5.49883 2.5 8.57001V15.4384C2.5 18.5095 4.54979 21.0084 7.59114 21H17.4089Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
