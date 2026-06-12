import { motion } from 'motion/react';
import { Heart, Trees, Globe } from 'lucide-react';

export default function SDGSection() {
  return (
    <section id="sdg" className="py-24 px-6 border-y border-white/5 bg-deep-bg overflow-hidden relative">
      {/* Decorative organic shape */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-tech-green/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none md:text-6xl">
              Compromiso con el <span className="text-tech-green">Planeta</span>
            </h2>
            <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-xl">
              <span translate="no">DengueMap-Hn</span> no es solo software; es un aliado de los Objetivos de Desarrollo Sostenible (ODS). Trabajamos activamente por un futuro más saludable y resiliente ante el cambio climático.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-full border border-tech-green/20 bg-tech-green/5 px-6 py-3">
                <div className="h-2 w-2 rounded-full bg-tech-green animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-tech-green">ODS 3: Salud y Bienestar</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-tech-green/20 bg-tech-green/5 px-6 py-3">
                <div className="h-2 w-2 rounded-full bg-tech-green animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-tech-green">ODS 13: Acción por el Clima</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -10 }}
              className="aspect-square flex flex-col justify-center items-center bg-tech-green/10 border border-tech-green/10 rounded-[3rem] p-8 text-center gap-4"
            >
              <Heart className="text-tech-green" size={48} />
              <p className="text-xs font-bold uppercase text-white/40 tracking-widest">SALUD ADAPTATIVA</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="aspect-square translate-y-8 flex flex-col justify-center items-center bg-tech-green/10 border border-tech-green/10 rounded-[3rem] p-8 text-center gap-4"
            >
              <Trees className="text-tech-green" size={48} />
              <p className="text-xs font-bold uppercase text-white/40 tracking-widest">VIGILANCIA ECO-AMBIENTAL</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="aspect-square -translate-y-4 flex flex-col justify-center items-center bg-tech-green/10 border border-tech-green/10 rounded-[3rem] p-8 text-center gap-4"
            >
              <Globe className="text-tech-green" size={48} />
              <p className="text-xs font-bold uppercase text-white/40 tracking-widest">SISTEMA ESCALABLE</p>
            </motion.div>
            <div className="aspect-square bg-tech-green rounded-[3rem] p-8 flex items-end justify-start overflow-hidden relative">
               <span className="text-black font-black text-6xl opacity-20 absolute -top-4 -right-4">SDG</span>
               <p className="text-gray-800 font-bold text-sm leading-tight relative z-10">IMPACTO SOCIAL Monitoreo y métricas de riesgo real para mitigar la vulnerabilidad en las comunidades más afectadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
