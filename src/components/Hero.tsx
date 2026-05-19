import { motion } from 'motion/react';
import { ArrowRight, Wind, Thermometer, Droplets } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background atmosphere visualization effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-tech-green/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-tech-green/30 bg-tech-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tech-green">
            Novedoso Sistema de Vigilancia Epidemiológica
          </span>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            Anticipando el <span className="text-tech-green">Dengue</span> con Precisión Atmosférica
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            Vigilancia inteligente basada en temperatura, humedad y vientos. Algoritmos avanzados de última generación para proteger la salud y el medio ambiente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            whileHover={{ x: 5 }}
            href="/login"
            className="group flex items-center gap-2 rounded-xl bg-tech-green px-8 py-4 text-lg font-bold text-black transition-all hover:bg-tech-green-dark"
          >
            Plataforma Predictiva
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <div className="flex items-center gap-6 px-4 py-2 text-white/40">
            <div className="flex items-center gap-2">
              <Thermometer size={18} />
              <span className="text-sm font-medium">Temp</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets size={18} />
              <span className="text-sm font-medium">Hum</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind size={18} />
              <span className="text-sm font-medium">Viento</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 border-t border-white/5 pt-8"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">Cimentado en</p>
            <p className="mt-1 font-mono text-sm text-tech-green/80 underline decoration-tech-green/20 underline-offset-4">Stack Moderno: React + Motion + AI</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
