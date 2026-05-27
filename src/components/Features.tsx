import { motion } from 'motion/react';
import { TECH_FEATURES } from '../config/site';

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-deep-bg">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid lg:grid-cols-2 items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-6xl uppercase">
              Vigilancia con<br />
              <span className="text-tech-green">Stack Moderno</span>
            </h2>
          </div>
          <div className="mt-6 lg:mt-0">
            <p className="max-w-md text-white/50 border-l border-white/20 pl-6">
              Implementamos tecnologías de vanguardia para transformar datos ambientales en decisiones que salvan vidas. Una solución única en la región.
            </p>
          </div>
        </div>

        <div className="grid gap-1 px-1 border border-white/10 sm:grid-cols-2 lg:grid-cols-3 bg-white/5">
          {TECH_FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-deep-bg p-10 flex flex-col items-start gap-6 border-white/5 hover:bg-tech-green/10 transition-all cursor-default group"
            >
              <f.icon className={`${f.color} group-hover:scale-110 transition-transform`} size={32} />
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2 italic uppercase">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/70 transition-colors">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
