import Person from "../../assets/icon-person.svg";
import Cog from "../../assets/icon-cog.svg";
import Chart from "../../assets/icon-chart.svg";
import { Section } from "../style/Features";

export default function Features() {
  return (
    <Section>
      <div>
        <div className="features__rect"></div>
        <h2 className="features__title">
          Build & manage distributed teams like no one else.
        </h2>
      </div>
      <div className="features__list">
        <div className="features__list__item">
          <img src={Person} alt="person" />
          <div>
            <h2>Experienced Individuals</h2>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
        </div>
        <div className="features__list__item">
          <img src={Cog} alt="cog" />
          <div>
            <h2>Easy to Implement</h2>
            <p>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
        </div>
        <div className="features__list__item">
          <img src={Chart} alt="chart" />
          <div>
            <h2>Enhanced Productivity</h2>
            <p>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
