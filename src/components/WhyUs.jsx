import Section from "./Section";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <Section id='why' label='Why Unblue' title='Why founders choose us'>
      <div className={styles.whyText}>
        <p>
          Most fundraising consultants take on a client and then go searching
          for investors. We work differently —{" "}
          <em>
            our network spans VCs with deep-tech expertise, micro-VCs, and
            sector-agnostic investors, and we also work with one of India's
            leading banks on debt and banking requirements
          </em>
          . That gives founders access to a broader capital ecosystem rather
          than a single funding route, and lets us evaluate fit before an
          engagement begins — often with an honest initial assessment within 1–2
          weeks.
        </p>

        {/* <p>
          If we believe there is a strong fit, we move forward. If we don't, we
          say so — founders deserve clarity, not months of uncertainty.
        </p> */}

        <div className={styles.pricingBox}>
          <div className={styles.pricingTitle}>How we're compensated</div>
          <p className={styles.pricingLine}>
            Fundraising engagements carry{" "}
            <strong>no upfront consulting fee</strong>. We're compensated with a{" "}
            <strong>3% success fee</strong> upon a successful raise.
          </p>
          <p className={styles.pricingLineLast}>
            Pitch deck engagements are priced separately, based on the stage,
            complexity, and requirements of the business.
          </p>
        </div>

        <p>
          We're intentionally selective, and we take on a limited number of
          LinkedIn clients each year. Not every founder is the right fit for our
          investor network, and not every engagement is the right fit for Unblue
          — that selectivity is what lets us move fast, communicate honestly,
          and respect everyone's time.
        </p>
      </div>
    </Section>
  );
}
