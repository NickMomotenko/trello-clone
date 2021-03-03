import React from "react";

import styled from "styled-components";

const TitleWrapp = styled.div`
  color: #373b68;
  font-size: 45px;
  font-weight: 700;
`;

const Title = (props) => {
  return <TitleWrapp {...props}>{props.label}</TitleWrapp>;
};

export default Title;
