import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button`
  color: #c488fd;
  background-color: #f6effe;
  display: inline-block;
  padding: 10px 9px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 14px;

  transition: background-color 0.4s, color 0.3s;

  &:hover {
    background-color: #e7dcf4;
    color: #b37ee5;
  }

  &:focus {
    border-color: #c5b8d3;
  }

  &:before {
    content: "+";
    display: inline-block;

    height: 5px;
    width: 5px;
    margin-right: 10px;
  }
`;

const Button = (props) => {
  return <ButtonWrapp {...props}>{props.label}</ButtonWrapp>;
};

export default Button;
