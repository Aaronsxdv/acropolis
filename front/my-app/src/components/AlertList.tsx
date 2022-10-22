import React, { FC, useState } from "react";
import styled from "styled-components";

import FormProgressBar from "./FormProgressBar";
import { NextStepButton } from "./common";
import DeleteIcon from "../svg/DeleteIcon";
import AccountIcon from "../svg/AccountIcon";

const NotificationForm: FC = (props) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#6750A4",
          height: "80px",
          margin: "0px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "339px",
            height: "50px",
            backgroundColor: "#EEE8F4",

            margin: "auto 0",
          }}
        ></div>
        <div
          style={{
            width: "339px",
            height: "50px",
            backgroundColor: "#EEE8F4",
            borderRadius: "25px",
            margin: "auto 0",
          }}
        ></div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "20px",
            textAlign: "center",
            letterSpacing: "0.1px",
            color: " #FFFFFF",
            display: "flex",
            margin: "auto 0",
          }}
        >
          <p style={{ margin: "auto" }}>head of DPB</p>
          <AccountIcon />
        </div>
      </div>
      <div
        style={{
          margin: "36px auto",
          marginTop: "30px",
          width: "1500px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#6750A4",
            width: "250px",
            borderRadius: "155px",
            height: "50px",
            margin: "auto 35px",
          }}
        >
          <p
            style={{
              margin: "auto",
              lineHeight: "50px",
              textAlign: "center",
              color: "white",
              fontWeight: "600",
              letterSpacing: "0.154414px",
            }}
          >
            Your Monitoring Rules
          </p>
        </div>

        <div
          style={{
            width: "250px",
            background: "#EEE8F4",
            borderRadius: "155px",
            height: "50px",
            margin: "auto 35px",
          }}
        >
          <p
            style={{
              margin: "auto",
              lineHeight: "50px",
              textAlign: "center",
              color: "#6750A4",
              fontWeight: "600",
              letterSpacing: "0.154414px",
            }}
          >
            Add New Rule
          </p>
        </div>

        <div
          style={{
            width: "250px",
            background: "#EEE8F4",
            borderRadius: "155px",
            height: "50px",
            margin: "auto 35px",
          }}
        >
          <p
            style={{
              margin: "auto",
              lineHeight: "50px",
              textAlign: "center",
              color: "#6750A4",
              fontWeight: "600",
              letterSpacing: "0.154414px",
            }}
          >
            History of Alerts
          </p>
        </div>

        <div
          style={{
            width: "250px",
            background: "#EEE8F4",
            borderRadius: "155px",
            height: "50px",
            margin: "auto 35px",
          }}
        >
          <p
            style={{
              margin: "auto",
              lineHeight: "50px",
              textAlign: "center",
              color: "#6750A4",
              fontWeight: "600",
              letterSpacing: "0.154414px",
            }}
          >
            Trends/Patterns
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationForm;
