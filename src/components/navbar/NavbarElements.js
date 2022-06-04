import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Head = styled.header`
  margin-left: auto;
  margin-right: auto;
  margin-top: -0.5em;
  width: 35em;
  text-align: right;
  font-size: 36px;
  height: 175px;
  position: relative;
`;

export const LogoBox = styled.div`
  text-align: left;
  float: left;
  position: absolute;
  top: 1em;
  bottom: 0;
  left: 0;
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 70%;
`;

export const Name = styled.div`
  text-align: right;
  float: right;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Nav = styled.nav`
  background: #ffffff;
  height: 85px;
  display: flex;
  justify-content: end;
  padding: 0.2rem calc((90vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
