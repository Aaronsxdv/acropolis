import React, { FC } from "react";

const PartIcon: FC<{ pageNumber: number; active: boolean }> = ({
  active,
  pageNumber,
}) => {
  return (
    <div style={{ margin: "auto 35px auto 35px" }}>
      {!active && pageNumber === 1 && (
        <svg
          width="95"
          height="95"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_33_21883)">
            <circle cx="45.5" cy="43.5" r="43.5" fill="#F7F2F9" />
          </g>
          <path
            d="M48.7979 25.2578V61H44.2812V30.8975L35.1748 34.2178V30.1406L48.0898 25.2578H48.7979Z"
            fill="#484848"
          />
          <defs>
            <filter
              id="filter0_d_33_21883"
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
                result="effect1_dropShadow_33_21883"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_33_21883"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
      {active && pageNumber === 1 && (
        <svg
          width="95"
          height="95"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_34_21884)">
            <circle cx="45.5" cy="43.5" r="43.5" fill="#6750A4" />
          </g>
          <path
            d="M50.5801 25.3799V61H43.5488V33.4854L35.1016 36.1709V30.6289L49.8232 25.3799H50.5801Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_34_21884"
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
                result="effect1_dropShadow_34_21884"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_34_21884"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
      {!active && pageNumber === 2 && (
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
      )}
      {active && pageNumber === 2 && (
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
      )}
      {!active && pageNumber === 3 && (
        <svg
          width="103"
          height="103"
          viewBox="0 0 103 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_30_21241)">
            <circle cx="49.5" cy="47.5" r="43.5" fill="#F7F2F9" />
          </g>
          <path
            d="M44.5459 45.0049H47.7686C49.3473 45.0049 50.6494 44.7445 51.6748 44.2236C52.7165 43.6865 53.4896 42.9622 53.9941 42.0508C54.515 41.123 54.7754 40.0814 54.7754 38.9258C54.7754 37.5586 54.5475 36.4111 54.0918 35.4834C53.6361 34.5557 52.9525 33.8558 52.041 33.3838C51.1296 32.9118 49.974 32.6758 48.5742 32.6758C47.3047 32.6758 46.1816 32.9281 45.2051 33.4326C44.2448 33.9209 43.488 34.6208 42.9346 35.5322C42.3975 36.4437 42.1289 37.5179 42.1289 38.7549H37.6123C37.6123 36.9482 38.068 35.3044 38.9795 33.8232C39.891 32.3421 41.1686 31.1621 42.8125 30.2832C44.4727 29.4043 46.3932 28.9648 48.5742 28.9648C50.7227 28.9648 52.6025 29.3473 54.2139 30.1123C55.8252 30.861 57.0785 31.984 57.9736 33.4814C58.8688 34.9626 59.3164 36.8099 59.3164 39.0234C59.3164 39.9186 59.1048 40.8789 58.6816 41.9043C58.2747 42.9134 57.6318 43.8574 56.7529 44.7363C55.8903 45.6152 54.7673 46.3395 53.3838 46.9092C52.0003 47.4626 50.3402 47.7393 48.4033 47.7393H44.5459V45.0049ZM44.5459 48.7158V46.0059H48.4033C50.6657 46.0059 52.5374 46.2744 54.0186 46.8115C55.4997 47.3486 56.6634 48.0648 57.5098 48.96C58.3724 49.8551 58.9746 50.8398 59.3164 51.9141C59.6745 52.972 59.8535 54.0299 59.8535 55.0879C59.8535 56.748 59.5687 58.221 58.999 59.5068C58.4456 60.7926 57.6562 61.8831 56.6309 62.7783C55.6217 63.6735 54.4336 64.349 53.0664 64.8047C51.6992 65.2604 50.21 65.4883 48.5986 65.4883C47.0524 65.4883 45.5957 65.2686 44.2285 64.8291C42.8776 64.3896 41.6813 63.7549 40.6396 62.9248C39.598 62.0785 38.7842 61.0449 38.1982 59.8242C37.6123 58.5872 37.3193 57.1794 37.3193 55.6006H41.8359C41.8359 56.8376 42.1045 57.9199 42.6416 58.8477C43.195 59.7754 43.9762 60.4997 44.9854 61.0205C46.0107 61.5251 47.2152 61.7773 48.5986 61.7773C49.9821 61.7773 51.1702 61.5413 52.1631 61.0693C53.1722 60.5811 53.9453 59.8486 54.4824 58.8721C55.0358 57.8955 55.3125 56.6667 55.3125 55.1855C55.3125 53.7044 55.0033 52.4919 54.3848 51.5479C53.7663 50.5876 52.8874 49.8796 51.748 49.4238C50.625 48.9518 49.2985 48.7158 47.7686 48.7158H44.5459Z"
            fill="#484848"
          />
          <defs>
            <filter
              id="filter0_d_30_21241"
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
                result="effect1_dropShadow_30_21241"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_21241"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
      {active && pageNumber === 3 && (
        <svg
          width="103"
          height="103"
          viewBox="0 0 103 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_30_21280)">
            <circle cx="49.5" cy="47.5" r="43.5" fill="#6750A4" />
          </g>
          <path
            d="M44.6436 44.1748H48.4033C49.6077 44.1748 50.6006 43.9714 51.3818 43.5645C52.1631 43.1413 52.7409 42.5553 53.1152 41.8066C53.5059 41.0417 53.7012 40.1546 53.7012 39.1455C53.7012 38.234 53.5221 37.4284 53.1641 36.7285C52.8223 36.0124 52.2933 35.459 51.5771 35.0684C50.861 34.6615 49.9577 34.458 48.8672 34.458C48.0046 34.458 47.207 34.6289 46.4746 34.9707C45.7422 35.3125 45.1562 35.7926 44.7168 36.4111C44.2773 37.0296 44.0576 37.7783 44.0576 38.6572H37.002C37.002 36.7041 37.5228 35.0033 38.5645 33.5547C39.6224 32.1061 41.0384 30.9749 42.8125 30.1611C44.5866 29.3473 46.5397 28.9404 48.6719 28.9404C51.0807 28.9404 53.1885 29.3311 54.9951 30.1123C56.8018 30.8773 58.2096 32.0085 59.2188 33.5059C60.2279 35.0033 60.7324 36.8587 60.7324 39.0723C60.7324 40.1953 60.472 41.2858 59.9512 42.3438C59.4303 43.3854 58.6816 44.3294 57.7051 45.1758C56.7448 46.0059 55.5729 46.6732 54.1895 47.1777C52.806 47.666 51.2516 47.9102 49.5264 47.9102H44.6436V44.1748ZM44.6436 49.5215V45.8838H49.5264C51.4632 45.8838 53.1641 46.1035 54.6289 46.543C56.0938 46.9824 57.3226 47.6172 58.3154 48.4473C59.3083 49.2611 60.057 50.2295 60.5615 51.3525C61.0661 52.4593 61.3184 53.6882 61.3184 55.0391C61.3184 56.6992 61.001 58.1803 60.3662 59.4824C59.7314 60.7682 58.8363 61.8587 57.6807 62.7539C56.5413 63.6491 55.2067 64.3327 53.6768 64.8047C52.1468 65.2604 50.4785 65.4883 48.6719 65.4883C47.1745 65.4883 45.7015 65.2848 44.2529 64.8779C42.8206 64.4548 41.5186 63.8281 40.3467 62.998C39.1911 62.1517 38.2633 61.0938 37.5635 59.8242C36.8799 58.5384 36.5381 57.0166 36.5381 55.2588H43.5938C43.5938 56.1702 43.8216 56.984 44.2773 57.7002C44.7331 58.4163 45.3597 58.9779 46.1572 59.3848C46.971 59.7917 47.8743 59.9951 48.8672 59.9951C49.9902 59.9951 50.9505 59.7917 51.748 59.3848C52.5618 58.9616 53.1803 58.3757 53.6035 57.627C54.043 56.862 54.2627 55.9749 54.2627 54.9658C54.2627 53.6637 54.0267 52.6221 53.5547 51.8408C53.0827 51.0433 52.4072 50.4574 51.5283 50.083C50.6494 49.7087 49.6077 49.5215 48.4033 49.5215H44.6436Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_30_21280"
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
                result="effect1_dropShadow_30_21280"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_21280"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
      {!active && pageNumber === 4 && (
        <svg
          width="103"
          height="103"
          viewBox="0 0 103 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_30_21247)">
            <circle cx="49.5" cy="47.5" r="43.5" fill="#F7F2F9" />
          </g>
          <path
            d="M61.9775 53.0371V56.748H36.2939V54.0869L52.2119 29.4531H55.8984L51.9434 36.582L41.4209 53.0371H61.9775ZM57.0215 29.4531V65H52.5049V29.4531H57.0215Z"
            fill="#484848"
          />
          <defs>
            <filter
              id="filter0_d_30_21247"
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
                result="effect1_dropShadow_30_21247"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_21247"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
      {active && pageNumber === 4 && (
        <svg
          width="103"
          height="103"
          viewBox="0 0 103 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_30_21286)">
            <circle cx="49.5" cy="47.5" r="43.5" fill="#6750A4" />
          </g>
          <path
            d="M62.3438 51.7188V57.2363H36.7334L36.3916 52.9639L51.2109 29.4531H56.8018L50.7471 39.585L43.374 51.7188H62.3438ZM58.3154 29.4531V65H51.2842V29.4531H58.3154Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_30_21286"
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
                result="effect1_dropShadow_30_21286"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_21286"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default PartIcon;
