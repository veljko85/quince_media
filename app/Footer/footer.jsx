"use client";
import styles from "./footer.module.css";
import EmailPart from "./mail";
import Link from "next/link";
import Image from "next/image";
export default function FooterB() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.mainPart}>
          <div className={styles.services}>
            <h2 style={{ marginBottom: "5%" }}>Services</h2>
            <Link href="/" className={styles.links}>
              <p>3D Product Animation</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>3D Product Image Renders For Amazon Listing</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>3D Interior & Exterior Rendering</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>AR Filters For Snapchat & Instagram</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>Motion Graphics Design</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>Esports And Gaming Motion Graphics</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>Recent Works</p>
            </Link>
            <div className={styles.socialsIcoBox}>
              <Link href="/" className={styles.links}>
                <Image
                  src="/images/socialIcons/facebookU.svg"
                  width={50}
                  height={50}
                  alt="Facebook"
                ></Image>
              </Link>
              <Link href="/" className={styles.links}>
                <Image
                  src="/images/socialIcons/twitterU.svg"
                  width={50}
                  height={50}
                  alt="Twitter"
                ></Image>
              </Link>
              <Link href="/" className={styles.links}>
                <Image
                  src="/images/socialIcons/youtubeU.svg"
                  width={50}
                  height={50}
                  alt="Youtube"
                ></Image>
              </Link>
              <Link href="/" className={styles.links}>
                <Image
                  src="/images/socialIcons/instagramU.svg"
                  width={50}
                  height={50}
                  alt="Instagram"
                ></Image>
              </Link>
            </div>
          </div>
          <div className={styles.compani}>
            <h2 style={{ marginBottom: "5%" }}>Company</h2>
            <Link href="/" className={styles.links}>
              <p>Meet the Team</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>Meet the Captain</p>
            </Link>
            <Link href="/" className={styles.links}>
              <p>Our Workflow</p>
            </Link>
            <Link href="/contactUs" className={styles.links}>
              <p>Contact Us</p>
            </Link>
            <Link href="/privacyPolicy" className={styles.links}>
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div className={styles.contactUs}>
            <EmailPart></EmailPart>
          </div>
        </div>
        <div className={styles.socials}>
          <Image
            src="/images/socialIcons/quince.svg"
            width={100}
            height={50}
            alt="Quince"
          ></Image>
          <div>© 2012-2023 by Quince Creative. All Rights Reserved.</div>
          <Image
            src="/images/socialIcons/google.svg"
            width={100}
            height={50}
            alt="Google Review"
          ></Image>
        </div>
      </footer>
    </>
  );
}
