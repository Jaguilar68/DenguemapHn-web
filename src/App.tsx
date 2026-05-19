/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PredictiveMap from './components/PredictiveMap';
import Features from './components/Features';
import SDGSection from './components/SDGSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-deep-bg text-white selection:bg-tech-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <PredictiveMap />
        <Features />
        <SDGSection />
      </main>
      <Footer />
    </div>
  );
}
