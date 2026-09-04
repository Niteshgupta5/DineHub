import { motion } from 'framer-motion'
import { Phone, MessageCircle, CalendarDays, ChevronDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="hero-bg relative min-h-dvh flex flex-col items-center justify-center text-center !px-6 !py-32"
      aria-label="Hero section"
    >
      {/* Decorative bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--color-cream), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl !mx-auto">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="!mb-5">
          <span className="tag" style={{ background: 'rgba(200,168,75,0.18)', borderColor: 'rgba(200,168,75,0.45)' }}>
            🌿 Pure Vegetarian · Indore
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.22)}
          className="font-heading text-white !mb-5 leading-[1.12]"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.6rem, 7vw, 5.2rem)', fontWeight: 600 }}
        >
          Where Every Meal{' '}
          <em className="text-[var(--color-gold-l)]">Tells a Story</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.34)}
          className="text-white/80 leading-relaxed !mx-auto !mb-10"
          style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          Experience the finest pure vegetarian dining in Indore — vibrant North Indian
          flavours, authentic Italian pasta, zesty Mexican bites, and more. A warm, elegant
          escape for food lovers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.46)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#reservation')}
            className="btn-primary"
            aria-label="Book a table at DineHub"
          >
            <CalendarDays size={16} aria-hidden="true" />
            Book a Table
          </button>
          <button
            onClick={() => scrollTo('#menu')}
            className="btn-outline"
            aria-label="View our menu"
          >
            View Menu
          </button>
          {/* <a
            href="tel:+911234567890"
            className="btn-outline"
            aria-label="Call DineHub"
          >
            <Phone size={16} aria-hidden="true" />
            Call Now
          </a> */}
        </motion.div>

        {/* Info Pills */}
        <motion.div
          {...fadeUp(0.58)}
          className="!mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          {[
            { label: 'Rated 4.4 ★' },
            { label: '12 PM – 3 PM · 6:30 PM – 11 PM' },
            { label: '₹1,500 for two' },
          ].map(({ label }) => (
            <span
              key={label}
              className="text-xs text-white/65 tracking-wide font-medium border border-white/15 rounded-full !px-4 !py-1.5 hover:bg-white/20"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[var(--color-gold)] transition-colors focus-visible:outline-none"
        aria-label="Scroll down"
      >
        <motion.div
          className='hover:cursor-pointer'
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  )
}
