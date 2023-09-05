import Person from "../assets/icon-person.svg";
import Cog from "../assets/icon-cog.svg";
import Chart from "../assets/icon-chart.svg";
import {
  ContactWrapper,
  ContactSection,
  StyledTitle,
  StyledTitleSub,
  FeatureSection,
  Gear,
  ContactForm,
  StyledInput,
  StyledInputTextArea,
  StyledButton,
} from "../components/style/Contact.styled";

export default function Contact() {
  return (
    <ContactWrapper>
      <ContactSection>
        <StyledTitle>Contact</StyledTitle>
        <StyledTitleSub>Ask us about</StyledTitleSub>
        <FeatureSection>
          <Gear>
            <img src={Person} alt="person" />
            <p>The quality of our talent network</p>
          </Gear>
          <Gear>
            <img src={Cog} alt="cog" />
            <p>Usage & implementation of our software</p>
          </Gear>
          <Gear>
            <img src={Chart} alt="chart" />
            <p>How we help drive innovation</p>
          </Gear>
        </FeatureSection>
      </ContactSection>
      <ContactForm>
        <StyledInput type="text" name="name" id="name" placeholder="Name" />
        <StyledInput
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <StyledInput
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
        />
        <StyledInput type="text" name="title" id="title" placeholder="Title" />
        <StyledInputTextArea
          type="text"
          name="message"
          id="message"
          placeholder="Message"
        />
        <StyledButton className="contact__form--button" type="submit">
          submit
        </StyledButton>
      </ContactForm>
    </ContactWrapper>
  );
}
