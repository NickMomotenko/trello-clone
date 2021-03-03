import React from "react";

import styled from "styled-components";

const PaperWrapp = styled.div`
  background-color: #fcfcfe;
  border-radius: 20px;
  padding: 30px 20px;
`;

const Paper = (props) => {
  return <PaperWrapp>{props.children}</PaperWrapp>;
};

export default Paper;
