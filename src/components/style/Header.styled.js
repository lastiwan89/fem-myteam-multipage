import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.div`
  background-color: var(--green-midnight);
  font-family: var(--font-stack);
  padding: 1rem 2rem;
  font-weight: 700;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: ${({ visible }) => (visible ? "flex" : "none")};
    flex-direction: column;
  }

  > a {
    text-decoration: none;
    color: var(--white);
    font-size: var(--fs-body-18);

    &:hover {
      color: var(--light-coral);
    }
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  margin-left: auto;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  border: none;
  background-color: transparent;
  outline: 2px solid var(--white);
  font-size: var(--fs-body-18);
  font-weight: 600;
  color: var(--white);

  &:hover {
    background-color: var(--white);
    color: var(--green-midnight);
  }
`;

export const Burger = styled.div`
  position: absolute;
  right: 2rem;
  @media (min-width: 600px) {
    display: none;
  }
`;
