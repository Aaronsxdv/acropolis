import React, { FC, useState } from "react";
import styled from "styled-components";
import CreatableSelect, {
  components,
  DropdownIndicatorProps,
  GroupBase,
  MenuListProps,
  MultiValue,
  MultiValueRemoveProps,
  OptionProps,
  SelectInstance,
} from "react-select";
import FormProgressBar from "./FormProgressBar";
import { NextStepButton } from "./common";
import DeleteIcon from "../svg/DeleteIcon";
type Props = {
  nextPage: () => void;
};
export const CustomSelect = styled(CreatableSelect)`
  width: 150px;
  margin: 14px 30px 14px 30px;
  align-self: center;
  outline: none;
  border: none;

  .Select__control {
    margin: 0px 0px 0px 1px;

    width: 100%;

    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    background: rgba(103, 80, 164, 10%);
    border: 1px solid transparent;
  }

  .Select__control:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  }

  .Select__control--is-focused {
    background-color: rgba(103, 80, 164, 8%);
    border: none;
  }

  .Select__indicator-separator {
    display: none;
  }
  .Select__dropdown-indicator {
    padding: 0 0 0 16px;
  }
  .Select__value__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #49454f;
  }
  .Select__menu-list {
    background-color: rgba(103, 80, 164, 5%);
  }
  .Select__option {
    background-color: rgba(103, 80, 164, 5%);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1c1b1f;
  }
  .Select__option--is-focused {
    background-color: rgba(103, 80, 164, 15%);
  }
`;

const StyledInputContainer = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
`;
const StyledTextField = styled.input`
  width: 400px;
  font-size: 16px;
  border: 2px solid #6750a4;
  border-radius: 4px;
  padding: 10px;
`;
const StyledLabel = styled.label`
  color: #8d8d8d;
  position: relative;
  z-index: 3;
  top: -23px;
  left: -410px;
  background: #f7f2f9;
  transition: 300ms;
  transform: translate(-50%, -50%);
  padding: 0px 4px;
  color: #6750a4;
  font-size: 12px;
`;
const StyledTextFieldContainer = styled.div`
  margin: auto 30px auto 30px;
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
const options = [
  { value: "API", label: "API endpoint" },
  { value: "email", label: "email" },
];

const NotificationForm: FC<Props> = (props) => {
  return (
    <StyledFormContainer>
      <FormProgressBar activePage={3} />
      <StyledFormHeader>Get alert as</StyledFormHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          height: "90px",
          backgroundColor: "#f7f2f9",
          width: "850px",
          margin: "10px auto",
        }}
      >
        <CustomSelect
          inputId="clickableInput"
          classNamePrefix="Select"
          className="tag-select"
          options={options}
          value={"API"}
          placeholder={"API endpoint"}
        />
        <StyledTextFieldContainer>
          <StyledTextField
            id="standard-basic"
            type="number"
            value={""}
            onChange={() => {}}
          />
          <StyledLabel>URL</StyledLabel>
        </StyledTextFieldContainer>
        <DeleteIcon />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",

          height: "90px",
          backgroundColor: "#f7f2f9",
          width: "850px",
          margin: "10px auto",
        }}
      >
        <CustomSelect
          inputId="clickableInput"
          classNamePrefix="Select"
          className="tag-select"
          options={options}
          value={"email"}
          placeholder={"email"}
        />
        <StyledTextFieldContainer>
          <StyledTextField
            id="standard-basic"
            type="number"
            value={""}
            onChange={() => {}}
          />
          <StyledLabel>email</StyledLabel>
        </StyledTextFieldContainer>
        <DeleteIcon />
      </div>
      <button
        style={{
          borderRadius: "100px",
          backgroundColor: "#f7f2f9",
          height: "40px",
          width: "80px",
          border: "none",
          fontWeight: "700",
          fontSize: "14px",
          color: "#6750A4",
          letterSpacing: "0.1px",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "22px",
          marginBottom: "10px",
        }}
      >
        + add
      </button>
      <NextStepButton onClick={props.nextPage}>Next Step</NextStepButton>
    </StyledFormContainer>
  );
};

export default NotificationForm;
