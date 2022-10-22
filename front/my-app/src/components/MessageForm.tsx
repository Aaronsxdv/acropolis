import React, { FC } from "react";
import styled from "styled-components";

import FormProgressBar from "./FormProgressBar";
import { NextStepButton } from "./common";
import EditIcon from "../svg/EditIcon";
type Props = {
  onChange?: () => void;
};

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: auto;
`;
const StyledFormHeader = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #484848;
  margin-left: 35px;
`;

const MessageForm: FC<Props> = () => {
  return (
    <StyledFormContainer>
      <FormProgressBar activePage={4} />
      <StyledFormHeader>Alert message</StyledFormHeader>
      <div
        style={{
          height: "200px",
          width: "800px",
          background:
            "linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11)), #FFFBFE",
          borderRadius: "28px",
          margin: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              margin: "20px",
              fontWeight: "600",
              fontSize: "24px",
              color: "#1C1B1F",
              width: "50%",
            }}
          >
            DANGER OF FLOOD - TRNAVSKÉ MÝTO
          </p>
          <p
            style={{
              margin: "20px",
              marginLeft: "80px",
              width: "20%",
              fontWeight: "500",
              fontSize: "24px",
              color: "#484848",
            }}
          >
            time and date
          </p>
        </div>
        <p
          style={{
            width: "95%",
            textAlign: "left",
            margin: "auto",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#49454F",
          }}
        >
          The forecasted total precipitation for the next 2 hours in the area of
          Trnavské Mýto has risen above the defined threshold. There is a mild
          risk of flooding the underpass, be prepared to evacuate.
        </p>
      </div>
      <button
        style={{
          display: "flex",
          flexDirection: "row",
          borderRadius: "16px",
          backgroundColor: "#EADDFF",
          width: "182px",
          height: "56px",
          border: "none",
          fontWeight: "700",
          fontSize: "14px",
          color: "#6750A4",
          letterSpacing: "0.1px",
          textAlign: "center",
          marginLeft: "auto",
          marginTop: "11px",
          marginRight: "50px",
          marginBottom: "10px",
        }}
      >
        <EditIcon />
        <p style={{ textAlign: "left", margin: "auto 0px" }}>Edit message</p>
      </button>
      <NextStepButton>Finish</NextStepButton>
    </StyledFormContainer>
  );
};

export default MessageForm;
