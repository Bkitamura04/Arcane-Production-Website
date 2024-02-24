import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="mission" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className="text-gradient">Arcane Productions</span>{" "}
        <br className="sm:block hidden" /> Mission.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Arcane Productions, our mission is to empower solar energy businesses
        by harnessing the power of innovative marketing strategies on social
        media platforms. We are dedicated to creating sustainable growth for our
        clients by generating high-quality leads, engaging with potential
        customers, and fostering positive brand recognition. We strive to be the
        leading marketing partner for solar energy companies, driving change
        towards a cleaner, greener, and more sustainable future.​
      </p>
    </div>
  </section>
);

export default Billing;
