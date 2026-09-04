import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Clock, Navigation, Leaf } from 'lucide-react'

const INFO_CARDS = [
  {
    icon: MapPin,
    title: 'Find Us',
    lines: [
      'No. 101, Ryan Eminence,',
      'Near Ketan Party Plot,',
      'Rao Road,',
      'Indore, M.P. – 452006',
    ],
    action: { label: 'Get Directions', href: 'https://maps.google.com/?q=indore', icon: Navigation },
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: [
      'Lunch: 12:00 PM – 3:00 PM',
      'Dinner: 6:30 PM – 11:00 PM',
      'Open All Days',
      'Closed on Public Holidays',
    ],
    action: null,
  },
  {
    icon: Phone,
    title: 'Reach Us',
    lines: ['+91 12345 67890', 'info@dinehub.com'],
    action: { label: 'Call Now', href: 'tel:+911234567890', icon: Phone },
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      className="section-pad"
      ref={ref}
      style={{ background: 'var(--color-cream)' }}
      aria-label="Contact and location"
    >
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.p
            className="section-eyebrow !mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            Contact & Location
          </motion.p>
          <motion.h2
            className="section-title !mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Come Visit Us in Rao
          </motion.h2>
          <div className="gold-divider max-w-xs !mx-auto" aria-hidden="true">
            <Leaf size={12} className="text-[var(--color-gold)] flex-shrink-0" />
          </div>
        </div>

        {/* Info cards + map */}
        <div className="grid lg:grid-cols-3 gap-7 !mb-10">
          {INFO_CARDS.map(({ icon: Icon, title, lines, action }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl !p-7"
              style={{ background: '#fff', boxShadow: 'var(--shadow-card)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center !mb-5"
                style={{ background: 'rgba(30,58,18,0.08)', border: '1px solid rgba(30,58,18,0.12)' }}
              >
                <Icon size={20} className="text-[var(--color-forest)]" aria-hidden="true" />
              </div>
              <h3
                className="font-heading text-xl font-semibold !mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-forest)' }}
              >
                {title}
              </h3>
              <div className="!space-y-1 !mb-5">
                {lines.map((l, j) => (
                  <p key={j} className="text-sm text-[var(--color-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
                    {l}
                  </p>
                ))}
              </div>
              {action && (
                <a
                  href={action.href}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn-outline-dark text-sm !px-4 !py-2.5"
                >
                  <action.icon size={14} aria-hidden="true" />
                  {action.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="rounded-2xl overflow-hidden relative"
          style={{ height: '380px', boxShadow: 'var(--shadow-card)' }}
          aria-label="Map showing DineHub location"
        >
          <iframe
            title="DineHub Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223873.7906549931!2d75.69903738855072!3d22.72388828988633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1788417479163!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Map overlay card */}
          <div
            className="absolute top-4 left-4 rounded-xl !px-5 !py-3.5"
            style={{ background: 'rgba(21,43,13,0.93)', backdropFilter: 'blur(8px)', border: '1px solid rgba(200,168,75,0.3)', zIndex: 10 }}
          >
            <p className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              DineHub
            </p>
            <p className="text-[var(--color-gold-l)] text-xs" style={{ fontFamily: 'var(--font-body)' }}>
              Rao Road,
            </p>
          </div>
        </motion.div>

        {/* Quick CTA row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 !mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="tel:+911234567890" className="btn-primary">
            <Phone size={16} aria-hidden="true" />
            Call Now
          </a>
          <a
            href="https://wa.me/911234567890?text=Hi%21%20I%27d%20like%20to%20make%20a%20reservation%20at%20DineHub."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp Us
          </a>
          <a
            href="https://maps.google.com/?q=indore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
          >
            <Navigation size={16} aria-hidden="true" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
