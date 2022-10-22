import React, { FC } from "react";

const ProgressLineConnector: FC = ({}) => {
  return (
    <div style={{ margin: "auto" }}>
      <svg
        width="75"
        height="10"
        viewBox="0 0 75 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="5"
          y1="5"
          x2="70"
          y2="5"
          stroke="#D9D9D9"
          stroke-width="10"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default ProgressLineConnector;
