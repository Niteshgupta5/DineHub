import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Award, Heart } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const STATS = [
  { value: '10+', label: 'Years of Culinary Excellence' },
  { value: '50+', label: 'Signature Dishes' },
  { value: '4.4', label: '★ Ratings' },
  { value: '1000+', label: 'Happy Families' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-pad" ref={ref} aria-label="About DineHub">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{ boxShadow: 'var(--shadow-hover)' }}>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=85"
                alt="Elegant interior of DineHub restaurant with warm ambience"
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="1000"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-6 right-6 rounded-xl !px-5 !py-4 text-center"
                style={{ background: 'rgba(21,43,13,0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(200,168,75,0.3)' }}
              >
                <p className="font-heading text-3xl font-semibold text-[var(--color-gold)] leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  100%
                </p>
                <p className="text-xs text-white/80 mt-1 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                  Pure Veg
                </p>
              </div>
            </div>

            {/* Gold accent square */}
            <div
              className="absolute -top-5 -left-5 w-24 h-24 rounded-xl -z-10"
              style={{ background: 'rgba(200,168,75,0.15)', border: '1.5px solid rgba(200,168,75,0.25)' }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Content column */}
          <div>
            <motion.p
              className="section-eyebrow !mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Story
            </motion.p>

            <motion.h2
              className="section-title !mb-4"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.18 }}
            >
              A Labour of Love,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-sage)' }}>Born from Passion</em>
            </motion.h2>

            <div className="gold-divider" aria-hidden="true">
              <Leaf size={14} className="text-[var(--color-gold)] flex-shrink-0" />
            </div>

            <motion.div
              className="!space-y-4"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.28 }}
            >
              <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                Nestled in the heart of Indore, <strong>DineHub</strong> was born from a simple belief —
                that vegetarian food can be extraordinary. What started as a family dream has grown into one of
                Sola's most beloved dining destinations.
              </p>
              <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                We blend the warmth of North Indian home cooking with the finesse of Italian and Continental cuisines,
                creating a menu that surprises, delights, and keeps you coming back. Every dish is crafted with
                fresh, handpicked ingredients — no compromise, ever.
              </p>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              className="!mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              {[
                { icon: Leaf, text: 'Certified Pure Veg' },
                { icon: Award, text: 'Rated 4.4' },
                { icon: Heart, text: 'Family-Owned & Operated' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 !px-4 !py-2 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(74,124,63,0.1)', color: 'var(--color-forest)', border: '1px solid rgba(74,124,63,0.2)', fontFamily: 'var(--font-body)' }}
                >
                  <Icon size={14} className="text-[var(--color-sage)]" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="!mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.48 }}
            >
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-[var(--color-forest)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {s.value}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-1 leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
