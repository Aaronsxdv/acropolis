import { Input } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React, { FC, useState } from "react";
import styled from "styled-components";

type Props = {
  onChange?: () => void;
};

const StyledInputContainer = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
`;
const StyledTextField = styled.input`
  width: 300,
  color: green,
  fontSize: 30px;
  border: 2px solid #6750A4;
  border-radius: 4px;
  padding:10px;
  
`;
const StyledLabel = styled.label`
  color: #8d8d8d;
  position: relative;
  z-index: 3;
  top: -20px;
  left: -170px;
  background: #ffffff;
  transition: 300ms;
  transform: translate(-50%, -50%);
  padding: 0px 4px;
  color: #6750a4;
  font-size: 12px;
`;
const StyledTextFieldContainer = styled.div`
  margin: 10px;
`;
const StyledConditionCheckbox = styled.input`
  background-color: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  margin: auto 16px;
  font: inherit;
  color: #6750a4;
  width: 1.15em;
  height: 1.15em;
  border: 0.1em solid #6750a4;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  :before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  :checked {
    background-color: #6750a4;
  }
  :checked::before {
    transform: scale(1);
  }
`;
const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
`;
const StyledFormHeader = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #484848;
`;

const MetricFormInput: FC<Props> = () => {
  const [windSpeed, setWindSpeed] = useState<string>("");
  const [temperatureOpen, setTemperatureOpen] = useState<boolean>(false);
  const [windSpeedOpen, setWindSpeedOpen] = useState<boolean>(false);
  const [precipitationPercentage, setPrecipitationPercentage] =
    useState<string>("");

  return (
    <StyledFormContainer>
      <StyledFormHeader>Alert if</StyledFormHeader>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "800px",
            height: "70px",
            backgroundColor: "#f7f2f9",
          }}
          onClick={() => {
            setTemperatureOpen(!temperatureOpen);
          }}
        >
          <StyledConditionCheckbox type={"checkbox"} />
          <label style={{ margin: "auto 0" }}>
            <p style={{ margin: "auto 0" }}>Temperature</p>
            <p style={{ margin: "auto 0" }}>Supporting text</p>
          </label>
        </div>
        <StyledInputContainer isVisible={temperatureOpen}>
          <p
            style={{
              margin: "auto 0",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28px",
              color: "#484848",
            }}
          >
            temperature is
          </p>
          <StyledTextFieldContainer>
            <StyledTextField
              id="standard-basic"
              type="number"
              value={windSpeed}
              onChange={(event) => {
                setWindSpeed(event.target.value);
              }}
            />
            <StyledLabel>min. temp</StyledLabel>
          </StyledTextFieldContainer>
        </StyledInputContainer>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "800px",
            height: "70px",
            backgroundColor: "#f7f2f9",
          }}
          onClick={() => {
            setWindSpeedOpen(!windSpeedOpen);
          }}
        >
          <StyledConditionCheckbox type={"checkbox"} />
          <label style={{ margin: "auto 0" }}>
            <p style={{ margin: "auto 0" }}>Wind speed</p>
            <p style={{ margin: "auto 0" }}>Supporting text</p>
          </label>
        </div>
        <StyledInputContainer isVisible={windSpeedOpen}>
          <p
            style={{
              margin: "auto 0",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28px",
              color: "#484848",
            }}
          >
            wind speed is
          </p>
          <StyledTextFieldContainer>
            <StyledTextField
              id="standard-basic"
              type="number"
              value={windSpeed}
              onChange={(event) => {
                setWindSpeed(event.target.value);
              }}
            />
            <StyledLabel>min. speed</StyledLabel>
          </StyledTextFieldContainer>
        </StyledInputContainer>
      </div>

      <p>
        pr. percentage {precipitationPercentage} + wind speed {windSpeed}
      </p>
    </StyledFormContainer>
  );
};

export default MetricFormInput;
