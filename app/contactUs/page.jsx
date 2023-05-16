import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.space}>
          <div className={styles.spaceGradient}>
            <div className={styles.spaceText}>
              <h2
                style={{
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: "4rem",
                }}
              >
                Welcome
              </h2>
              <div>to our 3d galaxy</div>
            </div>
            <Image
              src="/images/space/astronaut.png"
              width={420}
              height={500}
              alt="Astronaut"
              style={{ position: "relative", top: "50vh", left: "-40vw" }}
            />
            <Image
              src="/images/space/saturn.png"
              width={350}
              height={200}
              alt="Saturn"
            />
          </div>
        </div>
        <div className={styles.mainPart}>
          <div className={styles.contacts}>
            <div className={styles.whatsApp}>
              <div className={styles.whatsAppBox}>
                <div>
                  <h2>
                    Best, safest and fastest way to reach us out and to get a
                    quickest reply is to message us via WhatsApp or via email:
                    contact@quincemedia.com
                  </h2>
                </div>
                <div>
                  But why the heck WhatsApp? Recently we noticed that a lot of
                  our messages end up in our customers spam folder and no one
                  likes when that happen. WhatsApp is safest way for us to get
                  your messages immediately.
                </div>
                <button className={styles.whatsAppBtn}>
                  <Image
                    src="/images/socialIcons/whatsApp.svg"
                    width={20}
                    height={20}
                    alt="WhatsApp"
                  ></Image>
                  Contact us via WhatsApp
                </button>
              </div>
            </div>
            <div className={styles.contactsSide}>
              <h2 className={styles.contactSideContactType}>Email</h2>
              <div className={styles.contactSideInformation}>
                <a href="mailto:contact@quincemedia.com">
                  contact@quincemedia.com
                </a>
              </div>
              <h2 className={styles.contactSideContactType}>Address</h2>
              <div className={styles.contactSideInformation}>
                <b>Quince Creative</b> <br />
                Jove Kursule bb 37260 Varvarin Serbia
              </div>
              <h2 className={styles.contactSideContactType}>Business Hours</h2>
              <div className={styles.contactSideInformation}>
                From 09:00-15:00 UTC+01:00 Monday - Friday
              </div>
            </div>
          </div>
          <div className={styles.sendBox}>
            <div className={styles.send}>
              <div className={styles.sendTextTop}>
                <h2>
                  If you prefer just regular contact form we got one below. Just
                  fill it in and let it fly. We will try to get back to you as
                  quick as we possible.
                </h2>
              </div>
              <div className={styles.formPart}>
                <form action="" className={styles.form}>
                  <label htmlFor="name">Your Name </label>
                  <input type="text" id="name" />
                  <label htmlFor="email">Your Emial</label>
                  <input type="email" name="email" id="email" />
                  <label htmlFor="tel">Your Phone - International Format</label>
                  <input type="tel" name="tel" id="tel" />
                  <label htmlFor="checkbox">You're Interested in? </label>
                  <div className={styles.checkboxBox}>
                    <div>
                      <input type="checkbox" name="checkBox" id="checkbox1" />
                      <label htmlFor="checkbox1">
                        3D/2D Logo Animation Video
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="checkBox" id="checkbox1" />
                      <label htmlFor="checkbox2">
                        3D Product Animation Video
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" name="checkBox" id="checkbox1" />
                      <label htmlFor="checkbox3">Motion Graphics Promo</label>
                    </div>
                    <div>
                      <input type="checkbox" name="checkBox" id="checkbox1" />
                      <label htmlFor="checkbox4">Logo Design</label>
                    </div>
                    <div>
                      <input type="checkbox" name="checkBox" id="checkbox1" />
                      <label htmlFor="checkbox5">Other</label>
                    </div>
                  </div>
                  <label htmlFor="message">Your Message </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <label htmlFor="budget">Your Budget </label>
                  <select name="budget" id="budget">
                    <optgroup>
                      <option value="---">---</option>
                      <option value="$100-$250">$100-$250</option>
                      <option value="$250-$500">$250-$500</option>
                      <option value="$500-$1000">$500-$1000</option>
                      <option value="$1000+">$1000+</option>
                    </optgroup>
                  </select>
                  <label htmlFor="file">File Upload </label>
                  <input type="file" name="file" id="file" />
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
                  <button>Send</button>
                </form>
              </div>
              <div className={styles.sendTextBottom}>
                <Link href={"/"}>
                  <h2>
                    What's next? Interested in our workflow? Click here to find
                    out more on how we design our product animation videos!
                  </h2>
                </Link>
              </div>
            </div>
            <div className={styles.sendSide}></div>
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.reviewTitle}>
            <h2>What others say about us</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.imageBox}>
            <div
              className={styles.image}
              style={{ backgroundImage: ' url("/images/reviews/review1.png")' }}
            ></div>
            <div
              className={styles.image}
              style={{ backgroundImage: ' url("/images/reviews/review2.png")' }}
            ></div>
            <div
              className={styles.image}
              style={{ backgroundImage: ' url("/images/reviews/review3.png")' }}
            ></div>
            <div
              className={styles.image}
              style={{ backgroundImage: ' url("/images/reviews/review4.png")' }}
            ></div>
            <div
              className={styles.image}
              style={{ backgroundImage: ' url("/images/reviews/1.png")' }}
            ></div>
          </div>
          <button>Read All Reviews</button>
        </div>
      </div>
    </>
  );
}
