import styles from "../styles/Homepage.module.css";

function HomePage() {
  return (
    <div className={styles["homepage-container"]}>
      <main className={styles["main-content"]}>
        <section className={styles["section"]}>
          <div className={styles["text-content"]}>
            <small>Home made Easier</small>
            <h2>
              Find all the help you need with your home-related problems, while
              also being able to provide solutions to others problems.
            </h2>
            <div className={styles["buttons"]}>
              <button className={styles["get-started"]}>Get Started</button>
              <button className={styles["learn-more"]}>Learn More</button>
            </div>
          </div>
          <div className={styles["image-placeholder"]}>
            <div className={styles["placeholder"]}></div>
          </div>
        </section>

        <section className={styles["section"]}>
          <div className={styles["image-placeholder"]}>
            <div className={styles["placeholder"]}></div>
          </div>
          <div className={styles["text-content"]}>
            <h2>Unlock Your Potential and Earn Money</h2>
            <p>
              Working as an EzFixer offers you a flexible earning opportunity.It
              gives you the opportunity to utilize your skills/credentials to
              earn money. Whether you are a Professional, a Handy-worker or just
              a College student with a subset of skills looking for ways to make
              money, there are opportunities waiting for you.
            </p>
            <div className={styles.earnings}>
              <div>
                <h1 style={{ fontSize: "48px", fontWeight: "800" }}>50%</h1>
                <p>Flexible Work Schedule</p>
              </div>
              <div>
                <h1 style={{ fontSize: "48px", fontWeight: "800" }}>50%</h1>
                <p>Competitive Earning Potential</p>
              </div>
            </div>

            <div className={styles["buttons"]}>
              <button className={styles["get-started"]}>Learn More</button>
              <button className={styles["learn-more"]}>Sign Up</button>
            </div>
          </div>
        </section>

        <section className={styles["section"]}>
          <div className={styles["text-content"]}>
            <h2>Discover the Benefits of Joining Ezfix as a professional</h2>
            <p>
              Joining Ezfix a professional offers you a flexible work, a wide
              variety of tasks, and and income opportunites
            </p>
            <div className={styles.benefits}>
              <div>
                <i className="bi bi-tools"></i>Flexible Work Schedule
              </div>
              <div>
                <i className="bi bi-tools"></i>Diverse Task Selection
              </div>
              <div>
                <i className="bi bi-tools"></i>Lucrative Income Potential
              </div>
            </div>
          </div>
          <div className={styles["image-placeholder"]}>
            <div className={styles["placeholder"]}></div>
          </div>
        </section>

        <section className={`${styles["section"]} ${styles.services}`}>
          <div>
            <div className={styles["image-placeholder"]}>
              <div className={styles["placeholder"]}></div>
            </div>
            <div
              className={`${styles["text-content"]} ${styles["services-text-content"]}`}
            >
              <div>
                <h3>Find Trusted Home Professionals</h3>
                <p>
                  Ezfix offers a wide range of services, from assisting with
                  home buying to handling simple repairs. Our platform connects
                  you with trusted and reputable professionals who can help with
                  any home-related problem.
                </p>
              </div>
              <div>
                <h3>Earn Money With Your Skills</h3>
                <p>
                  Not only can you find help on Ezfix, but you can also use your
                  skills to make money. Whether you&apos;re a handyman or have
                  expertise in a specific field, you can take on home-related
                  tasks and earn money while helping others.
                </p>
              </div>

              <div>
                <h3>Wide Range Of Services</h3>
                <p>
                  Ezfix offers a diverse range of services to meet all your
                  home-related needs. From major renovations to minor repairs,
                  our platform connects you with professionals who can handle
                  any job.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.options}`}>
            <h2>Find Trusted Professionals/Jobs on Ezfix</h2>
            <small>Start using Ezfix Today</small>
          </div>
          <div className={styles["buttons"]}>
            <button className={styles["learn-more"]}>Sign Up</button>
            <button className={styles["get-started"]}>Be Pro</button>
          </div>

          <div className={`${styles.options}`}>
            <h2>Stay Updated with Home Maintenance Tips</h2>
            <small>Subscribe to our newsletter for helpful tips and updates</small>
          </div>
          {/* <div className={styles["buttons"]}>
            <button className={styles["learn-more"]}>Sign Up</button>
            <button className={styles["get-started"]}>Be Pro</button>
          </div> */}

        </section>
      </main>
    </div>
  );
}

export default HomePage;