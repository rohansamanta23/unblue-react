import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.eyebrow}>Pitch Decks · LinkedIn Growth · Fundraising</div>

        <h1 className={styles.heading}>
          A boutique consultancy for <em>early-stage</em> founders.
        </h1>

        <p className={styles.subtext}>
          Unblue helps founders become investor-ready — through fundraising
          advisory, pitch deck development, and founder positioning on
          LinkedIn.
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
