import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Sparkles, Users, Shield, Clock, ChefHat } from 'lucide-react'

const REASONS = [
  {
    icon: Leaf,
    title: '100% Pure Vegetarian',
    desc: 'Every ingredient sourced fresh daily. No cross-contamination, no compromise — proudly Jain-friendly options available.',
  },
  {
    icon: ChefHat,
    title: 'Multi-Cuisine Mastery',
    desc: 'Our chefs are trained in North Indian, Italian, Continental, and Mexican cuisines — bringing world flavours to your table.',
  },
  {
    icon: Sparkles,
    title: 'Premium Ambience',
    desc: 'A beautifully designed dining space that balances warmth and elegance — perfect for a quiet dinner or a family celebration.',
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    desc: 'Dedicated kids\' menu, high chairs, and a welcoming space that makes dining out a joy for the whole family.',
  },
  {
    icon: Shield,
    title: 'Hygiene First',
    desc: 'FSSAI-certified kitchen. Regular audits, clean-room prep, and high sanitation standards — your health is our priority.',
  },
  {
    icon: Clock,
    title: 'Timely Service',
    desc: 'Open for lunch and dinner with smooth, attentive service so your experience is never rushed and never kept waiting.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      className="section-pad"
      ref={ref}
      style={{ background: 'var(--color-forest)', position: 'relative', overflow: 'hidden' }}
      aria-label="Why choose DineHub"
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-gold), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-gold-l), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            className="section-eyebrow !mb-3"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            Why DineHub
          </motion.p>
          <motion.h2
            className="section-title"
            style={{ color: '#fff' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            More Than a Meal —
            <br />
            <em style={{ color: 'var(--color-gold-l)', fontStyle: 'italic' }}>An Experience</em>
          </motion.h2>
          <div className="gold-divider max-w-xs !mx-auto" aria-hidden="true">
            <Leaf size={12} className="text-[var(--color-gold)] flex-shrink-0" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl !p-7 transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1.5px solid rgba(200,168,75,0.2)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                e.currentTarget.style.borderColor = 'rgba(200,168,75,0.5)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(200,168,75,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              aria-label={title}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center !mb-5"
                style={{ background: 'rgba(200,168,75,0.15)', border: '1px solid rgba(200,168,75,0.3)' }}
              >
                <Icon size={22} className="text-[var(--color-gold)]" aria-hidden="true" />
              </div>
              <h3
                className="font-heading text-xl font-semibold !mb-2 text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(250,246,238,0.65)', fontFamily: 'var(--font-body)' }}
              >
                {desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
