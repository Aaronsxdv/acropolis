import React, { FC } from "react";

const NotificationIcon: FC = () => {
  return (
    <div style={{ margin: "auto 16px", cursor: "pointer" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_82_24588"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_82_24588)">
          <path
            d="M15.95 22L11.7 17.75L13.1 16.35L15.95 19.2L21.6 13.55L23 14.95L15.95 22ZM12 11L20 6H4L12 11ZM12 13L4 8V18H9.15L11.15 20H4C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V10.35L20 12.35V8L12 13Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    </div>
  );
};

export default NotificationIcon;
