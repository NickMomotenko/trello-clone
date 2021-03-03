import React from "react";

import styled from "styled-components";

const AvatarMultiRowWrapp = styled.div`
  display: inline-flex;
  margin-left: 10px;

  a {
    border: 2px solid #fff;
    margin-left: -10px;
    transition: border-color 0.5s;

    &:hover {
      border-color: red;
    }
  }
`;

const AvatarMultiRow = (props) => {
  return <AvatarMultiRowWrapp>{props.children}</AvatarMultiRowWrapp>;
};

export default AvatarMultiRow;
