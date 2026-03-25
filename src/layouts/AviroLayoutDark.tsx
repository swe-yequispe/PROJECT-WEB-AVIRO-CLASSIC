﻿import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AviroLayoutDarkProps {
  children: ReactNode;
}

export default function AviroLayoutDark({ children }: AviroLayoutDarkProps) {
  return (
    <div className="bg-zinc-900 text-zinc-100 font-display transition-colors duration-300 bg-black min-h-screen">
      <div className="layout-container flex h-full grow flex-col max-w-[1440px] mx-auto shadow-2xl">
        <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <Link to="/dark">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Aviró Hotel Plaza</span>
              </Link>
            </div>
            <nav className="hidden xl:flex items-center gap-6 xl:ml-10">
              <Link className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors" to="/dark">Inicio</Link>
              <Link className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors" to="/habitaciones">Habitaciones</Link>
              <Link className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors" to="/restaurante">Restaurante</Link>
              <Link className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors" to="/life">Life</Link>
              <Link className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors" to="/corporativos">Corporativos</Link>
            </nav>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-zinc-400 hover:text-white">
                  <span className="material-symbols-outlined text-lg">language</span>
                </button>
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-zinc-400 hover:text-white">
                  <span className="material-symbols-outlined text-lg">payments</span>
                </button>
                <Link to="/" className="p-1.5 hover:bg-white/10 rounded transition-colors text-zinc-400 hover:text-white flex items-center">
                  <span className="material-symbols-outlined text-lg">light_mode</span>
                </Link>
              </div>
              <Link to="/habitaciones#habitaciones" className="hidden sm:flex items-center justify-center rounded px-5 h-9 bg-zinc-100 text-zinc-900 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">
                Reservar ahora
              </Link>
              <Link to="/login" className="flex items-center justify-center rounded h-9 px-5 border border-white/10 bg-transparent text-zinc-300 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-zinc-950 text-zinc-100 pt-24 pb-12 px-6 lg:px-20 border-t border-white/5 mt-auto">
          <div className="max-w-7xl mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div>
                <img alt="Logo Aviró Hotel Plaza" className="h-24 mb-10 mx-auto block" src="/aviro-logo-plaza.png" />
                <p className="text-zinc-500 text-sm leading-relaxed mb-10">Elevando el estándar de hospitalidad en la ciudad para viajeros de negocios y placer.</p>
                <div className="flex gap-3">
                  <a className="size-9 bg-white/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">social_leaderboard</span>
                  </a>
                  <a className="size-9 bg-white/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">photo_camera</span>
                  </a>
                  <a className="size-9 bg-white/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">alternate_email</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Enlaces Rápidos</h4>
                <ul className="space-y-4 text-zinc-500 text-sm">
                  <li><Link className="hover:text-white transition-colors" to="/dark">Inicio</Link></li>
                  <li><Link className="hover:text-white transition-colors" to="/restaurante">Nuestros Servicios</Link></li>
                  <li><Link className="hover:text-white transition-colors" to="/habitaciones">Habitaciones</Link></li>
                  <li><a className="hover:text-white transition-colors" href="#">Preguntas Frecuentes</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Libro de Reclamaciones</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Servicios</h4>
                <ul className="space-y-4 text-zinc-500 text-sm">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Lavandería Express</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Room Service 24h</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Pet Friendly</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Salas de Reunión</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Gimnasio</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Contacto</h4>
                <ul className="space-y-5 text-zinc-500 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl">location_on</span>
                    <span>Av. Empresarial 450, Centro Financiero</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl">call</span>
                    <span>+51 987 654 321</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl">mail</span>
                    <span>reservas@hotelaviro.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              <p>© 2024 Hotel Aviro. Todos los derechos reservados.</p>
              <div className="flex gap-10">
                <a className="hover:text-white transition-colors" href="#">Términos y Condiciones</a>
                <a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}






