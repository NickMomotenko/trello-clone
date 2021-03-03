import React from "react";

import styled from "styled-components";

import Title from "./Title";

const LabelWrapp = styled.div`
  font-size: 15px;
  font-weight:700;
  color: red;
`;

const Label = ({ label }) => {
  return <LabelWrapp>{label}</LabelWrapp>;
};

export default Label;
