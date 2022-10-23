import React, { FC } from "react";
type Props = {
  metric: string;
};
const MetricIcon: FC<Props> = (props) => {
  return (
    <div style={{ margin: "auto 16px", cursor: "pointer" }}>
      {props.metric === "PRECIPITATION" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_46_25028"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect y="0.466675" width="24" height="23.2" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_46_25028)">
            <path
              d="M13.95 21.6367C13.7 21.7656 13.446 21.7856 13.188 21.6966C12.9293 21.6083 12.7333 21.4434 12.6 21.2017L11.1 18.3017C10.9667 18.06 10.946 17.8145 11.038 17.5651C11.1293 17.315 11.3 17.1256 11.55 16.9967C11.8 16.8678 12.054 16.8478 12.312 16.9368C12.5707 17.025 12.7667 17.19 12.9 17.4317L14.4 20.3317C14.5333 20.5734 14.5543 20.8189 14.463 21.0683C14.371 21.3183 14.2 21.5078 13.95 21.6367ZM19.95 21.6367C19.7 21.7656 19.446 21.7856 19.188 21.6966C18.9293 21.6083 18.7333 21.4434 18.6 21.2017L17.1 18.3017C16.9667 18.06 16.946 17.8145 17.038 17.5651C17.1293 17.315 17.3 17.1256 17.55 16.9967C17.8 16.8678 18.054 16.8478 18.312 16.9368C18.5707 17.025 18.7667 17.19 18.9 17.4317L20.4 20.3317C20.5333 20.5734 20.5543 20.8189 20.463 21.0683C20.371 21.3183 20.2 21.5078 19.95 21.6367ZM7.95 21.6367C7.7 21.7656 7.446 21.7856 7.188 21.6966C6.92933 21.6083 6.73333 21.4434 6.6 21.2017L5.1 18.3017C4.96667 18.06 4.946 17.8145 5.038 17.5651C5.12933 17.315 5.3 17.1256 5.55 16.9967C5.8 16.8678 6.054 16.8478 6.312 16.9368C6.57067 17.025 6.76667 17.19 6.9 17.4317L8.4 20.3317C8.53333 20.5734 8.55433 20.8189 8.463 21.0683C8.371 21.3183 8.2 21.5078 7.95 21.6367ZM7.5 15.9334C5.98333 15.9334 4.68767 15.4136 3.613 14.3741C2.53767 13.3353 2 12.0828 2 10.6167C2 9.27947 2.45833 8.11141 3.375 7.11252C4.29167 6.11364 5.425 5.52558 6.775 5.34836C7.30833 4.43002 8.03767 3.70889 8.963 3.18496C9.88767 2.66167 10.9 2.40002 12 2.40002C13.5 2.40002 14.804 2.86338 15.912 3.79009C17.0207 4.71616 17.6917 5.87197 17.925 7.25752C19.075 7.35419 20.0417 7.81336 20.825 8.63502C21.6083 9.45669 22 10.4395 22 11.5834C22 12.7917 21.5627 13.8189 20.688 14.6651C19.8127 15.5106 18.75 15.9334 17.5 15.9334H7.5ZM7.5 14H17.5C18.2 14 18.7917 13.7664 19.275 13.2992C19.7583 12.832 20 12.26 20 11.5834C20 10.9067 19.7583 10.3347 19.275 9.86752C18.7917 9.4003 18.2 9.16669 17.5 9.16669H16V8.20002C16 7.13669 15.6083 6.22641 14.825 5.46919C14.0417 4.71197 13.1 4.33336 12 4.33336C11.2 4.33336 10.4707 4.5428 9.812 4.96169C9.154 5.38058 8.65833 5.94447 8.325 6.65336L8.075 7.23336H7.45C6.5 7.26558 5.68767 7.60778 5.013 8.25996C4.33767 8.91278 4 9.69836 4 10.6167C4 11.5511 4.34167 12.3486 5.025 13.0092C5.70833 13.6697 6.53333 14 7.5 14Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      )}

      {props.metric === "TEMPERATURE" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_82_24569"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_82_24569)">
            <path
              d="M13 11V9H18V11H13ZM13 7V5H21V7H13ZM8 21C6.61667 21 5.43767 20.5127 4.463 19.538C3.48767 18.5627 3 17.3833 3 16C3 15.2 3.175 14.454 3.525 13.762C3.875 13.0707 4.36667 12.4833 5 12V6C5 5.16667 5.29167 4.45833 5.875 3.875C6.45833 3.29167 7.16667 3 8 3C8.83333 3 9.54167 3.29167 10.125 3.875C10.7083 4.45833 11 5.16667 11 6V12C11.6333 12.4833 12.125 13.0707 12.475 13.762C12.825 14.454 13 15.2 13 16C13 17.3833 12.5127 18.5627 11.538 19.538C10.5627 20.5127 9.38333 21 8 21ZM5 16H11C11 15.5167 10.896 15.0667 10.688 14.65C10.4793 14.2333 10.1833 13.8833 9.8 13.6L9 13V6C9 5.71667 8.90433 5.479 8.713 5.287C8.521 5.09567 8.28333 5 8 5C7.71667 5 7.479 5.09567 7.287 5.287C7.09567 5.479 7 5.71667 7 6V13L6.2 13.6C5.81667 13.8833 5.52067 14.2333 5.312 14.65C5.104 15.0667 5 15.5167 5 16Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      )}
      {props.metric === "WIND" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_82_24553"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_82_24553)">
            <path
              d="M11.5 20C10.6667 20 9.95833 19.7083 9.375 19.125C8.79167 18.5417 8.5 17.8333 8.5 17H10.5C10.5 17.2833 10.596 17.5207 10.788 17.712C10.9793 17.904 11.2167 18 11.5 18C11.7833 18 12.021 17.904 12.213 17.712C12.4043 17.5207 12.5 17.2833 12.5 17C12.5 16.7167 12.4043 16.4793 12.213 16.288C12.021 16.096 11.7833 16 11.5 16H2V14H11.5C12.3333 14 13.0417 14.2917 13.625 14.875C14.2083 15.4583 14.5 16.1667 14.5 17C14.5 17.8333 14.2083 18.5417 13.625 19.125C13.0417 19.7083 12.3333 20 11.5 20ZM2 10V8H15.5C15.9333 8 16.2917 7.85833 16.575 7.575C16.8583 7.29167 17 6.93333 17 6.5C17 6.06667 16.8583 5.70833 16.575 5.425C16.2917 5.14167 15.9333 5 15.5 5C15.0667 5 14.7083 5.14167 14.425 5.425C14.1417 5.70833 14 6.06667 14 6.5H12C12 5.51667 12.3373 4.68733 13.012 4.012C13.6873 3.33733 14.5167 3 15.5 3C16.4833 3 17.3127 3.33733 17.988 4.012C18.6627 4.68733 19 5.51667 19 6.5C19 7.48333 18.6627 8.31233 17.988 8.987C17.3127 9.66233 16.4833 10 15.5 10H2ZM18.5 18V16C18.9333 16 19.2917 15.8583 19.575 15.575C19.8583 15.2917 20 14.9333 20 14.5C20 14.0667 19.8583 13.7083 19.575 13.425C19.2917 13.1417 18.9333 13 18.5 13H2V11H18.5C19.4833 11 20.3127 11.3373 20.988 12.012C21.6627 12.6873 22 13.5167 22 14.5C22 15.4833 21.6627 16.3127 20.988 16.988C20.3127 17.6627 19.4833 18 18.5 18Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      )}
      {props.metric === "HUMIDITY" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_58_24042"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_58_24042)">
            <path
              d="M12 21.5C9.78333 21.5 7.896 20.7293 6.338 19.188C4.77933 17.646 4 15.7833 4 13.6C4 12.5 4.20433 11.479 4.613 10.537C5.021 9.59567 5.6 8.76667 6.35 8.05L12 2.5L17.65 8.05C18.4 8.76667 18.9793 9.59567 19.388 10.537C19.796 11.479 20 12.5 20 13.6C20 15.7833 19.221 17.646 17.663 19.188C16.1043 20.7293 14.2167 21.5 12 21.5ZM6.025 13H17.975C17.9083 12.3167 17.7293 11.6833 17.438 11.1C17.146 10.5167 16.75 9.98333 16.25 9.5L12 5.3L7.75 9.5C7.25 9.98333 6.854 10.5167 6.562 11.1C6.27067 11.6833 6.09167 12.3167 6.025 13Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default MetricIcon;