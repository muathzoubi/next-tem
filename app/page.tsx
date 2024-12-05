import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-background ">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

