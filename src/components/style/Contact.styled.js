import styled from "styled-components";
import BgLeft from "../../assets/bg-pattern-about-2-contact-1.svg";
import BgRight from "../../assets/bg-pattern-contact-2.svg";

export const ContactWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  display: flex;
  justify-content: space-between;
  gap: 4em;
  align-items: center;
  background-color: var(--green-midnight);
  background-image: url(${BgLeft}), url(${BgRight});
  background-repeat: no-repeat;
  background-position:
    -9.4% 10%,
    109% 100%;
  height: 50vh;
  padding: 6em;
`;

// Q & A section
export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
  gap: 1em;
  padding-left: 4em;
`;

export const StyledTitle = styled.h1`
  font-size: var(--fs-h1-64);
  color: white;
`;
export const StyledTitleSub = styled.h2`
  font-size: 2.5em;
  color: var(--light-coral);
`;

export const FeatureSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Gear = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  color: white;

  > p {
    font-weight: 600;
  }
`;

// Form section
export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: start;
  justify-content: center;
  width: auto; */
  /* display: grid;
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  justify-items: start; */
  flex-basis: 60%;
  gap: 1em;
  padding-right: 4em;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: var(--green-midnight);
  color: white;
  border-bottom: 1px solid white;
  padding: 0.5em;
  text-indent: 0.5em;
`;

export const StyledInputTextArea = styled(StyledInput)`
  padding-bottom: 4em;
`;

export const StyledButton = styled.button`
  width: auto;
  align-self: flex-start;
  padding: 0.5em 1.5em;
  border-radius: 2em;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:focus,
  :active {
    border: none;
    outline: none;
  }

  &:hover {
    outline: 2px solid white;
    background-color: var(--green-midnight);
    color: white;
  }
`;
