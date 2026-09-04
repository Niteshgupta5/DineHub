import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf } from 'lucide-react'

const IMAGES = [
  {
    id: 1, span: 'lg:col-span-2 lg:row-span-2',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=80',
    alt: 'Elegant dining room with warm lighting at DineHub',
  },
  {
    id: 2, span: '',
    src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
    alt: 'Paneer tikka starter on a wooden board',
  },
  {
    id: 3, span: '',
    src: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?w=600&auto=format&fit=crop&q=80',
    alt: 'Wood-fired pizza with fresh toppings',
  },
  {
    id: 4, span: '',
    src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=80',
    alt: 'Gourmet vegetarian platter',
  },
  {
    id: 5, span: '',
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh salad bowl with colourful vegetables',
  },
  {
    id: 6, span: 'lg:col-span-2',
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&auto=format&fit=crop&q=80',
    alt: 'Beautiful restaurant interior with candles and warm decor',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="gallery"
      className="section-pad"
      ref={ref}
      style={{ background: 'var(--color-cream)' }}
      aria-label="Gallery – food and ambience"
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
            Our Ambience & Cuisine
          </motion.p>
          <motion.h2
            className="section-title !mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Feast for the Eyes
          </motion.h2>
          <div className="gold-divider max-w-xs !mx-auto" aria-hidden="true">
            <Leaf size={12} className="text-[var(--color-gold)] flex-shrink-0" />
          </div>
          <motion.p
            className="section-subtitle !mx-auto text-center !mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Step inside DineHub — where every corner is designed to elevate your experience.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[240px] gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              className={`gallery-cell ${img.span}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width="900"
                height="600"
              />
              <div className="overlay" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
