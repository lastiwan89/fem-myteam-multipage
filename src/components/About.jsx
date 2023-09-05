import Nikita from "../assets/avatar-nikita.jpg";
import Cris from "../assets/avatar-christian.jpg";
import Cruz from "../assets/avatar-cruz.jpg";
import Drake from "../assets/avatar-drake.jpg";
import Griffin from "../assets/avatar-griffin.jpg";
import Cross from "../assets/icon-cross.svg";
import Twitter from "../assets/icon-twitter.svg";
import Linkdln from "../assets/icon-linkedin.svg";
import TheVerge from "../assets/logo-the-verge.png";
import TheJakPost from "../assets/logo-jakarta-post.png";
import Guardian from "../assets/logo-the-guardian.png";
import TechRadar from "../assets/logo-tech-radar.png";
import GadgetsNow from "../assets/logo-gadgets-now.png";
import {
  AboutWrapper,
  StyledHero,
  StyledTitle,
  StyledAside,
  StyledRect,
  StyledText,
  StyledDirector,
  DirectorList,
  DirectorTitle,
  DirectorWrapper,
  StyledCross,
  StyledCrossRotate,
  StyledFigure,
  FigureName,
  FigurePosition,
  FigureQuote,
  FigureSocial,
  ClientWrapper,
  LogoWrapper,
  ClientLogo,
} from "./style/About.styled";

export default function About() {
  return (
    <AboutWrapper>
      <StyledHero>
        <StyledTitle>About</StyledTitle>
        <StyledAside>
          <StyledRect></StyledRect>
          <StyledText>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </StyledText>
        </StyledAside>
      </StyledHero>
      <StyledDirector>
        <DirectorTitle>Meet the directors</DirectorTitle>
        <DirectorList>
          <DirectorWrapper>
            <StyledFigure src={Nikita} alt="icon" />
            <FigureName>Nikita Marks</FigureName>
            <FigurePosition>Founder & CEO</FigurePosition>
            <StyledCross src={Cross} alt="cros icon" />
          </DirectorWrapper>
          <DirectorWrapper>
            <StyledFigure src={Cris} alt="icon" />
            <FigureName>Cristian Duncan</FigureName>
            <FigurePosition>Co-Founder COO</FigurePosition>
            <StyledCross src={Cross} alt="cros icon" />
          </DirectorWrapper>
          <DirectorWrapper>
            <StyledFigure src={Cruz} alt="icon" />
            <FigureName>Cruz Hamer</FigureName>
            <FigurePosition>Co-Founder & CTO</FigurePosition>
            <StyledCross src={Cross} alt="cros icon" />
          </DirectorWrapper>
          <DirectorWrapper>
            <StyledFigure src={Drake} alt="icon" />
            <FigureName>Drake Heaton</FigureName>
            <FigurePosition>Business Development Lead</FigurePosition>
            <StyledCross src={Cross} alt="cros icon" />
          </DirectorWrapper>
          <DirectorWrapper>
            <StyledFigure src={Griffin} alt="icon" />
            <FigureName>Griffin Wise</FigureName>
            <FigurePosition>Lead Marketing</FigurePosition>
            <StyledCross src={Cross} alt="cros icon" />
          </DirectorWrapper>
          <DirectorWrapper>
            <FigureName>Aden Allan</FigureName>
            <FigureQuote>
              “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
            </FigureQuote>
            <FigureSocial>
              <img src={Twitter} alt="icon twitter" />
              <img src={Linkdln} alt="icon linkedln" />
            </FigureSocial>
            <StyledCrossRotate src={Cross} alt="cros icon" />
          </DirectorWrapper>
        </DirectorList>
      </StyledDirector>
      <ClientWrapper>
        <DirectorTitle>Some of our clients</DirectorTitle>
        <LogoWrapper>
          <ClientLogo src={TheVerge} alt="The Verge" />
          <ClientLogo src={TheJakPost} alt="The Jakarta Post" />
          <ClientLogo src={Guardian} alt="The Guardian" />
          <ClientLogo src={TechRadar} alt="Tech Radar" />
          <ClientLogo src={GadgetsNow} alt="Gadgets Now" />
        </LogoWrapper>
      </ClientWrapper>
    </AboutWrapper>
  );
}
