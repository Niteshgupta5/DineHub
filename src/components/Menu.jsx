import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, IndianRupee, Leaf } from 'lucide-react'

const CATEGORIES = ['All', 'Starters', 'Main Course', 'Pizza & Italian', 'Mexican', 'Desserts', 'Beverages']

const DISHES = [
  {
    id: 1, category: 'Starters',
    name: 'Paneer Tikka Royale',
    desc: 'Tandoor-charred cottage cheese with saffron marinade, mint chutney, and pickled onion.',
    price: 320, rating: 4.9, veg: true, tag: 'Chef\'s Pick',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2, category: 'Main Course',
    name: 'Dal Makhani Heritage',
    desc: 'Slow-cooked black lentils simmered overnight in a wood-fire base with cream & spices.',
    price: 280, rating: 4.8, veg: true, tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3, category: 'Pizza & Italian',
    name: 'Truffle Margherita',
    desc: 'Wood-fired pizza with truffle oil, buffalo mozzarella, San Marzano tomato, and fresh basil.',
    price: 480, rating: 4.7, veg: true, tag: 'Popular',
    img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4, category: 'Mexican',
    name: 'Garden Burrito Bowl',
    desc: 'Smoky black beans, Mexican rice, roasted peppers, guacamole & chipotle crema.',
    price: 360, rating: 4.6, veg: true,
    img: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 5, category: 'Desserts',
    name: 'Gulab Jamun Cheesecake',
    desc: 'Fusion masterpiece — creamy New York cheesecake crowned with warm gulab jamun & rose syrup.',
    price: 240, rating: 5.0, veg: true, tag: 'Must Try',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 6, category: 'Beverages',
    name: 'Saffron Cooler',
    desc: 'Chilled thandai with premium kesar, crushed rose petals, and a hint of cardamom.',
    price: 160, rating: 4.8, veg: true,
    img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 7, category: 'Starters',
    name: 'Crispy Corn Chaat',
    desc: 'Golden sweet-corn tossed in chaat masala, lime, pomegranate, and herb powder.',
    price: 180, rating: 4.7, veg: true,
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 8, category: 'Pizza & Italian',
    name: 'Penne Arrabiata',
    desc: 'Al dente penne tossed in fiery San Marzano tomato sauce with capers and fresh parsley.',
    price: 340, rating: 4.6, veg: true,
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9, category: 'Main Course',
    name: 'Shahi Paneer',
    desc: 'Cottage cheese in a regal saffron-cashew gravy, finished with rose water and cream.',
    price: 290, rating: 4.8, veg: true, tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80',
  },
]

function DishCard({ dish, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card group"
      aria-label={`${dish.name} – ₹${dish.price}`}
    >
      <div className="menu-img-wrap aspect-[4/3] relative">
        <img
          src={dish.img}
          alt={dish.name}
          className="w-full h-full object-cover"
          loading="lazy"
          width="600"
          height="450"
        />
        {dish.tag && (
          <span
            className="absolute top-3 left-3 text-xs font-bold !px-3 !py-1 rounded-full"
            style={{ background: 'var(--color-gold)', color: 'var(--color-forest-d)', fontFamily: 'var(--font-body)' }}
          >
            {dish.tag}
          </span>
        )}
        <div
          className="absolute top-3 right-3 w-6 h-6 rounded border-2 flex items-center justify-center"
          style={{ borderColor: '#22c55e', background: '#fff' }}
          title="Pure Vegetarian"
          aria-label="Pure Vegetarian"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="!p-5">
        <div className="flex items-start justify-between gap-2 !mb-1.5">
          <h3
            className="font-heading text-lg font-semibold leading-snug"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-forest)' }}
          >
            {dish.name}
          </h3>
          <div className="flex items-center gap-0.5 text-xs shrink-0 mt-0.5" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-body)' }}>
            <Star size={12} fill="currentColor" aria-hidden="true" />
            <span className="font-semibold">{dish.rating}</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed !mb-4" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
          {dish.desc}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="font-heading text-xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-forest)' }}
          >
            ₹{dish.price}
          </span>
          <span className="text-xs text-[var(--color-muted)] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            per portion
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Menu() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All' ? DISHES : DISHES.filter(d => d.category === active)

  return (
    <section
      id="menu"
      className="section-pad"
      ref={ref}
      style={{ background: 'var(--color-cream-d)' }}
      aria-label="Featured menu"
    >
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.p
            className="section-eyebrow !mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            Signature Dishes
          </motion.p>
          <motion.h2
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            A Menu That Speaks for Itself
          </motion.h2>
          <div className="gold-divider max-w-xs !mx-auto" aria-hidden="true">
            <Leaf size={12} className="text-[var(--color-gold)] flex-shrink-0" />
          </div>
          <motion.p
            className="section-subtitle !mx-auto text-center !mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From rich North Indian curries to thin-crust Italian pizzas and smoky Mexican bowls —
            every bite is pure indulgence.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 !mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          role="tablist"
          aria-label="Menu categories"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className="!px-5 !py-2 rounded-full text-sm font-semibold transition-all duration-250 focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-2 min-h-[44px] cursor-pointer"
              style={{
                fontFamily: 'var(--font-body)',
                background: active === cat ? 'var(--color-forest)' : 'rgba(255,255,255,0.8)',
                color: active === cat ? '#fff' : 'var(--color-text)',
                border: active === cat ? '1.5px solid var(--color-forest)' : '1.5px solid transparent',
                boxShadow: active === cat ? 'var(--shadow-card)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center !mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://wa.me/911234567890?text=Hi!%20I%27d%20like%20to%20order%20from%20DineHub."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Order Now via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
