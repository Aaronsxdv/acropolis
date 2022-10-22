import React, { FC, useState } from "react";
import styled from "styled-components";

type Props = {
  active: boolean;
  pageNumber: number;
};

const part1 = (
  <svg
    width="95"
    height="95"
    viewBox="0 0 95 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_30_21238)">
      <circle cx="45.5" cy="43.5" r="43.5" fill="#F7F2F9" />
    </g>
    <defs>
      <filter
        id="filter0_d_30_21238"
        x="0"
        y="0"
        width="95"
        height="95"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_30_21238"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_30_21238"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const part1active = (
  <svg
    width="95"
    height="95"
    viewBox="0 0 95 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_30_21278)">
      <circle cx="45.5" cy="43.5" r="43.5" fill="#6750A4" />
    </g>
    <defs>
      <filter
        id="filter0_d_30_21278"
        x="0"
        y="0"
        width="95"
        height="95"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_30_21278"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_30_21278"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const part2 = (
  <svg
    width="103"
    height="103"
    viewBox="0 0 103 103"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_30_21244)">
      <circle cx="49.5" cy="47.5" r="43.5" fill="#F7F2F9" />
    </g>
    <path
      d="M61.2451 61.2891V65H37.9785V61.7529L49.624 48.7891C51.0563 47.194 52.1631 45.8431 52.9443 44.7363C53.7419 43.6133 54.2952 42.6123 54.6045 41.7334C54.93 40.8382 55.0928 39.9268 55.0928 38.999C55.0928 37.8271 54.8486 36.7692 54.3604 35.8252C53.8883 34.8649 53.1885 34.0999 52.2607 33.5303C51.333 32.9606 50.21 32.6758 48.8916 32.6758C47.3128 32.6758 45.9945 32.985 44.9365 33.6035C43.8949 34.2057 43.1136 35.0521 42.5928 36.1426C42.0719 37.2331 41.8115 38.4863 41.8115 39.9023H37.2949C37.2949 37.9004 37.7344 36.0693 38.6133 34.4092C39.4922 32.749 40.7943 31.4307 42.5195 30.4541C44.2448 29.4613 46.3688 28.9648 48.8916 28.9648C51.1377 28.9648 53.0583 29.3636 54.6533 30.1611C56.2484 30.9424 57.4691 32.0492 58.3154 33.4814C59.1781 34.8975 59.6094 36.5576 59.6094 38.4619C59.6094 39.5036 59.4303 40.5615 59.0723 41.6357C58.7305 42.6937 58.2503 43.7516 57.6318 44.8096C57.0296 45.8675 56.3216 46.9092 55.5078 47.9346C54.7103 48.96 53.8558 49.9691 52.9443 50.9619L43.4229 61.2891H61.2451Z"
      fill="#484848"
    />
    <defs>
      <filter
        id="filter0_d_30_21244"
        x="0"
        y="0"
        width="103"
        height="103"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_30_21244"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_30_21244"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const part2active = (
  <svg
    width="103"
    height="103"
    viewBox="0 0 103 103"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_30_21283)">
      <circle cx="49.5" cy="47.5" r="43.5" fill="#6750A4" />
    </g>
    <path
      d="M61.7578 59.5068V65H37.4414V60.3125L48.9404 47.9834C50.096 46.6976 51.0075 45.5664 51.6748 44.5898C52.3421 43.597 52.8223 42.71 53.1152 41.9287C53.4245 41.1312 53.5791 40.3743 53.5791 39.6582C53.5791 38.584 53.4001 37.6644 53.042 36.8994C52.6839 36.1182 52.1549 35.516 51.4551 35.0928C50.7715 34.6696 49.9251 34.458 48.916 34.458C47.8418 34.458 46.9141 34.7184 46.1328 35.2393C45.3678 35.7601 44.7819 36.4844 44.375 37.4121C43.9844 38.3398 43.7891 39.3896 43.7891 40.5615H36.7334C36.7334 38.4456 37.238 36.5088 38.2471 34.751C39.2562 32.9769 40.6803 31.569 42.5195 30.5273C44.3587 29.4694 46.5397 28.9404 49.0625 28.9404C51.5527 28.9404 53.6523 29.3473 55.3613 30.1611C57.0866 30.9587 58.3887 32.1143 59.2676 33.6279C60.1628 35.1253 60.6104 36.9157 60.6104 38.999C60.6104 40.1709 60.4232 41.3184 60.0488 42.4414C59.6745 43.5482 59.1374 44.6549 58.4375 45.7617C57.7539 46.8522 56.9238 47.959 55.9473 49.082C54.9707 50.2051 53.8883 51.3688 52.7002 52.5732L46.5234 59.5068H61.7578Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_30_21283"
        x="0"
        y="0"
        width="103"
        height="103"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0 0.379167 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_30_21283"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_30_21283"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const ProgressPart: FC<Props> = () => {
  return (
    <>
      {part1}
      {part2}
    </>
  );
};

export default ProgressPart;
