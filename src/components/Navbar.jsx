import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Reservations', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'top'}`} role="banner">
      <div className="container-xl flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleLink('#hero') }}
          className="flex items-center gap-2.5 text-white no-underline focus-visible:outline-none"
          aria-label="DineHub – Home"
        >
          <div className="w-9 h-9 rounded-full border border-[var(--color-gold)] flex items-center justify-center bg-[var(--color-forest)]">
            <Leaf size={16} className="text-[var(--color-gold)]" />
          </div>
          <div className="leading-tight">
            <span className="font-heading text-xl font-semibold text-white block" style={{ fontFamily: 'var(--font-heading)' }}>
              DineHub
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-gold-l)] font-light" style={{ fontFamily: 'var(--font-body)' }}>
              Pure Veg · Indore
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => { e.preventDefault(); handleLink(l.href) }}
              className="text-sm font-medium tracking-wide text-white/80 hover:text-[var(--color-gold)] transition-colors duration-200 no-underline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        {
          !open &&
          <a
            href="#reservation"
            onClick={e => { e.preventDefault(); handleLink('#reservation') }}
            className="btn-primary hidden lg:inline-flex text-xs !px-5 !py-2.5"
          >
            Book a Table
          </a>
        }

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white !p-2 rounded focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(21,43,13,0.98)] backdrop-blur-md border-t border-[rgba(200,168,75,0.15)] !py-5 !px-6 flex flex-col gap-1"
          >
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="text-left text-white/85 hover:text-[var(--color-gold)] text-base font-medium !py-3 border-b border-white/5 transition-colors w-full focus-visible:outline-none"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {l.label}
              </button>
            ))}
            <a
              href="#reservation"
              onClick={e => { e.preventDefault(); handleLink('#reservation') }}
              className="btn-primary !mt-4 text-center justify-center"
            >
              Book a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
