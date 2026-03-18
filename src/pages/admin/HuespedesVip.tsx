
export default function HuespedesVip() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-0 w-72 bg-primary text-creme flex flex-col z-50">
        <div className="p-8 border-b border-white/5">
          <img alt="Logo Aviro Light" className="h-8 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNUt7wKt_B06xjYbaqm6cdoDpJDGsjXVaoglnrtbalW_k1DPSRu9Yzr1rzoVx-nG5KIYJj5IEhbmwCwZfqxOjZlRPzPow7zokCgmYScctR0RvjlymrJBb1q5a7z0E-4BUXYEL86SymghoWyLZftMAMiY1kbFx_69VbSW8MEkw42nOYgPNRrQ5c3p0Q01dRm7KAsxD4sBQO8ch8jVQ55YXMJ9EgFnwgiqTS_1GPs5zRnK5c6k4nF8uItYrvoRkl2Op1kqpqHlOD1RS"/>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mt-4">Loyalty Program Manager</p>
        </div>
        <nav className="flex-grow py-6 overflow-y-auto custom-scrollbar">
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            Dashboard
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">calendar_month</span>
            Reservas
          </a>
          <a className="sidebar-link active" href="#">
            <span className="material-symbols-outlined text-xl">stars</span>
            Huéspedes VIP
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">groups</span>
            Segmentos
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">mail</span>
            Comunicación
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">analytics</span>
            Retención
          </a>
        </nav>
        <div className="p-6 border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded bg-gold flex items-center justify-center font-black text-white">AM</div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider">Ana Martínez</p>
              <p className="text-[10px] text-creme/50 uppercase font-bold">Loyalty Director</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-sm">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </aside>
      <main className="ml-72 flex-grow flex flex-col min-h-screen overflow-hidden" dangerouslySetInnerHTML={{ __html: `
        <header class="bg-creme/95 backdrop-blur-md border-b border-primary/5 px-10 py-6 flex items-center justify-between">
          <div class="flex items-center gap-8">
            <div>
              <h1 class="text-2xl font-black text-primary tracking-tighter uppercase">Hotel Aviro - Registro de Huésped</h1>
              <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Gestión de Clientes de Alto Valor</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm">search</span>
                <input class="pl-10 pr-4 py-2 bg-white border border-primary/10 text-[10px] font-bold tracking-widest uppercase focus:ring-0 focus:border-primary w-64 rounded-sm" placeholder="BUSCAR HUÉSPED..." type="text"/>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <button class="bg-primary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">person_add</span>
              Nuevo Perfil VIP
            </button>
          </div>
        </header>
        <div class="flex flex-grow overflow-hidden">
          <div class="w-72 border-r border-primary/5 p-6 space-y-8 bg-white/50 overflow-y-auto custom-scrollbar">
            <div>
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Segmentos Destacados</h3>
              <div class="space-y-2">
                <button class="w-full flex items-center justify-between p-3 bg-gold/5 border border-gold/20 rounded-sm group hover:bg-gold/10 transition-all">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-gold">workspace_premium</span>
                    <span class="text-[10px] font-black uppercase tracking-widest">Nivel Gold</span>
                  </div>
                  <span class="text-[10px] font-black text-gold">24</span>
                </button>
                <button class="w-full flex items-center justify-between p-3 bg-primary/5 border border-primary/10 rounded-sm group hover:bg-primary/10 transition-all">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary">history</span>
                    <span class="text-[10px] font-black uppercase tracking-widest">Frecuentes</span>
                  </div>
                  <span class="text-[10px] font-black text-muted">142</span>
                </button>
                <button class="w-full flex items-center justify-between p-3 bg-secondary/5 border border-secondary/10 rounded-sm group hover:bg-secondary/10 transition-all">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-secondary">flight_takeoff</span>
                    <span class="text-[10px] font-black uppercase tracking-widest">Próximas Visitas</span>
                  </div>
                  <span class="text-[10px] font-black text-secondary">8</span>
                </button>
              </div>
            </div>
            <div>
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Plantillas Rápidas</h3>
              <div class="space-y-3">
                <a class="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors" href="#">
                  <span class="material-symbols-outlined text-lg">card_giftcard</span>
                  Bienvenida Personalizada
                </a>
                <a class="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors" href="#">
                  <span class="material-symbols-outlined text-lg">celebration</span>
                  Felicitación Cumpleaños
                </a>
                <a class="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors" href="#">
                  <span class="material-symbols-outlined text-lg">rate_review</span>
                  Encuesta Post-Estancia
                </a>
                <a class="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors" href="#">
                  <span class="material-symbols-outlined text-lg">priority_high</span>
                  Aviso de Upgrade VIP
                </a>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <div class="p-4 bg-primary text-creme rounded-sm">
                <p class="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Retención VIP</p>
                <p class="text-3xl font-black mt-1">94%</p>
                <div class="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div class="h-full bg-gold w-[94%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow overflow-auto bg-white p-8">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:grid-cols-3">
              <div class="vip-card">
                <div class="flex justify-between items-start mb-6">
                  <div class="flex gap-4">
                    <div class="size-16 rounded bg-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                      <span class="material-symbols-outlined text-3xl text-primary/30">account_circle</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-black uppercase tracking-tight">Elena Valenzuela</h4>
                      <p class="text-[10px] text-muted font-bold uppercase mt-0.5">Fundadora Global Corp</p>
                      <div class="mt-2 flex gap-2">
                        <span class="segment-badge bg-gold text-white">Nivel Oro</span>
                        <span class="segment-badge bg-primary/10 text-primary">Preferencial</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-[9px] font-black text-muted uppercase tracking-widest">Estancias</p>
                    <p class="text-xl font-black text-primary">28</p>
                  </div>
                </div>
                <div class="flex-grow space-y-4">
                  <div>
                    <p class="text-[9px] font-black uppercase text-muted tracking-widest mb-2 flex items-center gap-1">
                      <span class="material-symbols-outlined text-xs">favorite</span> Preferencias
                    </p>
                    <p class="text-[10px] font-medium leading-relaxed">Suite con vistas al mar, almohadas hipoalergénicas, agua mineral sin gas a temperatura ambiente.</p>
                  </div>
                  <div class="p-3 bg-secondary/5 border-l-2 border-secondary rounded-sm">
                    <p class="text-[9px] font-black uppercase text-secondary tracking-widest mb-1">Notas Especiales</p>
                    <p class="text-[10px] font-bold">Viaja con asistente. Requiere check-in express en habitación. Alérgica a las nueces.</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-primary/5 flex gap-3">
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest border border-primary/20 hover:bg-primary/5 transition-all">Ver Historial</button>
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest bg-primary text-creme hover:bg-primary/90 transition-all">Nueva Nota</button>
                </div>
              </div>
              <div class="vip-card">
                <div class="flex justify-between items-start mb-6">
                  <div class="flex gap-4">
                    <div class="size-16 rounded bg-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                      <span class="material-symbols-outlined text-3xl text-primary/30">account_circle</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-black uppercase tracking-tight">Ricardo Mendes</h4>
                      <p class="text-[10px] text-muted font-bold uppercase mt-0.5">Consultor Senior</p>
                      <div class="mt-2 flex gap-2">
                        <span class="segment-badge bg-gold/20 text-gold border border-gold/20">Nivel Oro</span>
                        <span class="segment-badge bg-blue-500/10 text-blue-500">Corporativo</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-[9px] font-black text-muted uppercase tracking-widest">Estancias</p>
                    <p class="text-xl font-black text-primary">15</p>
                  </div>
                </div>
                <div class="flex-grow space-y-4">
                  <div>
                    <p class="text-[9px] font-black uppercase text-muted tracking-widest mb-2 flex items-center gap-1">
                      <span class="material-symbols-outlined text-xs">favorite</span> Preferencias
                    </p>
                    <p class="text-[10px] font-medium leading-relaxed">Piso alto, cerca de elevadores. Periódico internacional diario. Gimnasio reservado 06:00 AM.</p>
                  </div>
                  <div class="p-3 bg-primary/5 border-l-2 border-primary rounded-sm">
                    <p class="text-[9px] font-black uppercase text-primary tracking-widest mb-1">Notas Especiales</p>
                    <p class="text-[10px] font-bold">Suele organizar cenas de negocios. Requiere reserva en restaurante 'The View' siempre.</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-primary/5 flex gap-3">
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest border border-primary/20 hover:bg-primary/5 transition-all">Ver Historial</button>
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest bg-primary text-creme hover:bg-primary/90 transition-all">Nueva Nota</button>
                </div>
              </div>
              <div class="vip-card border-gold/30 ring-1 ring-gold/10">
                <div class="flex justify-between items-start mb-6">
                  <div class="flex gap-4">
                    <div class="size-16 rounded bg-gold/10 flex items-center justify-center overflow-hidden border border-gold/20">
                      <span class="material-symbols-outlined text-3xl text-gold">account_circle</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-black uppercase tracking-tight">Sofia Lorenza</h4>
                      <p class="text-[10px] text-muted font-bold uppercase mt-0.5">Huésped Frecuente</p>
                      <div class="mt-2 flex gap-2">
                        <span class="segment-badge bg-secondary text-white">Nivel Platino</span>
                        <span class="segment-badge bg-primary/10 text-primary">Leal</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-[9px] font-black text-muted uppercase tracking-widest">Estancias</p>
                    <p class="text-xl font-black text-primary">42</p>
                  </div>
                </div>
                <div class="flex-grow space-y-4">
                  <div>
                    <p class="text-[9px] font-black uppercase text-muted tracking-widest mb-2 flex items-center gap-1">
                      <span class="material-symbols-outlined text-xs">favorite</span> Preferencias
                    </p>
                    <p class="text-[10px] font-medium leading-relaxed">Vino tinto de bienvenida. Fruta fresca orgánica. Sin fragancias fuertes en habitación.</p>
                  </div>
                  <div class="p-3 bg-secondary/5 border-l-2 border-secondary rounded-sm">
                    <p class="text-[9px] font-black uppercase text-secondary tracking-widest mb-1">Notas Especiales</p>
                    <p class="text-[10px] font-bold">Próximo aniversario el 12 de Junio. Preparar paquete 'Romance' sorpresa.</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-primary/5 flex gap-3">
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest border border-primary/20 hover:bg-primary/5 transition-all">Ver Historial</button>
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest bg-primary text-creme hover:bg-primary/90 transition-all">Nueva Nota</button>
                </div>
              </div>
              <div class="vip-card opacity-80">
                <div class="flex justify-between items-start mb-6">
                  <div class="flex gap-4">
                    <div class="size-16 rounded bg-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                      <span class="material-symbols-outlined text-3xl text-primary/30">account_circle</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-black uppercase tracking-tight">Marcus Thorne</h4>
                      <p class="text-[10px] text-muted font-bold uppercase mt-0.5">Inversionista</p>
                      <div class="mt-2 flex gap-2">
                        <span class="segment-badge bg-gold text-white">Nivel Oro</span>
                        <span class="segment-badge bg-blue-500/10 text-blue-500">Inversor</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-[9px] font-black text-muted uppercase tracking-widest">Estancias</p>
                    <p class="text-xl font-black text-primary">12</p>
                  </div>
                </div>
                <div class="flex-grow space-y-4">
                  <div>
                    <p class="text-[9px] font-black uppercase text-muted tracking-widest mb-2 flex items-center gap-1">
                      <span class="material-symbols-outlined text-xs">favorite</span> Preferencias
                    </p>
                    <p class="text-[10px] font-medium leading-relaxed">Cama extra firme. Café espresso premium en habitación. Silencio absoluto.</p>
                  </div>
                  <div class="p-3 bg-primary/5 border-l-2 border-primary rounded-sm">
                    <p class="text-[9px] font-black uppercase text-primary tracking-widest mb-1">Notas Especiales</p>
                    <p class="text-[10px] font-bold">Reserva siempre la Suite Presidencial. Requiere transfer privado al aeropuerto.</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-primary/5 flex gap-3">
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest border border-primary/20 hover:bg-primary/5 transition-all">Ver Historial</button>
                  <button class="flex-grow py-2.5 text-[9px] font-black uppercase tracking-widest bg-primary text-creme hover:bg-primary/90 transition-all">Nueva Nota</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="px-10 py-6 border-t border-primary/5 flex justify-between items-center bg-white">
          <p class="text-[10px] font-bold text-muted uppercase tracking-widest">© 2024 Hotel Aviro Loyalty System • High Value Segment Management</p>
          <div class="flex gap-6 text-[10px] font-bold text-muted uppercase tracking-widest">
            <a class="hover:text-primary transition-colors" href="#">Guía VIP</a>
            <a class="hover:text-primary transition-colors" href="#">Política de Privacidad</a>
            <a class="hover:text-primary transition-colors" href="#">Soporte</a>
          </div>
        </footer>
      `}} />
    </div>
  );
}

