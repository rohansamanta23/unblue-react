import Section from "./Section";
import { overviewLedger } from "../data/content";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <Section id='about' label='Overview' title='Who we work with'>
      <div className={styles.grid}>
        <div>
          <p>
            Unblue is a boutique consulting firm working with DeepTech founders
            when they are preparing to raise capital. We consult on fundraising
            strategy, investor positioning, and how a technically complex
            business is presented to the people who may back it.
          </p>
          <br/>
          <p>
            Our LinkedIn practice is broader. We manage LinkedIn for founders,
            professionals, and organisations — shaping what they say, how they
            say it, and how their expertise is seen over time.
          </p>
        </div>

        <div className={styles.ledger}>
          {overviewLedger.map((item) => (
            <div key={item.label}>
              <span><b>{item.label}</b></span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
