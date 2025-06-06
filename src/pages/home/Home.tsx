import { Header } from "../../components/header";
import style from "./Home.module.scss";

import resume from "../../assets/resume_1.png";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <Header />
        <div className={style.heroSection}>
          <div className={style.introduction}>
            <div>
              <p className={style.hi}>Hi, I am</p>
              <p className={style.name}>Andrey Ivanov</p>
              <p className={style.title}>Frontend Developer</p>
            </div>
            <div className={style.linkIcons}>
              <img src={facebook}></img>
              <img src={insta}></img>
              <img src={linkedin}></img>
            </div>
          </div>
          <div className={style.imageContainer}>
            <img className={style.headshot} src={resume}></img>
          </div>
        </div>
      </div>
      <div className={style.summary}>
        <p className={style.motivation}>My Motivation</p>
        <p className={style.motivationText}>
          Frontend development is where creativity meets code. You're not just
          building websites—you're crafting experiences, translating design into
          dynamic, user-friendly interfaces that connect people to technology.
          Every interaction, animation, and layout decision matters. As a
          frontend developer, you turn abstract ideas into tangible realities
          that users touch and feel. Keep refining your craft, stay curious, and
          push boundaries. Your work shapes how the world sees and uses the
          web—clean, accessible, and inspiring.
        </p>
      </div>
    </>
  );
}
