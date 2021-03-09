import React from "react";

import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import ButtonCircle from "../Button/ButtonCircle";
import { Column, Row, Block } from "../Layout/Layout";
import Title from "../Title/Title";

const AlertBoxWrapp = styled.div`
  box-shadow: 0 0 5px #c7bfbf;
  border-radius: 10px;
  padding: 4px;
`;

const AlertBox = ({ fullname, icon, onActive }) => {
  return (
    <AlertBoxWrapp>
      <Column>
        <Block>
          {icon && <Avatar url={icon} />}
          <Title
            label={fullname}
            style={{ fontSize: "15px", marginLeft: "5px" }}
          />
        </Block>
        <Row>
          <Button
            label="Написать"
            noImage
            style={{ width: "100%", padding: "5px" }}
          />
        </Row>
      </Column>
    </AlertBoxWrapp>
  );
};

export default AlertBox;
