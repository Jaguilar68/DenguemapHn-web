import { motion } from 'motion/react';
import { MapPin, Info } from 'lucide-react';
import { RISK_LOCATIONS } from '../config/site';

const RISK_COLORS = {
  high: 'bg-red-500 shadow-red-500/50',
  medium: 'bg-orange-500 shadow-orange-500/50',
  low: 'bg-tech-green shadow-tech-green/50'
};

export default function PredictiveMap() {
  return (
    <section id="map" className="py-24 px-6 bg-deep-bg">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Análisis Predictivo Y Mapa Dinámico Hotspots</h2>
          <p className="mt-4 text-white/50">"Algoritmos inteligentes en tiempo real para la identificación y clasificación de criaderos y zonas de riesgo de contagio".</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              {/* Simplified Grid Background */}
              <div 
                className="absolute inset-0 opacity-20" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #bef264 1px, transparent 0)',
                  backgroundSize: '32px 32px' 
                }}
              />
              
              {/* Map Outline Placeholder */}
              <svg viewBox="0 0 800 500" className="absolute inset-0 h-full w-full fill-none stroke-white/5 stroke-2">
                <path d="M100,150 Q200,50 400,100 T700,150 T600,400 T200,450 Z" />
              </svg>

              {/* Risk Markers */}
              {RISK_LOCATIONS.map((loc) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute cursor-pointer"
                  style={{ left: loc.x, top: loc.y }}
                >
                  <div className={`h-4 w-4 rounded-full ${RISK_COLORS[loc.risk as keyof typeof RISK_COLORS]} shadow-lg transition-transform`} />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
                    {loc.name}
                  </div>
                </motion.div>
              ))}

              {/* Legend Overlay */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/40">Simbología de Riesgo</p>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-xs font-medium">Riesgo Alto</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="text-xs font-medium">Riesgo Medio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-tech-green" />
                  <span className="text-xs font-medium">Riesgo Bajo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 transition-colors hover:border-tech-green/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-tech-green text-black">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold italic">Vigilancia Focalizada</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Nuestro sistema identifica geográficamente los focos de calor y humedad donde el <em className="text-tech-green">Aedes aegypti</em> presenta mayor probabilidad de proliferación.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 transition-colors hover:border-orange-500/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-black">
                <Info size={24} />
              </div>
              <h3 className="text-xl font-bold italic">Datos Atmosféricos</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Integramos estaciones meteorológicas locales en tiempo real para ajustar diariamente los marcadores de riesgo epidemiológico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
