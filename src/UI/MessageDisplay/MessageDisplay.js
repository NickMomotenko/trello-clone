import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import Button from "../Button/Button";
import ButtonCircle from "../Button/ButtonCircle";
import { Row } from "../Layout/Layout";
import Title from "../Title/Title";

const MessageDisplayWrapp = styled.div`
  position: fixed;
  bottom: ${(props) => `-${props.bottom}px`};
  right: 0;
  transition: bottom 0.5s;

  border-radius: 5px;
  border: 1px solid #d7cdcd;

  min-height: 200px;
  overflow: hidden;

  width: 200px;

  display: flex;
  flex-direction: column;
`;

const MessageDisplayHeader = styled.div`
  background-color: blue;
  padding: 10px 16px;

  min-height: 50px;

  cursor: pointer;
`;

const MessageDisplayContent = styled.div`
  flex: 1;
`;

const MessageDisplayFooter = styled.div``;

const MessageDisplay = (props) => {
  const [position, setPosition] = React.useState(150);

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      setPosition(0);
    } else {
      setPosition(
        blockRef?.current.clientHeight - headerRef?.current.clientHeight
      );
    }
  }, [isVisible]);

  const headerRef = React.useRef(null);
  const blockRef = React.useRef(null);

  return (
    <MessageDisplayWrapp
      ref={blockRef}
      bottom={position}
      onClick={() => setIsVisible(!isVisible)}
    >
      <MessageDisplayHeader ref={headerRef}>
        <Row>
          <Title
            label={props.title}
            style={{ fontSize: "20px", color: "#fff" }}
          />
          <ButtonCircle />
        </Row>
      </MessageDisplayHeader>
      <MessageDisplayContent>
        {props.data.length === 0 && `Начните переписку`}
      </MessageDisplayContent>
      <MessageDisplayFooter>
        <Button label="Send" />
      </MessageDisplayFooter>
    </MessageDisplayWrapp>
  );
};

export default MessageDisplay;
