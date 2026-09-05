import { fundingRanges, focusIndustries } from '../data/content'
import styles from './FoundingFocus.module.css'

// Two-tone inline icons: navy for the main outline, orange for the
// accent detail. Colors are hardcoded via CSS variables inside each
// icon (not currentColor), since each icon needs two colors at once.
const icons = {
  chip: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="12" y="12" width="24" height="24" rx="4" stroke="var(--orange)" strokeWidth="2" />
      <text x="24" y="28.5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--navy)" fontFamily="Georgia, serif">AI</text>
      <path d="M18 6v6M24 6v6M30 6v6M18 36v6M24 36v6M30 36v6M6 18h6M6 24h6M6 30h6M36 18h6M36 24h6M36 30h6" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="7" y="9" width="24" height="10" rx="2" stroke="var(--navy)" strokeWidth="2" />
      <rect x="7" y="22" width="24" height="10" rx="2" stroke="var(--navy)" strokeWidth="2" />
      <circle cx="12" cy="14" r="1" fill="var(--navy)" />
      <circle cx="12" cy="27" r="1" fill="var(--navy)" />
      <path d="M34 16a6 6 0 016 6c0 3-2 5-5 5H24" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M24 6l14 5v10c0 9-6 15-14 17-8-2-14-8-14-17V11l14-5z" stroke="var(--navy)" strokeWidth="2" />
      <path d="M12 19c5-2 8-2 12 0M24 19c5-2 8-2 12 0" stroke="var(--navy)" strokeWidth="1.3" />
      <path d="M24 15l2.4 4.8 5.3.7-3.8 3.7.9 5.2-4.8-2.5-4.8 2.5.9-5.2-3.8-3.7 5.3-.7L24 15z" fill="var(--orange)" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M8 24a16 16 0 0127-11.3" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 24a16 16 0 01-27 11.3" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M33 10l1.3 5.2-5.2-1" stroke="var(--navy)" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M15 38l-1.3-5.2 5.2 1" stroke="var(--navy)" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M26 15l-6 10h5l-2 8 8-11h-5l2-7z" fill="var(--orange)" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="21" cy="24" r="15" stroke="var(--navy)" strokeWidth="2" />
      <path d="M21 9a20 20 0 010 30M21 9a20 20 0 000 30M6 18h30M6 30h30" stroke="var(--navy)" strokeWidth="1.2" />
      <path d="M31 28c3-1 6 1 6 4-3 1-6-1-6-4z" fill="var(--orange)" />
    </svg>
  ),
  ev: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M8 30v-7l4-7h18l5 7h3a2 2 0 012 2v5" stroke="var(--navy)" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="15" cy="32" r="3" stroke="var(--navy)" strokeWidth="2" />
      <circle cx="33" cy="32" r="3" stroke="var(--navy)" strokeWidth="2" />
      <path d="M22 13l-4 6h4l-2 5 6-7h-4l2-4z" fill="var(--orange)" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M8 38V22l7 4v-4l7 4v-4l7 4v-8l8-6v26H8z" stroke="var(--navy)" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="34" cy="31" r="4" stroke="var(--orange)" strokeWidth="2" />
      <path d="M34 25v2M34 35v2M28 31h2M38 31h2" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  robot: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="28" width="12" height="10" rx="2" stroke="var(--navy)" strokeWidth="2" />
      <path d="M18 30l14-7" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 23l3-5" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="37" cy="15" r="3" fill="var(--orange)" />
      <path d="M24 24v-7l6-4" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  dna: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M14 8c0 12 20 12 20 24M34 8c0 12-20 12-20 24" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16h16M15 24h18M16 32h16" stroke="var(--navy)" strokeWidth="1.2" />
      <path d="M28 30c2-2 5-2 6 1-2 2-5 2-6-1z" fill="var(--orange)" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M24 40V22" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 24c0-6 5-10 12-10 0 6-5 10-12 10z" fill="var(--orange)" />
      <path d="M24 28c0-5-4-8-10-8 0 5 4 8 10 8z" stroke="var(--navy)" strokeWidth="2" />
      <path d="M10 40h28" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

const rangeIcons = {
  light: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M24 6c6 4 8 10 8 16 0 6-3 10-8 14-5-4-8-8-8-14 0-6 2-12 8-16z" stroke="var(--orange)" strokeWidth="2" />
      <circle cx="24" cy="20" r="2.4" fill="var(--orange)" />
      <path d="M18 28l-5 5M30 28l5 5M20 34l-2 6M28 34l2 6" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="12" y="26" width="4" height="8" fill="var(--orange)" />
      <rect x="20" y="20" width="4" height="14" fill="var(--orange)" />
      <rect x="28" y="14" width="4" height="20" fill="var(--orange)" />
      <path d="M14 16l8-6 6 4 8-8" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 6h6v6" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function FundingFocus() {
  return (
    <section id="focus" className={styles.section}>
      <div className="wrap">
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              We are now capable of working with companies seeking to raise
              capital within <span className={styles.highlight}>these funding ranges</span>
            </h2>
            <div className={styles.underline} />
          </div>

          <div className={styles.rangeCards}>
            {fundingRanges.map((item) => (
              <div
                key={item.tag}
                className={`${styles.rangeCard} ${
                  item.variant === 'dark' ? styles.rangeCardDark : ''
                }`}
              >
                <div className={styles.rangeIconCircle}>{rangeIcons[item.variant]}</div>
                <div className={styles.rangeTag}>{item.tag}</div>
                <div className={styles.rangeValue}>{item.range}</div>
                <p className={styles.rangeDescription}>
                  We help companies raise capital in{' '}
                  <span className={styles.rangeHighlight}>this range</span>.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dividerRow}>
          <span className={styles.dotOrange} />
          <span className={styles.dividerLineOrange} />
          <span className={styles.dividerLabel}>Focus Industries</span>
          <span className={styles.dividerLineNavy} />
          <span className={styles.dotNavy} />
        </div>

        <div className={styles.industryGrid}>
          {focusIndustries.map((industry) => (
            <div key={industry.title} className={styles.industryCard}>
              <div className={styles.industryIcon}>{icons[industry.icon]}</div>
              <div className={styles.industryTitle}>{industry.title}</div>
              <div className={styles.industryUnderline} />
              <p className={styles.industryDescription}>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}