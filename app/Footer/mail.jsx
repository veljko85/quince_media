import styles from "./footer.module.css";
import Image from "next/image";

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
        <div
          style={{
            width: "15rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "3rem",
            fontSize: "small",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              width: "80%",
              height: "100%",
              padding: "2%",
            }}
          >
            <div>
              protected by <strong>reCAPTCHA</strong>
            </div>
            <div>
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                target="_blank"
              >
                Privacy
              </a>
              -
              <a
                href="https://www.google.com/intl/en/policies/terms/"
                target="_blank"
              >
                Terms
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "whitesmoke",
              width: "20%",
              height: "100%",
            }}
          >
            <Image
              src="/images/socialIcons/recaptcha.svg"
              width={30}
              height={30}
              alt="reCAPTCHA"
            ></Image>
          </div>
        </div>

        <button style={{ width: "50%", height: "10%" }}>Submit</button>
      </form>
    </>
  );
}
