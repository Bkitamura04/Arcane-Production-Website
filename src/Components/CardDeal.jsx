import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What is our <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Demo</span> call?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our demo call is a free 15-minute consultation with Josh Rowe, tailored
        for solar energy companies seeking to grow their business and engage
        potential customers through effective Facebook management.
      </p>
      <Button styles="mt-10" sectionId="contact" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
