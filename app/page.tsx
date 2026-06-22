import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import ToolShowcase from './components/ToolShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Sanjay.Dev | Full-Stack Developer & AI SEO Engineer',
  description: 'Sanjaykumaran B is a Full-Stack Developer and SEO Engineer based in Chennai. Specializing in Next.js, AI Automation, and Generative Engine Optimization (GEO).',
  keywords: ['Full Stack Developer', 'SEO Expert', 'GEO Optimization', 'AI Automation', 'Next.js Developer', 'React Native', 'Chennai', 'India'],
  openGraph: {
    title: 'Sanjay.Dev | Full-Stack Developer & AI SEO Engineer',
    description: 'Building high-performance digital experiences that rank on Google and AI Search.',
    type: 'website',
    locale: 'en_US',
    url: 'https://sanjay.dev',
    siteName: 'Sanjay.Dev',
  }
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sanjaykumaran B',
    url: 'https://sanjay.dev',
    jobTitle: 'Full-Stack Developer & SEO Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressCountry: 'India'
    },
    sameAs: [
      'https://github.com/sanjayras7',
      'https://linkedin.com/in/sanjaykumaran-b'
    ],
    knowsAbout: ['Full Stack Development', 'SEO', 'Generative Engine Optimization', 'AI Automation', 'Next.js', 'React Native']
  }

  return (
    <main className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <ToolShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
