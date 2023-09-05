import styled from "styled-components";
import BgHero from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";
import BgClient from "../../assets/bg-pattern-about-4.svg";
import BgDirectorTop from "../../assets/bg-pattern-about-2-contact-1.svg";
import BgDirectorBottom from "../../assets/bg-pattern-home-4-about-3.svg";
export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Hero section
export const StyledHero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2em;
  height: 50vh;
  padding: 6em;
  background-color: var(--green-midnight);
  background-image: url(${BgHero});
  background-repeat: no-repeat;
  background-position: 109.5% 100%;
`;

export const StyledTitle = styled.h1`
  font-size: var(--fs-h1-100);
  color: white;
`;

export const StyledAside = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const StyledRect = styled.div`
  width: 4em;
  height: 0.35em;
  background-color: var(--light-coral);
`;

export const StyledText = styled.p`
  color: white;
  font-weight: 600;
`;

// Directors sections
export const StyledDirector = styled.div`
  background-color: var(--green-jungle);
  background-image: url(${BgDirectorTop}), url(${BgDirectorBottom});
  background-repeat: no-repeat;
  background-position:
    -9.6% 0,
    bottom right;
  display: flex;
  flex-direction: column;
  padding: 6em 2em;
`;
export const DirectorList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  justify-items: center;
  align-items: center;
  /* grid-template-rows: repeat(2, minmax(100px, 1fr)); */
  padding: 4em;
  gap: 2em;
`;

export const DirectorTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: var(--fs-h2-48);
`;

export const DirectorWrapper = styled.div`
  background-color: var(--green-sacramento);
  padding: 1.7em;
  width: 21.875rem;
  height: 15.8125rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 1em;
`;

export const StyledCross = styled.img`
  background-color: var(--light-coral);
  padding: 1em;
  border-radius: 50%;
  position: absolute;
  bottom: -9%;
  right: 42%;
`;

export const StyledCrossRotate = styled(StyledCross)`
  background-color: var(--blue-rapture);
  rotate: 45deg;
`;

export const StyledFigure = styled.img`
  width: 6em;
  border-radius: 50%;
  border: 2px solid var(--blue-rapture);
`;

export const FigureName = styled.h4`
  color: var(--blue-rapture);
  text-align: center;
`;

export const FigurePosition = styled.p`
  font-style: italic;
  font-size: 0.9em;
`;

export const FigureQuote = styled.p`
  text-align: center;
  font-size: 1em;
  padding: 0 1em;
`;

export const FigureSocial = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
`;

// Client sections
export const ClientWrapper = styled.div`
  background-color: var(--green-sacramento);
  background-image: url(${BgClient});
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 12%;
  display: flex;
  flex-direction: column;
  padding: 6em 3em;
  /* justify-content: center; */
  gap: 3em;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 3em;
`;

export const ClientLogo = styled.img`
  height: 1.5em;
`;
