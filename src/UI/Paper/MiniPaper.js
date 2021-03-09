import React from "react";

import styled from "styled-components";

import Paper from "./Paper";

const MiniPaperWrapp = styled.div`
  background-color: #ffffff;

  background-color: #fcfcfe;
  border-radius: 20px;
  padding: 30px 20px;
`;

const MiniPaper = React.forwardRef((props, ref) => (
  <MiniPaperWrapp ref={ref} {...props}>
    {props.children}
  </MiniPaperWrapp>
));

export default MiniPaper;
