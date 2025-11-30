import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Calculator } from './components/Calculator';
import { VideoWalkthrough } from './components/VideoWalkthrough';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { motion, useScroll, useTransform} from 'framer-motion';

const ScrollSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, scale, y }} 
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-purple-500/30 overflow-x-hidden">
      <Header />
      <main className="flex flex-col">
        {/* Hero has slightly different logic usually, but let's wrap it for consistency or keep it static */}
        <section className='min-h-screen'>
            <Hero />
        </section>

        <ScrollSection>
          <Process />
        </ScrollSection>

        <ScrollSection>
          <Services />
        </ScrollSection>

        <ScrollSection>
          <Calculator />
        </ScrollSection>

        <ScrollSection>
          <VideoWalkthrough />
        </ScrollSection>

        <ScrollSection>
          <Testimonials />
        </ScrollSection>

        <ScrollSection>
          <FAQ />
        </ScrollSection>

        <ScrollSection>
          <CTA />
        </ScrollSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;