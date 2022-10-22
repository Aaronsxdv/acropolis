import React, { FC, useState } from "react";
import styled from "styled-components";
import PartIcon from "../svg/PartIcon";
import ProgressLineConnector from "./ProgressLineConnector";

type Props = {
  activePage: number;
};

const FormProgressBar: FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        width: "900px",
      }}
    >
      <PartIcon pageNumber={1} active={props.activePage === 1} />
      <ProgressLineConnector />
      <PartIcon pageNumber={2} active={props.activePage === 2} />
      <ProgressLineConnector />
      <PartIcon pageNumber={3} active={props.activePage === 3} />
      <ProgressLineConnector />
      <PartIcon pageNumber={4} active={props.activePage === 4} />
    </div>
  );
};

export default FormProgressBar;
