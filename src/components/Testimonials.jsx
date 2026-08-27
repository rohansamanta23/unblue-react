import { useState } from 'react'
import Section from './Section'
import { testimonials } from '../data/content'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const goPrev = () =>
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length)

  const goNext = () =>
    setCurrent((i) => (i + 1) % testimonials.length)

  const active = testimonials[current]

  return (
    <Section id="testimonials" label="Testimonials" title="What founders say">
      <p className={styles.pendingNote}>
        Placeholder quotes below — send over the feedback document and
        these will be swapped for real ones.
      </p>

      <div className={styles.box}>
        <p className={styles.quote}>&ldquo;{active.quote}&rdquo;</p>

        <div className={styles.who}>
          {active.name}
          <br />
          <span>{active.role}</span>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.arrowBtn}
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className={styles.dots}>
            {testimonials.map((t, i) => (
              <button
                key={t.name + i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.arrowBtn}
            onClick={goNext}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </Section>
  )
}
