import { styled } from "styled-components";
import { device } from "../config";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  pointer-events: none;
`;

export const HeaderBar = styled.div`
  @media ${device.desktopLg} {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
  }
`;

export const HeaderBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  position: relative;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @madia ${device.mobile} {
    max-width: calc(782px);
  }

  @madia ${device.tablet} {
    max-width: calc(1018px);
  }

  @madia ${device.laptop} {
    max-width: calc(1242px);
  }

  a {
    pointer-events: initial;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
  }
`;

export const ButtonMenuToggle = styled.button`
  pointer-events: initial;
  font-size: 30px;
  padding: 0;
  font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
  font-weight: 400;
  background: transparent;
  border: solid 1px #f1f1f1;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  position: relative;
  border-color: transparent;
  background-color: transparent;
  transition: none;
  color: #f1f1f1;
`;

export const ListIconsContainer = styled.ul`
  font-size: 18px;
  list-style: none;
  position: absolute;
  top: 100px;
  right: 0;
  padding: 0;
  width: 50px;
  text-align: center;
  pointer-events: initial;
  z-index: -1;
  margin: 0;
  margin-right: 1.2rem;

  @media (max-width: 1184px) {
    display: flex;
    align-items: center;
    position: unset;
    justify-content: center;
    width: unset;
    margin: 0;
    height: 100%;
  }

  li {
    margin: 1em 0.5em;
    font-size: 20px;
    list-style: none;
    text-align: center;
    pointer-events: initial;

    a {
      color: #fff;
    }
  }

  @media (max-width: 1184px) {
    li {
      display: inline-block;
      margin: 0.5em;
    }
  }
`;
