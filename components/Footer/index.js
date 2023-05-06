import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <StyledFooter id="footer">Footer</StyledFooter>;
}

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 35vh;
  background-color: #252326;
  bottom: 0;
  top: 1000px;
`;
