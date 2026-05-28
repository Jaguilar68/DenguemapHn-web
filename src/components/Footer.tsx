import { motion } from 'motion/react';
import { Shield, LayoutDashboard, Instagram, Twitter, Linkedin } from 'lucide-react';
import { APP_URL } from '../lib/utils';

export default function Footer() {
  return (
    <footer className="bg-deep-bg py-20 px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-tech-green text-black">
                <Shield size={20} />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase italic">Denguemap<span className="text-tech-green">HN</span></span>
            </div>
            <p className="max-w-md text-white/40 leading-relaxed text-sm">
              Tecnología avanzada para la prevención y vigilancia del dengue basada en modelos climáticos y algoritmos inteligentes de alta precisión.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-tech-green hover:border-tech-green/50 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-tech-green hover:border-tech-green/50 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-tech-green hover:border-tech-green/50 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#map" className="text-white/60 hover:text-tech-green transition-colors">Mapa Predictivo</a></li>
              <li><a href="#features" className="text-white/60 hover:text-tech-green transition-colors">Algoritmos</a></li>
              <li><a href="#sdg" className="text-white/60 hover:text-tech-green transition-colors">Sostenibilidad</a></li>
              <li><a href={APP_URL} className="flex items-center gap-2 text-white/60 hover:text-tech-green transition-colors">
                <LayoutDashboard size={14} /> Panel de Control
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Acceso</h4>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={APP_URL}
              className="block w-full rounded-xl bg-white p-4 text-center text-sm font-black uppercase text-black transition-colors hover:bg-tech-green"
            >
              Iniciar Sesión
            </motion.a>
            <p className="mt-4 text-[10px] text-white/30 text-center leading-relaxed font-mono">
              SISTEMA PROTEGIDO POR PROTOCOLOS DE SEGURIDAD BIOMÉTRICA Y CIFRADO DE DATOS EPIDEMIOLÓGICOS.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium tracking-widest text-white/20 uppercase">
            © 2026 DENGUEMAPHN. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-medium tracking-widest text-white/20 hover:text-white transition-colors uppercase">Privacidad</a>
            <a href="#" className="text-[10px] font-medium tracking-widest text-white/20 hover:text-white transition-colors uppercase">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
