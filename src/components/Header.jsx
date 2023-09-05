import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Bars from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import { useState } from "react";
import {
  StyledHeader,
  StyledLogo,
  NavBar,
  NavList,
  Button,
  Burger,
} from "./style/Header.styled";
export default function Header() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible((prev) => !prev);
  }
  return (
    <StyledHeader>
      <NavBar>
        <StyledLogo to="/">
          <img src={Logo} alt="logo" />
        </StyledLogo>
        <NavList visible={visible}>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </NavList>
        <Button to="/contact">contact us</Button>
      </NavBar>

      <Burger onClick={toggleVisible}>
        {!visible ? (
          <img src={Bars} alt="burger--bars" />
        ) : (
          <img src={Close} alt="burger--close" />
        )}
      </Burger>
    </StyledHeader>
  );
}
