import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Menu        from './components/Menu'
import WhyUs       from './components/WhyUs'
import Gallery     from './components/Gallery'
import Reviews     from './components/Reviews'
import Reservation from './components/Reservation'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[var(--color-gold)] focus:text-[var(--color-forest-d)] focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Menu />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
