import Section from "./Section";
import { stats, sectors } from "../data/content";
import styles from "./Snapshot.module.css";

export default function Snapshot() {
  return (
    <Section
      id='work'
      label='A Snapshot Of Our Work'
      title='The numbers so far'
    >
      <div className={styles.statsLedger}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.row}>
            <span className={styles.statLabel}>{stat.label}</span>
            <span className={styles.statValue}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* <div className={styles.sectorTags}>
        {sectors.map((sector) => (
          <span key={sector}>{sector}</span>
        ))}
      </div> */}

      <div className={styles.sectorList}>
        {sectors.map((sector) => (
          <div key={sector} className={styles.sectorRow}>
            <span className='wheel' />
            <span>{sector}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
