import React from "react";

import styled from "styled-components";

import { Circle, Icon } from "../Layout/Layout";

const ButtonCircleWrapp = styled.button``;

const ButtonCircle = ({ icon }) => {
  return (
    <ButtonCircleWrapp>
      <Circle>{icon && <Icon icon={icon} />}</Circle>
    </ButtonCircleWrapp>
  );
};

export default ButtonCircle;
