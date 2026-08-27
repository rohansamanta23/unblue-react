import styles from './Section.module.css'

/**
 * Shared layout wrapper for every content section on the page.
 * Handles the id (used by nav anchors), the eyebrow label, heading,
 * and the divider rule, so individual sections only need to supply content.
 */
export default function Section({ id, label, title, children, noBorder = false }) {
  return (
    <section id={id} className={`${styles.section} ${noBorder ? styles.noBorder : ''}`}>
      <div className="wrap">
        {label && <div className="label">{label}</div>}
        {title && <h2 className={styles.heading}>{title}</h2>}
        {(label || title) && <div className="sectionRule" />}
        {children}
      </div>
    </section>
  )
}
