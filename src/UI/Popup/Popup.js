import React from "react";

import styled from "styled-components";

const PopupWrapp = styled.div``;

const Popup = (props) => {
  return <PopupWrapp>{props.children}</PopupWrapp>;
};

export default Popup;
