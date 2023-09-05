import Person from "../assets/icon-person.svg";
import Cog from "../assets/icon-cog.svg";
import Chart from "../assets/icon-chart.svg";
import founderData from "./founderData";
import {
  Wrapper,
  StyledHero,
  Title,
  SideStyle,
  Rectangular,
  HeroText,
  TeamWrapper,
  TitleWrapper,
  TeamRectangular,
  TeamTitle,
  TeamFlow,
  FlexTeam,
  StyledTeamCreative,
  WrappedStories,
  StoriesTitle,
  StyledStories,
  WrappedOwner,
  StyledQuotes,
  StyledName,
  StyledPosition,
  StyledFigure,
} from "./style/Home.styled";

export default function Home() {
  return (
    <Wrapper>
      <StyledHero>
        <Title>
          Find the best <span>talent</span>
        </Title>
        <SideStyle>
          <Rectangular></Rectangular>
          <HeroText>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </HeroText>
        </SideStyle>
      </StyledHero>
      <TeamWrapper>
        <TitleWrapper>
          <TeamRectangular></TeamRectangular>
          <TeamTitle>
            Build & manage distributed teams like no one else.
          </TeamTitle>
        </TitleWrapper>
        <TeamFlow>
          <FlexTeam>
            <img src={Person} alt="person" />
            <StyledTeamCreative>
              <h2>Experienced Individuals</h2>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </StyledTeamCreative>
          </FlexTeam>
          <FlexTeam>
            <img src={Cog} alt="cog" />
            <StyledTeamCreative>
              <h2>Easy to Implement</h2>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </StyledTeamCreative>
          </FlexTeam>
          <FlexTeam>
            <img src={Chart} alt="chart" />
            <StyledTeamCreative>
              <h2>Enhanced Productivity</h2>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </StyledTeamCreative>
          </FlexTeam>
        </TeamFlow>
      </TeamWrapper>
      <WrappedStories>
        <StoriesTitle>
          Delivering real results for top <br />
          companies. Some of our <span>success stories.</span>
        </StoriesTitle>
        <StyledStories>
          {founderData.map((items, index) => (
            <WrappedOwner key={index}>
              <StyledQuotes>{items.quotes}</StyledQuotes>
              <div>
                <StyledName>{items.name}</StyledName>
                <StyledPosition>{items.title}</StyledPosition>
              </div>
              <StyledFigure src={items.url} alt={items.name} />
            </WrappedOwner>
          ))}
        </StyledStories>
      </WrappedStories>
    </Wrapper>
  );
}
