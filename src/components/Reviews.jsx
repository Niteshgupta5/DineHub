import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, Leaf } from 'lucide-react'

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'VijayNagar, Indore',
    rating: 5,
    date: 'March 2025',
    text: 'DineHub has absolutely redefined pure veg dining for me. The Paneer Tikka Royale is smoky perfection, and the truffle pizza rivals any fine-dine place. The ambience is warm and sophisticated — we\'ve already made this our go-to for family dinners.',
    highlight: 'Paneer Tikka & Truffle Pizza',
  },
  {
    id: 2,
    name: 'Karan Mehta',
    location: 'Palasia, Indore',
    rating: 5,
    date: 'February 2025',
    text: 'Came here for our anniversary and left completely wowed. The plating is beautiful, the service attentive without being intrusive, and the Dal Makhani tasted like it had been cooking for days. The desserts — especially the Gulab Jamun Cheesecake — are worth the trip alone.',
    highlight: 'Dal Makhani & Desserts',
  },
  {
    id: 3,
    name: 'Anjali & Rohit Patel',
    location: 'Indore',
    rating: 5,
    date: 'January 2025',
    text: 'Living close to DineHub is a blessing and a curse — we visit far too often! The Mexican Bowl is surprisingly authentic, the staff always remembers our preferences, and the kids absolutely love it. Clean, beautiful, and consistently excellent.',
    highlight: 'Garden Burrito Bowl',
  },
  {
    id: 4,
    name: 'Deepika Joshi',
    location: 'IT Park, Indore',
    rating: 5,
    date: 'December 2024',
    text: 'Finally a restaurant in Indore that takes vegetarian cuisine seriously. The menu is thoughtful and globally inspired. The Saffron Cooler is the most refreshing drink I\'ve had all year. Would recommend to anyone who thinks vegetarian food is bland.',
    highlight: 'Saffron Cooler & Ambience',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="var(--color-gold)" className="text-[var(--color-gold)]" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent(c => (c - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCurrent(c => (c + 1) % REVIEWS.length)

  const review = REVIEWS[current]

  return (
    <section
      id="reviews"
      className="section-pad"
      ref={ref}
      style={{ background: 'var(--color-cream-d)' }}
      aria-label="Customer testimonials"
    >
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            className="section-eyebrow !mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            What Our Guests Say
          </motion.p>
          <motion.h2
            className="section-title !mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Loved by Indore
          </motion.h2>
          <div className="gold-divider max-w-xs !mx-auto" aria-hidden="true">
            <Leaf size={12} className="text-[var(--color-gold)] flex-shrink-0" />
          </div>
        </div>

        {/* Featured review */}
        <motion.div
          className="max-w-3xl !mx-auto"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="rounded-2xl !p-8 sm:!p-12 relative"
            style={{ background: '#fff', boxShadow: 'var(--shadow-hover)' }}
          >
            {/* Quote icon */}
            <div
              className="absolute top-8 right-8 opacity-10"
              aria-hidden="true"
            >
              <Quote size={80} className="text-[var(--color-forest)]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <StarRating count={review.rating} />

                <p
                  className="font-heading text-xl sm:text-2xl font-medium !mt-5 !mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal)', fontStyle: 'italic' }}
                >
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-[var(--color-forest)]" style={{ fontFamily: 'var(--font-body)' }}>
                      {review.name}
                    </p>
                    <p className="text-sm text-[var(--color-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
                      {review.location} · {review.date}
                    </p>
                  </div>
                  <span className="tag">{review.highlight}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 !mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[var(--color-forest)] flex items-center justify-center text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-forest)] focus-visible:outline-offset-2 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="group" aria-label="Review slide indicators">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-250 focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] cursor-pointer"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? 'var(--color-gold)' : 'rgba(30,58,18,0.2)',
                  }}
                  aria-label={`Review ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[var(--color-forest)] flex items-center justify-center text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-forest)] focus-visible:outline-offset-2 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* Rating badge */}
        <motion.div
          className="flex items-center justify-center gap-8 !mt-14 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { label: '4.4 / 5', sub: 'Rating' },
            { label: '1,615+', sub: 'Reviews' },
            { label: '1,000+', sub: 'Happy Families' },
          ].map(({ label, sub }) => (
            <div key={sub} className="text-center">
              <p className="font-heading text-3xl font-bold text-[var(--color-forest)]" style={{ fontFamily: 'var(--font-heading)' }}>
                {label}
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                {sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
