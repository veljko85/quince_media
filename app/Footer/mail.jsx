import styles from "./footer.module.css";

export default function EmailPart() {
  return (
    <>
      <h2 className={styles.title}>Contact us</h2>
      <form action="" className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>

        <div className={styles.input}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" />
        </div>

        <div className={styles.input}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name=""
            id="messge"
            cols="30"
            rows="10"
            style={{ width: "80%" }}
          ></textarea>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
