import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Transformations } from './components/Transformations';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen select-none bg-black text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Quote />
          {/* <Services /> */}
          <Transformations />
          {/* <Team /> */}
          <Pricing />
          {/* <Testimonials /> */}
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;