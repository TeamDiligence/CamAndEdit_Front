import styled from "@emotion/styled";
import React from "react";
export interface NavigationBarProps {}

const NavigationBar = ({}: NavigationBarProps) => {
  return <NavigationBarLayout>123123</NavigationBarLayout>;
};

export default NavigationBar;

const NavigationBarLayout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
`;
