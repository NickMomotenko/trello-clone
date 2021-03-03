import React from "react";

import styled from "styled-components";

const AvatarWrapp = styled.a`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;

  border: 2px solid transparent;
`;

const AvatarWrappIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const Avatar = ({ url, link }) => {
  return (
    <AvatarWrapp href={link}>
      <AvatarWrappIcon url={url} />
    </AvatarWrapp>
  );
};

export default Avatar;
