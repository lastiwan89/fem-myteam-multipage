import TheVerge from "../../assets/logo-the-verge.png";
import TheJakarta from "../../assets/logo-jakarta-post.png";
import TheGuardian from "../../assets/logo-the-guardian.png";
import TechRadar from "../../assets/logo-tech-radar.png";
import GadgetsNow from "../../assets/logo-gadgets-now.png";

export default function Clients() {
  return (
    <div className="client">
      <h2 className="client__title">Some of our clients</h2>
      <div className="client__logo">
        <img
          src={TheVerge}
          alt="TheVerge logo"
          className="client__logo--item"
        />
        <img
          src={TheJakarta}
          alt="TheJakarta logo"
          className="client__logo--item"
        />
        <img
          src={TheGuardian}
          alt="TheGuardian logo"
          className="client__logo--item"
        />
        <img
          src={TechRadar}
          alt="TechRadar logo"
          className="client__logo--item"
        />
        <img
          src={GadgetsNow}
          alt="GadgetsNow logo"
          className="client__logo--item"
        />
      </div>
    </div>
  );
}
