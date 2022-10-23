import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import FormProgressBar from "./FormProgressBar";
import { NextStepButton } from "./common";
import DeleteIcon from "../svg/DeleteIcon";
import AccountIcon from "../svg/AccountIcon";
import Alert from "./Alert";

type Rule = {
  title: string;
  logical_operator: string;
  metric: string;
  value: number;
  id: number;
  alert_triggers: [object];
  alert_definitions: [object];
};

const NotificationForm: FC = (props) => {
  const [rules, setRules] = useState<Rule[]>();

  const timeStamps = ["", "19:37      27/09/2022", "", "", "", ""];
  const locations = [
    "",
    "Nové mesto",
    "Staré mesto",
    "Bratislava region",
    "Bratislava region",
  ];
  useEffect(() => {
    fetch("https://mighty-clowns-jump-176-10-40-249.loca.lt/monitoring-rules", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        const temp = data.map((element: Rule) => {
          return {
            id: element.id,
            title: element.title,
            logical_operator: element.logical_operator,
            metric: element.metric,
            value: element.value,
            alert_triggers: element.alert_triggers.length,
            alert_definitions: element.alert_definitions.length,
          };
        });
        console.log(temp);
        setRules(temp);
      });
  }, []);

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
            textAlign: "center",
            margin: "auto 0",
          }}
        >
          Acropolis
        </div>
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
      <div style={{ width: "100%", margin: "auto" }}>
        {rules?.map((element) => (
          <Alert
            id={element.id}
            title={element.title}
            logical_operator={element.logical_operator}
            metric={element.metric}
            value={element.value}
            alert_triggers={element.alert_triggers}
            alert_definitions={element.alert_definitions}
            timeStamp={timeStamps[element.id]}
            location={locations[element.id]}
          />
        ))}
      </div>
    </>
  );
};

export default NotificationForm;
