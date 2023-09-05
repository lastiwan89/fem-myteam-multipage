import styled from "styled-components";
import Home1 from "../../assets/bg-pattern-home-1.svg";
import Home2 from "../../assets/bg-pattern-home-2.svg";
import Home3 from "../../assets/bg-pattern-home-3.svg";
import Storyleft from "../../assets/bg-pattern-home-4-about-3.svg";
import Storyright from "../../assets/bg-pattern-home-5.svg";
import Quotes from "../../assets/icon-quotes.svg";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(500px, 2fr));
`;

// Hero styling
export const StyledHero = styled.div`
  background-image: url(${Home1}), url(${Home2});
  background-repeat: no-repeat;
  background-position:
    -10% 50%,
    90% 100%;
  background-color: var(--green-midnight);
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2em;
  grid-template-rows: 2fr;
  justify-items: center; */
  display: flex;
  gap: 2em;
  padding: 6em;
  align-items: center;
  height: 55vh;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: var(--fs-h1-100);
  & span {
    color: var(--light-coral);
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const SideStyle = styled.div`
  flex-basis: 70%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const Rectangular = styled.div`
  width: 4em;
  height: 0.25em;
  background-color: white;
`;

export const HeroText = styled.p`
  color: white;
  font-weight: 600;
  font-size: var(--fs-body-18);

  @media (max-width: 600px) {
    text-align: center;
  }
`;

// Teams Styled

export const TeamWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  display: flex;
  align-items: start;
  gap: 2em;
  background-image: url(${Home3});
  background-repeat: no-repeat;
  background-position: 110% 100%;
  background-color: var(--green-sacramento);
  padding: 6em;
  height: 55vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  flex-basis: 50%;
`;

export const TeamRectangular = styled(Rectangular)`
  width: 3rem;
  background-color: var(--light-coral);
`;

export const TeamTitle = styled.h2`
  color: white;
  font-size: var(--fs-h2-48);
`;

export const TeamFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex-basis: 60%;
`;

export const FlexTeam = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const StyledTeamCreative = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  > h2 {
    color: var(--light-coral);
    font-size: var(--fs-body-18);
  }

  > p {
    color: white;
  }
`;

// Success stories

export const WrappedStories = styled.div`
  background-color: var(--green-midnight);
  background-image: url(${Storyleft}), url(${Storyright});
  background-repeat: no-repeat;
  background-position:
    top left,
    bottom right;
  height: 65vh;
  display: flex;
  flex-direction: column;
  padding: 6em;
  /* align-items: center;
  justify-content: center; */
`;

export const StoriesTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: var(--fs-h2-48);

  > span {
    color: var(--blue-rapture);
  }
`;

export const StyledStories = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1em;
`;

export const WrappedOwner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* justify-content: center; */
  background-image: url(${Quotes});
  background-repeat: no-repeat;
  background-position: 50% 0;
  gap: 2em;
`;

export const StyledQuotes = styled.p`
  color: white;
  text-align: center;
  padding-top: 2.5em;
`;

export const StyledName = styled(StyledQuotes)`
  padding: 0;
  font-weight: 700;
  color: var(--blue-rapture);
`;

export const StyledPosition = styled(StyledQuotes)`
  padding: 0.5em;
  color: white;
  font-size: 0.97em;
  font-style: italic;
`;

export const StyledFigure = styled.img`
  width: 4em;
  border-radius: 50%;
  border: 2px solid var(--blue-rapture);
`;
