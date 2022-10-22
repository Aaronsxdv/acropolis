import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import * as mapboxgl from "mapbox-gl";
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
type Props = {
  nextPage: () => void;
};

export const CustomSelect = styled(CreatableSelect)<{ isVisible: boolean }>`
  width: 150px;
  margin: 0px 30px 14px 30px;
  visibility: ${(props) => (props.isVisible ? "auto" : "hidden")};
  outline: none;
  border: none;

  .Select__control {
    margin: 0px 0px 0px 1px;

    width: 100%;

    cursor: pointer;
    border-radius: 4px;
    border: 2px solid #6750a4;
  }

  .Select__control:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 2px solid #6750a4;
  }

  .Select__control--is-focused {
    box-shadow: none;
    border: 2px solid #6750a4;
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
const StyledTextField = styled.input<{ width?: number }>`
  width: ${(props) => (props.width ? props.width + "px" : "100px")};
  font-size: 16px;
  border: 2px solid #6750a4;
  border-radius: 4px;
  padding: 10px;
`;
const StyledLabel = styled.label<{ left?: number }>`
  color: #8d8d8d;
  position: relative;
  z-index: 3;
  top: -23px;
  left: ${(props) => (props.left ? "-" + props.left + "px" : "-115px")};
  background: #ffffff;
  transition: 300ms;
  transform: translate(-50%, -50%);
  padding: 0px 4px;
  color: #6750a4;
  font-size: 12px;
`;
const StyledTextFieldContainer = styled.div`
  margin: 10px 30px 10px 30px;
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
  margin-left: 40px;
  margin-top: 6px;
  margin-bottom: 10px;
`;
const StyledMapContainer = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 30px;
`;
const LocationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledRadioButton = styled.input`
  appearance: none;
  -webkit-appearance: none;
  background-color: white;
  margin: auto 16px;
  font: inherit;
  color: #6750a4;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #6750a4;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;

  place-content: center;

  :before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
  }
  :checked {
    background-color: #6750a4;
  }
  :checked::before {
    transform: scale(0.7);
  }
  :focus {
  }
`;
const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  height: 55px;
  background-color: rgba(103, 80, 164, 5%);
  margin: auto 30px;
`;
const options = [
  { value: "3 days", label: "3 days" },
  { value: "7 days", label: "7 days" },
  { value: "14 days", label: "14 days" },
  { value: "21 days", label: "21 days" },
  { value: "1 month", label: "1 month" },
  { value: "3 months", label: "3 months" },
];

const LocationForm: FC<Props> = (props) => {
  const [coordinates, setCoordinates] = useState("");
  const [radius, setRadius] = useState(0);
  const [time, setTime] = useState("Future");
  useEffect(() => {
    const map = new mapboxgl.Map({
      accessToken:
        "pk.eyJ1IjoiZmllbmRibG9vZGVkeCIsImEiOiJjbDlrMnZlam4zNW81M3ZxdG43am94NGRwIn0.15t9YVLfGXtXM_v08Uda6A",
      container: "map", // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [17.111, 48.15], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });
    const add_marker = (event: any) => {
      var coordinates = event.lngLat;
      //console.log("Lng:", coordinates.lng, "Lat:", coordinates.lat);
      setCoordinates(coordinates.lat + ", " + coordinates.lng);
      marker.setLngLat(coordinates).addTo(map);
    };
    const marker = new mapboxgl.Marker();
    map.on("click", add_marker.bind(this));
  }, []);

  return (
    <StyledFormContainer>
      <FormProgressBar activePage={2} />
      <StyledFormHeader>Region of interest</StyledFormHeader>
      <div style={{ display: "flex", flexDirection: "row", margin: "auto" }}>
        <StyledMapContainer id="map"></StyledMapContainer>
        <LocationInputContainer>
          <StyledTextFieldContainer>
            <StyledTextField
              id="standard-basic"
              type="number"
              placeholder={coordinates}
              width={320}
              disabled
              onChange={(event) => {}}
            />
            <StyledLabel left={335}>Coordinates</StyledLabel>
          </StyledTextFieldContainer>
          <StyledTextFieldContainer>
            <StyledTextField
              id="standard-basic"
              type="number"
              value={""}
              onChange={(event) => {}}
            />
            <StyledLabel>Radius</StyledLabel>
          </StyledTextFieldContainer>
        </LocationInputContainer>
      </div>
      <StyledFormHeader>Time window</StyledFormHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0px 10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <RadioButtonContainer>
            <StyledRadioButton
              type={"radio"}
              name={"timeDirection"}
              value="Past"
              onClick={() => setTime("Past")}
            />
            <label style={{ margin: "16px 16px 16px 0px" }}>Past</label>
          </RadioButtonContainer>

          <CustomSelect
            inputId="clickableInput"
            classNamePrefix="Select"
            value="Past"
            className="tag-select"
            options={options}
            isVisible={time === "Past"}
          />
        </div>
        <p
          style={{
            fontWeight: "800",
            fontSize: "24px",
            lineHeight: "36px",
            color: "#484848",
            marginBottom: "80px",
          }}
        >
          or
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <RadioButtonContainer>
            <StyledRadioButton
              type={"radio"}
              name={"timeDirection"}
              value="Future"
              onClick={() => setTime("Future")}
            />
            <label style={{ margin: "16px 16px 16px 0px" }}>Future</label>
          </RadioButtonContainer>

          <CustomSelect
            inputId="clickableInput"
            classNamePrefix="Select"
            className="tag-select"
            options={options}
            isVisible={time === "Future"}
          />
        </div>
      </div>
      <NextStepButton onClick={props.nextPage}>Next Step</NextStepButton>
    </StyledFormContainer>
  );
};

export default LocationForm;
