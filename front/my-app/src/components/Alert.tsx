import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import FormProgressBar from "./FormProgressBar";
import { NextStepButton } from "./common";
import DeleteIcon from "../svg/DeleteIcon";
import AccountIcon from "../svg/AccountIcon";
import EditIcon from "../svg/EditIcon";
import LocationIcon from "../svg/LocationIcon";
import MetricIcon from "../svg/MetricIcon";
import NotificationIcon from "../svg/NotificationIcon";
import TimeIcon from "../svg/TimeIcon";
import PercentIcon from "../svg/PercentIcon";
type Props = {
  title: string;
  logical_operator: string;
  metric: string;
  value: number;
  id: number;
  alert_triggers: [object];
  alert_definitions: [object];
  timeStamp: string;
  location: string;
};
const AlertHeader = styled.p`
  width: 90%;
  margin: 30px;
  margin-top: 15px;
  margin-left: 35px;
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #1c1b1f;
`;
const ActiveAlertParameter = styled.p`
  display: flex;
  margin: 1px 20px 1px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  align-items: center;
  color: #f0034a;
`;
const AlertParameter = styled.p`
  display: flex;
  margin: -20px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  align-items: center;
`;
const ActiveAlertContainer = styled.div`
  width: 786px;
  height: 237px;

  background: #f7f2f9;
  margin: auto;
  margin-bottom: 20px;
`;
const AlertContainer = styled.div`
  width: 786px;
  height: 90px;
  background: #f7f2f9;
  margin: auto;

  margin-bottom: 20px;
`;
const AlertContainer2 = styled.div`
  width: 786px;
  height: 90px;
  background: rgba(240, 3, 74, 15%);
  margin: auto;

  margin-bottom: 20px;
`;

const Alert: FC<Props> = (props) => {
  const metricString = () => {
    return props.metric === "PRECIPITATION"
      ? "Total Precipitation"
      : "Temperature";
  };
  const metricUnitString = () => {
    return props.metric === "PRECIPITATION" ? "mm/h" : "°C";
  };
  return (
    <>
      {props.id !== 1 && props.id !== 3 && (
        <AlertContainer>
          <div className="headerdiv" style={{ display: "flex" }}>
            <AlertHeader>{props.title}</AlertHeader>
            <div style={{ width: "5%", margin: "auto 30px" }}>
              <EditIcon />
            </div>
          </div>
          <AlertParameter>
            <MetricIcon metric={props.metric} />
            {metricString()} {props.logical_operator} {props.value}
            {metricUnitString()}
            <LocationIcon />
            {props.location}
          </AlertParameter>
        </AlertContainer>
      )}
      {props.id === 3 && (
        <AlertContainer2>
          <div className="headerdiv" style={{ display: "flex" }}>
            <AlertHeader>{props.title}</AlertHeader>
            <div style={{ width: "5%", margin: "auto 30px" }}>
              <EditIcon />
            </div>
          </div>
          <AlertParameter>
            <MetricIcon metric={props.metric} />
            {metricString()} {props.logical_operator} {props.value}
            {metricUnitString()}
            <LocationIcon />
            {props.location}
            <div
              style={{
                position: "absolute",
                left: "1022px",
                textAlign: "right",
              }}
            >
              {props.alert_triggers ? "!recent trigger" : "past trigger"}
            </div>
          </AlertParameter>
        </AlertContainer2>
      )}
      {props.id === 1 && (
        <ActiveAlertContainer>
          <div className="headerdiv" style={{ display: "flex" }}>
            <AlertHeader>{props.title}</AlertHeader>
            <div style={{ width: "5%", margin: "auto 30px" }}>
              <EditIcon />
            </div>
          </div>
          <AlertParameter>
            <MetricIcon metric={props.metric} />
            {metricString()} {props.logical_operator} {props.value}
            {metricUnitString()}
            <LocationIcon />
            {props.location}
          </AlertParameter>
          <div style={{ marginTop: "30px" }}>
            {props.timeStamp !== "" && (
              <ActiveAlertParameter>
                <TimeIcon />
                {props.timeStamp}
              </ActiveAlertParameter>
            )}
            {props.timeStamp !== "" && (
              <ActiveAlertParameter>
                <PercentIcon />
                {`Total precipitation\xa0`}
                <b>{" 41 mm/h "}</b>
                {"\xa0(17% above the treshold)"}
              </ActiveAlertParameter>
            )}
            <ActiveAlertParameter>
              <NotificationIcon />

              {"Notifications sent (" +
                props.alert_definitions +
                "/" +
                props.alert_definitions +
                ")"}
            </ActiveAlertParameter>
          </div>
        </ActiveAlertContainer>
      )}
    </>
  );
};

export default Alert;
