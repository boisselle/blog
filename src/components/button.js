import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-style: solid;
  border-color: black;

  background: ${props => props.props.background || "LightCyan"};
  color: ${props => props.props.color || "rgb(0, 0, 0)"};
  font-size: ${props => props.props.fontSize || "18px"};
  font-weight: ${props => props.props.fontWeight || "900"};
  border-radius: ${props => props.props.radius || "0px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    background: black;
    color: LightCyan;
  }
`

export default Button
