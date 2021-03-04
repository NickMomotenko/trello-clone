import React from "react";

import styled from "styled-components";

const RowWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColumnWrapp = styled.div`
  display: inline-flex;
  flex-direction: column;

  width: 100%;
`;

const CircleWrapp = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  /* background-color: #fff2f6; */

  color: #ff7ca5;

  font-weight: 700;

  text-align: center;
  line-height: 25px;
`;

const IconWrapp = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;
  width: 20px;
  height: 17px;
`;

const BlockWrapp = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapp = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: block;
  width: 100%;
  max-height: 100px;
  object-fit: contain;
`;

export const Row = (props) => {
  return <RowWrapp {...props}>{props.children}</RowWrapp>;
};

export const Column = (props) => {
  return <ColumnWrapp {...props}>{props.children}</ColumnWrapp>;
};

export const Circle = (props) => {
  return (
    <CircleWrapp>
      {props.count}
      {props.children}
    </CircleWrapp>
  );
};

export const Icon = ({ icon }) => {
  return <IconWrapp url={icon} />;
};

export const Image = ({ icon }) => {
  return <ImageWrapp url={icon} />;
};

export const Block = (props) => {
  return <BlockWrapp {...props}>{props.children}</BlockWrapp>;
};
