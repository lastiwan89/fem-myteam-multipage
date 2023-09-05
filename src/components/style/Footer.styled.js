import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "../../assets/bg-pattern-home-6-about-5.svg";
export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
`;

// footer Contact
export const FooterContact = styled.div`
  background-color: var(--light-coral);
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: 12%;
  background-position: 0 100%;
  /* place-content: center; */
`;

export const Title = styled.h2`
  font-size: var(--fs-h2-48);
  line-height: 28px;
`;

export const StyledButton = styled(Link)`
  padding: 0.5em 1.5em;
  border: 2px solid black;
  color: black;
  background-color: transparent;
  border-radius: 2em;
  text-decoration: none;
  line-height: 28px;

  &:hover {
    background-color: white;
    border-color: white;
  }
`;
// Footer Nav
export const FooterNav = styled.div`
  background-color: var(--green-dark);
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: var(--white);

  &:hover {
    color: var(--light-coral);
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  color: var(--white);
  gap: 0.5em;

  > li {
    list-style: none;
  }
`;

export const StyledSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const StyledCopyright = styled.p`
  --fs-body-15: 0.8em;
  color: white;
  font-size: var(--fs-body-15);
`;
