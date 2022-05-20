import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Layout } from "../../Login/style";
const Loading = () => {
  return (
    <Layout style={{ backgroundColor: "#0A69FA" }}>
      <Loader />
      <Text> Loading... </Text>
    </Layout>
  );
};

export default Loading;

const spin = keyframes`
  	0%{ -webkit-transform: rotate(0deg); tranform: rotate(0deg);}
	100%{ -webkit-transform: rotate(360deg); tranform: rotate(360deg);}
`;
const spinreverse = keyframes`
 	0%{ -webkit-transform: rotate(0deg); tranform: rotate(0deg);}
	100%{ -webkit-transform: rotate(-360deg); tranform: rotate(-360deg);}
`;

const Text = styled.div`
  color: white;
  font-size: 2rem;
  margin-left: 1rem;
`;
const Loader = styled.span`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  border-radius: 50px;
  border: 6px solid transparent;
  border-top-color: #fff;
  border-bottom-color: #fff;
  -webkit-animation: ${spin} 1.5s linear infinite;
  animation: ${spin} 1.5s linear infinite;
  &:before {
    top: 15px;
    left: 15px;
    bottom: 15px;
    right: 15px;
    -webkit-animation: ${spinreverse} 3s linear infinite;
    animation: ${spinreverse} 3s linear infinite;
  }
  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    bottom: 5px;
    right: 5px;
    border-radius: 50px;
    border: 6px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    filter: alpha(opacity=6);
    -khtml-opacity: 0.6;
    -moz-opacity: 0.6;
    opacity: 0.6;
    -webkit-animation: ${spinreverse} 2s linear infinite;
    animation: ${spinreverse} 2s linear infinite;
  }
`;
