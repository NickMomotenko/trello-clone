import React from "react";

import styled from "styled-components";

const AvatarMultiRowWrapp = styled.div`
  display: inline-flex;
  margin-left: 10px;

  a {
    margin-left: -10px;
  }
`;

const AvatarMultiRow = (props) => {
  return <AvatarMultiRowWrapp>{props.children}</AvatarMultiRowWrapp>;
};

export default AvatarMultiRow;
