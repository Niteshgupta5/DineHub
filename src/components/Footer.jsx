import { Leaf, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

// Inline SVG brand icons (removed from lucide-react)
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Reservations', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL = [
  { icon: TwitterIcon, label: 'Instagram', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter/X', href: '#' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      style={{ background: 'var(--color-charcoal)', color: 'rgba(250,246,238,0.65)' }}
      role="contentinfo"
    >
      <div className="container-xl !py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 !mb-4">
              <div
                className="w-9 h-9 rounded-full border flex items-center justify-center"
                style={{ borderColor: 'rgba(200,168,75,0.5)', background: 'var(--color-forest)' }}
              >
                <Leaf size={16} className="text-[var(--color-gold)]" aria-hidden="true" />
              </div>
              <div>
                <span
                  className="font-heading text-white text-lg font-semibold block"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  DineHub
                </span>
                <span
                  className="text-[10px] tracking-widest uppercase text-[var(--color-gold)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Pure Veg Restaurant
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed !mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Elevating vegetarian dining in Indore — with warmth, finesse, and flavours that linger.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-2"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,168,75,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-white font-semibold !mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Quick Links
            </h3>
            <ul className="!space-y-3" role="list">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm hover:text-[var(--color-gold)] transition-colors duration-200 focus-visible:outline-none text-left w-full"
                    style={{ fontFamily: 'var(--font-body)', color: 'inherit' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="text-white font-semibold !mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Opening Hours
            </h3>
            <ul className="!space-y-3" role="list">
              {[
                { label: 'Lunch', value: '12:00 PM – 3:00 PM' },
                { label: 'Dinner', value: '6:30 PM – 11:00 PM' },
                { label: 'Days', value: 'Open All Days' },
              ].map(({ label, value }) => (
                <li key={label} className="flex items-start gap-2">
                  <Clock size={14} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div style={{ fontFamily: 'var(--font-body)' }}>
                    <span className="text-xs text-[rgba(250,246,238,0.4)] block">{label}</span>
                    <span className="text-sm">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-semibold !mb-5 text-sm tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact
            </h3>
            <ul className="!space-y-4" role="list">
              <li className="flex gap-2 items-start">
                <MapPin size={14} className="text-[var(--color-gold)] !mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                  No. 101, Ryan Eminence,<br />
                  Near Ketan Party Plot,<br />
                  Rao Rd, Indore
                </span>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-2 text-sm hover:text-[var(--color-gold)] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <Phone size={14} className="text-[var(--color-gold)] flex-shrink-0" aria-hidden="true" />
                  +91 1234567890
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-[var(--color-gold)] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <MessageCircle size={14} className="text-[var(--color-gold)] flex-shrink-0" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="!mt-12 !pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-body)' }}
        >
          <p>© {new Date().getFullYear()} DineHub. All rights reserved.</p>
          <p>
            Pure Veg Restaurant · Rao Road, Indore · <span className="text-[var(--color-gold)]">4.4★</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
