import React from "react";

import styled from "styled-components";

const DateDisplayWrapp = styled.div`
  color: #8a8ca7;
  font-size: 17px;
`;

const DateDisplay = ({ date }) => {
  return <DateDisplayWrapp>{date}</DateDisplayWrapp>;
};

export default DateDisplay;
