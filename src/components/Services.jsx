import Section from './Section'
import { services } from '../data/content'
import styles from './Services.module.css'

export default function Services() {
  return (
    <Section id="services" label="Services" title="What founders come to us for">
      <table className={styles.table}>
        <tbody>
          {services.map((service) => (
            <tr key={service.title}>
              <td className={styles.titleCell}>{service.title}</td>
              <td>{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  )
}
