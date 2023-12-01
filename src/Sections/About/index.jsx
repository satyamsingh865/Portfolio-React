import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hey, I'm Satyam, a Web Developer . {""}



            An aspiring Web Developer with skills of creating intuitive and interactive applications.
            I am also dedicated to improving my problem solving skills by solving questions related to DSA.
            I have been trying to learn various skills and languages such as MySQL, Java, Python and many more. 
          </p>
          <p className={styles.desc}>
            I'm a final year student pursuing B.Tech. in Computer
            Science and Engineering at{" "}
            <a href="https://vitbhopal.ac.in/" className={styles.color1}>
              {" "}
              Vellore Institute Of Technology, Bhopal,India.
            </a>{" "}
            
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="./images/pfp.png"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
