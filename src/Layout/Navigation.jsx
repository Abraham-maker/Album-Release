import React from "react";
import {
  Header,
  HeaderBar,
  HeaderBarContent,
  ButtonMenuToggle,
  ListIconsContainer,
} from "../styles/Navigation";
import { CgMenuLeftAlt } from "react-icons/cg";
import { SlSocialSpotify } from "react-icons/sl";
import { BsTiktok, BsTwitch, BsFacebook, BsDiscord } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Navigation = () => {
  const icons = [
    { id: 1, icon: <SlSocialSpotify />, url: "#" },
    { id: 2, icon: <BsTiktok />, url: "#" },
    { id: 3, icon: <AiOutlineInstagram />, url: "#" },
    { id: 4, icon: <BsTwitch />, url: "#" },
    { id: 5, icon: <BsFacebook />, url: "#" },
    { id: 6, icon: <BsDiscord />, url: "#" },
  ];

  return (
    <Header>
      <HeaderBar>
        <HeaderBarContent>
          <a href="#"></a>
          <ListIconsContainer>
            {icons.map((items, index) => {
              return (
                <li key={index}>
                  <a href={items.url} target="_BLANK">
                    {items.icon}
                  </a>
                </li>
              );
            })}
          </ListIconsContainer>
          <ButtonMenuToggle>
            <CgMenuLeftAlt />
          </ButtonMenuToggle>
        </HeaderBarContent>
      </HeaderBar>
    </Header>
  );
};

export default Navigation;
