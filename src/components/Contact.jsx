import Section from './Section'
import { contact } from '../data/content'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Get in touch">
      <div className={styles.box}>
        <div className={styles.item}>
          <div className={styles.label2}>Email</div>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <div className={styles.alwaysOn}>
            <span className={styles.dotLive} />
            Monitored 24 / 7
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label2}>1:1 online meet</div>
          <div className={styles.val}>
            <a href={contact.meetingUrl} target="_blank" rel="noopener noreferrer">
              topmate.io/nilambar_giri
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.label2}>Elsewhere</div>
          <div className={styles.val}>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
