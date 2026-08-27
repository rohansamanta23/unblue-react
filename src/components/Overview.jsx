import Section from './Section'
import { overviewLedger } from '../data/content'
import styles from './Overview.module.css'

export default function Overview() {
  return (
    <Section id="about" label="Overview" title="Who we work with">
      <div className={styles.grid}>
        <div>
          <p>
            Unblue is a boutique consultancy for early-stage founders. We
            help companies become investor-ready through fundraising
            advisory, pitch deck development, and founder positioning on
            LinkedIn.
          </p>
          <p>
            Our work is primarily focused on founders building in core AI
            infrastructure, ClimateTech, DeepTech, HealthTech, and
            SpaceTech — while selectively partnering with founders from
            other high-growth sectors.
          </p>
        </div>

        <div className={styles.ledger}>
          {overviewLedger.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
