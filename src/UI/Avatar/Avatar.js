import React from "react";

import styled from "styled-components";
import AlertBox from "../AlertBox/AlertBox";

import { Block, Row } from "../Layout/Layout";
import Title from "../Title/Title";

import Button from "../Button/Button";

const AvatarWrapp = styled.a`
  display: inline-block;

  position: relative;

  &:hover {
    img {
      border-color: red;
    }
  }
`;

const AvatarWrappIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #fff;

  transition: border-color 0.5s;
`;

const Avatar = ({ url, link, fullname }) => {
  const [onActive, setOnActive] = React.useState(false);

  return (
    <AvatarWrapp href={link} onMouseOver={() => setOnActive(true)}>
      <AvatarWrappIcon url={url} />
      {onActive && (
        <Block
          style={{
            boxShadow: `0 0 5px #c7bfbf`,
            borderRadius: `10px`,
            padding: "4px",

            flexDirection: "column",

            position: "absolute",
            top: "0",
            left: "100%",
            background: "#fff",

            visibility: onActive ? "visible" : "hidden",
          }}
        >
          <Row>
            <Title
              label={fullname ? fullname : "Test name"}
              style={{ fontSize: "15px", marginLeft: "5px" }}
            />
          </Row>
          <Row>
            <Button
              label="Написать"
              noImage
              style={{ width: "100%", padding: "5px" }}
            />
          </Row>
        </Block>
      )}
    </AvatarWrapp>
  );
};

export default Avatar;
