import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.eyebrow}>Deeptech · LinkedIn · Fundraising</div>

        <h1 className={styles.heading}>
          A boutique consulting firm for <em>DeepTech</em> founders.
        </h1>

        <p className={styles.subtext}>
          Unblue provides fundraising consulting to DeepTech founders and LinkedIn management to founders, professionals, and companies. We help you raise capital, build your network, and grow your business.
        </p>

        <a className={styles.ctaBtn} href="#contact">
          Start a conversation →
        </a>

        <div className={styles.cartRule}>
          <span className="wheel" />
          <span className={styles.bar} />
          <span className="wheel" />
        </div>
      </div>
    </section>
  )
}
