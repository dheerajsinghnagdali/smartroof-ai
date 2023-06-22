import { SVGProps } from "react";

export const Lock = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.4237 9.4476V7.3006C16.4237 4.7876 14.3857 2.74956 11.8727 2.74956C9.35973 2.7386 7.31373 4.7666 7.30273 7.2806V7.3006V9.4476"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.683 21.2495H8.042C5.948 21.2495 4.25 19.5525 4.25 17.4575V13.1685C4.25 11.0735 5.948 9.37646 8.042 9.37646H15.683C17.777 9.37646 19.475 11.0735 19.475 13.1685V17.4575C19.475 19.5525 17.777 21.2495 15.683 21.2495Z"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8633 14.2021V16.4231"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
