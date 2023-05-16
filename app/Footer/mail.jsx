import styles from "./footer.module.css";

export default function EmailPart() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/route", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <>
      <h2 className={styles.title}>Contact us</h2>
      <form onSubmit={handleOnSubmit} className={styles.form}>
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

        <button style={{ width: "50%", height: "10%" }}>Submit</button>
      </form>
    </>
  );
}
