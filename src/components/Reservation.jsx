import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CalendarDays, Clock, Users, Mail, Phone, MessageSquare, CheckCircle, Leaf } from 'lucide-react'

const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
]

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8+']

export default function Reservation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '', request: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.date) e.date = 'Please select a date'
    if (!form.time) e.time = 'Please select a time'
    if (!form.guests) e.guests = 'Please select guest count'
    return e
  }

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      const firstErr = document.querySelector('[data-field="' + Object.keys(errs)[0] + '"]')
      firstErr?.focus()
      return
    }
    setSubmitted(true)
  }

  return (
    <section
      id="reservation"
      className="section-pad"
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, var(--color-forest-d) 0%, var(--color-forest) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Book a table"
    >
      {/* Decorative element */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, var(--color-gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left info */}
          <div>
            <motion.p
              className="section-eyebrow !mb-3"
              style={{ color: 'var(--color-gold)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
            >
              Reservations
            </motion.p>
            <motion.h2
              className="section-title !mb-5"
              style={{ color: '#fff' }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Reserve Your Table<br />
              <em style={{ color: 'var(--color-gold-l)', fontStyle: 'italic' }}>Before You Arrive</em>
            </motion.h2>

            <div className="gold-divider max-w-[220px]" aria-hidden="true">
              <Leaf size={12} className="text-[var(--color-gold)] flex-shrink-0" />
            </div>

            <motion.p
              className="text-base leading-relaxed !mb-10"
              style={{ color: 'rgba(250,246,238,0.7)', fontFamily: 'var(--font-body)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Secure your spot at Indore's finest pure veg dining room. We recommend booking in advance,
              especially for weekends and celebrations.
            </motion.p>

            <motion.div
              className="!space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { icon: Clock, label: 'Lunch', value: '12:00 PM – 3:00 PM' },
                { icon: Clock, label: 'Dinner', value: '6:30 PM – 11:00 PM' },
                { icon: Phone, label: 'Call Us', value: '+91 1234567890' },
                { icon: MessageSquare, label: 'WhatsApp', value: '+91 1234567890' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(200,168,75,0.15)', border: '1px solid rgba(200,168,75,0.3)' }}
                  >
                    <Icon size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-[rgba(250,246,238,0.5)] tracking-wide uppercase font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </p>
                    <p className="text-white font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl p-10 text-center"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(200,168,75,0.3)' }}
                role="alert"
                aria-live="polite"
              >
                <CheckCircle size={56} className="!mx-auto text-[var(--color-gold)] !mb-5" aria-hidden="true" />
                <h3
                  className="font-heading text-2xl font-semibold text-white !mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Table Reserved!
                </h3>
                <p className="text-[rgba(250,246,238,0.7)] !mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  Thank you, <strong className="text-white">{form.name}</strong>! We've received your reservation
                  for <strong className="text-white">{form.guests} guest(s)</strong> on <strong className="text-white">{form.date}</strong> at <strong className="text-white">{form.time}</strong>.
                  We'll confirm via phone shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', date: '', time: '', guests: '', request: '' }) }}
                  className="btn-primary"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl !p-8 sm:!p-10 !space-y-5"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(200,168,75,0.2)', backdropFilter: 'blur(12px)' }}
                aria-label="Table reservation form"
              >
                <h3
                  className="font-heading text-2xl font-semibold text-white !mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Book Your Table
                </h3>

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="res-name" className="form-label">
                      Full Name <span className="text-[var(--color-gold)]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="res-name"
                      data-field="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className="form-input"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                    />
                    {errors.name && (
                      <p id="err-name" className="text-red-400 text-xs !mt-1" role="alert">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="res-phone" className="form-label">
                      Phone <span className="text-[var(--color-gold)]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="res-phone"
                      data-field="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                      required
                      aria-required="true"
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      className="form-input"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                    />
                    {errors.phone && (
                      <p id="err-phone" className="text-red-400 text-xs !mt-1" role="alert">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="res-email" className="form-label">Email</label>
                  <input
                    id="res-email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="form-input"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                  />
                </div>

                {/* Date + Time */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="res-date" className="form-label">
                      Date <span className="text-[var(--color-gold)]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="res-date"
                      data-field="date"
                      type="date"
                      required
                      aria-required="true"
                      aria-describedby={errors.date ? 'err-date' : undefined}
                      className="form-input"
                      style={{ colorScheme: 'dark' }}
                      value={form.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => handleChange('date', e.target.value)}
                    />
                    {errors.date && (
                      <p id="err-date" className="text-red-400 text-xs !mt-1" role="alert">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="res-time" className="form-label">
                      Time <span className="text-[var(--color-gold)]" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="res-time"
                      data-field="time"
                      required
                      aria-required="true"
                      aria-describedby={errors.time ? 'err-time' : undefined}
                      className="form-input"
                      value={form.time}
                      onChange={e => handleChange('time', e.target.value)}
                    >
                      <option value="" disabled>Select time</option>
                      <optgroup label="Lunch (12 PM – 3 PM)">
                        {TIME_SLOTS.filter(t => t.includes('PM') && ['12', '1', '2'].some(h => t.startsWith(h))).map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Dinner (6:30 PM – 11 PM)">
                        {TIME_SLOTS.filter(t => ['6', '7', '8', '9', '10'].some(h => t.startsWith(h))).map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.time && (
                      <p id="err-time" className="text-red-400 text-xs !mt-1" role="alert">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="res-guests" className="form-label">
                    Number of Guests <span className="text-[var(--color-gold)]" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="res-guests"
                    data-field="guests"
                    required
                    aria-required="true"
                    aria-describedby={errors.guests ? 'err-guests' : undefined}
                    className="form-input"
                    value={form.guests}
                    onChange={e => handleChange('guests', e.target.value)}
                  >
                    <option value="" disabled>Select guests</option>
                    {GUEST_OPTIONS.map(g => <option key={g} value={g}>{g} {g === '1' ? 'Guest' : 'Guests'}</option>)}
                  </select>
                  {errors.guests && (
                    <p id="err-guests" className="text-red-400 text-xs !mt-1" role="alert">{errors.guests}</p>
                  )}
                </div>

                {/* Special request */}
                <div>
                  <label htmlFor="res-request" className="form-label">Special Request</label>
                  <textarea
                    id="res-request"
                    rows={3}
                    placeholder="Dietary needs, occasion, seating preference…"
                    className="form-input resize-none"
                    value={form.request}
                    onChange={e => handleChange('request', e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center !mt-2 !mb-3">
                  <CalendarDays size={16} aria-hidden="true" />
                  Confirm Reservation
                </button>

                <p className="text-center text-xs text-[rgba(250,246,238,0.4)]" style={{ fontFamily: 'var(--font-body)' }}>
                  We'll call to confirm within 2 hours of your booking.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
