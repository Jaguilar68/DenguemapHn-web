import { motion } from 'motion/react';
import { Shield, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tech-green text-black">
            <Shield size={24} />
          </div>
          <span className="text-xl font-bold tracking-tighter">Denguemap<span className="text-tech-green">HN</span></span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="#map" className="text-sm font-medium text-white/70 transition-colors hover:text-tech-green">Predicción</a>
          <a href="#features" className="text-sm font-medium text-white/70 transition-colors hover:text-tech-green">Algoritmo</a>
          <a href="#sdg" className="text-sm font-medium text-white/70 transition-colors hover:text-tech-green">ODS</a>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/login"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-tech-green"
        >
          <LayoutDashboard size={18} />
          Ingresar
        </motion.a>
      </div>
    </motion.nav>
  );
}
