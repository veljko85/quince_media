"use client";
import styles from "./footer.module.css";
import EmailPart from "./mail";
export default function FooterB() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.mainPart}>
          <div className={styles.services}>Services</div>
          <div className={styles.compani}>Compani</div>
          <div className={styles.contactUs}>
            <EmailPart></EmailPart>
          </div>
        </div>
        <div className={styles.socials}>Socials</div>
      </footer>
    </>
  );
}
