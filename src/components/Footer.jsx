// import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Meta from "../assets/icon-facebook.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Twitter from "../assets/icon-twitter.svg";
import {
  FooterWrapper,
  StyledNavLink,
  FooterContact,
  Title,
  StyledButton,
  FooterNav,
  NavWrapper,
  StyledNav,
  ContactList,
  StyledCopyright,
  StyledSocial,
  SocialWrapper,
} from "./style/Footer.styled";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContact>
        <Title>Ready to get started?</Title>
        <StyledButton to="/contact">contact us</StyledButton>
      </FooterContact>
      <FooterNav>
        <NavWrapper>
          <img className="footer__nav__link--logo" src={Logo} alt="logo" />
          <StyledNav>
            <StyledNavLink to="/">home</StyledNavLink>
            <StyledNavLink to="/about">about</StyledNavLink>
          </StyledNav>
        </NavWrapper>
        <ContactList>
          <li>987 Hillcrest Lane</li>
          <li>Irvine, CA</li>
          <li>California 92714</li>
          <li>
            Call Us :{" "}
            <StyledNavLink to="949-833-7432">949-833-7432</StyledNavLink>
          </li>
        </ContactList>
        <StyledSocial>
          <SocialWrapper>
            <img src={Meta} alt="meta" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Twitter} alt="twitter" />
          </SocialWrapper>
          <StyledCopyright>Copyright 2020. All Rights Reserved</StyledCopyright>
        </StyledSocial>
      </FooterNav>
    </FooterWrapper>
  );
}
