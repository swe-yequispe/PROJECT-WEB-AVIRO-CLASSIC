import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AviroLayoutLightProps {
  children: ReactNode;
}

export default function AviroLayoutLight({ children }: AviroLayoutLightProps) {
  return (
    <div className="layout-container flex h-[100vh] grow flex-col">
      <header className="sticky top-0 z-50 bg-creme/95 backdrop-blur-md border-b border-primary/10 px-6 lg:px-12 py-4 xl:px-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img alt="Logo Hotel Aviro" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXq8rjVakM9drIaR9kjCOCFywTjZX0aASwpKIwlxZj0sja7toViuQLP-uP_x2rdaieOgTA9pZ4A10-pMV-YgeOgcv5D3_rJ74TlmBNb5JoN4-p-ooeSOO6MP2nhXYme2yjwfQ6PvzxVtrAZNrpaCY6X_YJlT7mAZz34YUdwMUZkQ24M-V9z19G7F0mr5c28L4_5Cdi11uFJnl9ODVace9Je2C1G7e7L0gHn6j0e_CNS6_7tCTl5Yd9zegQAyc-IujyOqkuXjIwams" />
            </Link>
          </div>
          <nav className="hidden xl:flex items-center gap-6">
            <Link className="text-primary/70 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" to="/">Inicio</Link>
            <Link className="text-primary/70 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" to="/habitaciones">Habitaciones</Link>
            <Link className="text-primary/70 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" to="/restaurante">Restaurante</Link>
            <Link className="text-primary/70 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" to="/life">Life</Link>
            <Link className="text-primary/70 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" to="/corporativos">Corporativos</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 mr-4 border-r border-primary/10 pr-4">
              <button className="p-1.5 hover:bg-primary/5 rounded transition-colors text-primary/70 hover:text-primary">
                <span className="material-symbols-outlined text-lg">language</span>
              </button>
              <button className="p-1.5 hover:bg-primary/5 rounded transition-colors text-primary/70 hover:text-primary">
                <span className="material-symbols-outlined text-lg">payments</span>
              </button>
              <Link to="/dark" className="p-1.5 hover:bg-primary/5 rounded transition-colors text-primary/70 hover:text-primary flex items-center">
                <span className="material-symbols-outlined text-lg">dark_mode</span>
              </Link>
            </div>
            <Link to="/habitaciones#habitaciones" className="hidden sm:flex items-center justify-center rounded px-5 h-9 bg-primary text-creme text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
              Reservar ahora
            </Link>
            <Link to="/login" className="flex items-center justify-center rounded h-9 px-5 border border-primary/20 bg-transparent text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary/5 transition-all">
              Iniciar sesion
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-primary text-creme pt-24 pb-12 px-6 lg:px-20 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div>
              <img alt="Logo Aviro Light" className="h-8 mb-10 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNUt7wKt_B06xjYbaqm6cdoDpJDGsjXVaoglnrtbalW_k1DPSRu9Yzr1rzoVx-nG5KIYJj5IEhbmwCwZfqxOjZlRPzPow7zokCgmYScctR0RvjlymrJBb1q5a7z0E-4BUXYEL86SymghoWyLZftMAMiY1kbFx_69VbSW8MEkw42nOYgPNRrQ5c3p0Q01dRm7KAsxD4sBQO8ch8jVQ55YXMJ9EgFnwgiqTS_1GPs5zRnK5c6k4nF8uItYrvoRkl2Op1kqpqHlOD1RS" />
              <p className="text-creme/60 text-sm leading-relaxed mb-10">Elevando el estándar de hospitalidad en la ciudad para viajeros de negocios y placer.</p>
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
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-creme">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-creme/60 text-sm">
                <li><Link className="hover:text-creme transition-colors" to="/">Inicio</Link></li>
                <li><Link className="hover:text-creme transition-colors" to="/restaurante">Nuestros Servicios</Link></li>
                <li><Link className="hover:text-creme transition-colors" to="/habitaciones">Habitaciones</Link></li>
                <li><a className="hover:text-creme transition-colors" href="#">Preguntas Frecuentes</a></li>
                <li><a className="hover:text-creme transition-colors" href="#">Libro de Reclamaciones</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-creme">Servicios</h4>
              <ul className="space-y-4 text-creme/60 text-sm">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Lavandería Express</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Room Service 24h</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Pet Friendly</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Salas de Reunión</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-xs text-secondary">check</span> Gimnasio</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-creme">Contacto</h4>
              <ul className="space-y-5 text-creme/60 text-sm">
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
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-creme/40 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2024 Hotel Aviro. Todos los derechos reservados.</p>
            <div className="flex gap-10">
              <a className="hover:text-creme transition-colors" href="#">Términos y Condiciones</a>
              <a className="hover:text-creme transition-colors" href="#">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
