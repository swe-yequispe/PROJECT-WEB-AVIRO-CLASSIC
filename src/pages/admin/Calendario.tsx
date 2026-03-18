
export default function Calendario() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-0 w-72 bg-primary text-creme flex flex-col z-50">
        <div className="p-8 border-b border-white/5">
          <img alt="Logo Aviro Light" className="h-8 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNUt7wKt_B06xjYbaqm6cdoDpJDGsjXVaoglnrtbalW_k1DPSRu9Yzr1rzoVx-nG5KIYJj5IEhbmwCwZfqxOjZlRPzPow7zokCgmYScctR0RvjlymrJBb1q5a7z0E-4BUXYEL86SymghoWyLZftMAMiY1kbFx_69VbSW8MEkw42nOYgPNRrQ5c3p0Q01dRm7KAsxD4sBQO8ch8jVQ55YXMJ9EgFnwgiqTS_1GPs5zRnK5c6k4nF8uItYrvoRkl2Op1kqpqHlOD1RS"/>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mt-4">Panel de Control</p>
        </div>
        <nav className="flex-grow py-6 overflow-y-auto">
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            Dashboard
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">calendar_month</span>
            Reservas
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">group</span>
            Huéspedes
          </a>
          <a className="sidebar-link active" href="#">
            <span className="material-symbols-outlined text-xl">date_range</span>
            Calendario
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">analytics</span>
            Reportes
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">hotel</span>
            Habitaciones
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">settings</span>
            Configuración
          </a>
        </nav>
        <div className="p-6 border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded bg-secondary flex items-center justify-center font-black text-creme">JD</div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider">Juan Delgado</p>
              <p className="text-[10px] text-creme/50 uppercase font-bold">Administrador</p>
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
              <h1 class="text-3xl font-black text-primary tracking-tighter uppercase">hotel-aviro-planificador</h1>
              <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Calendario Mensual • Mayo 2024</p>
            </div>
            <div class="flex items-center bg-primary/5 rounded-sm p-1">
              <button class="p-2 hover:bg-white transition-all">
                <span class="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <span class="px-4 text-[11px] font-black uppercase tracking-widest">Mayo 2024</span>
              <button class="p-2 hover:bg-white transition-all">
                <span class="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="relative group">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-lg">search</span>
              <input class="bg-white border border-primary/10 rounded-sm pl-10 pr-4 py-2.5 text-[11px] font-black uppercase tracking-widest focus:ring-1 focus:ring-primary w-80 transition-all" placeholder="BUSCAR RESERVA..." type="text"/>
            </div>
            <button class="bg-secondary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-sm">
              <span class="material-symbols-outlined text-sm">add_box</span>
              Nueva Reserva
            </button>
          </div>
        </header>
        <div class="flex flex-grow overflow-hidden">
          <div class="w-64 border-r border-primary/5 p-6 space-y-8 bg-white/50 overflow-y-auto">
            <div>
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Estado de Reserva</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-green-600 border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Confirmado</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-blue-600 border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Pendiente</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input class="form-checkbox text-red-600 border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Cancelado</span>
                </label>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Tipo de Habitación</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Suite Exec</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Deluxe King</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Standard Twin</span>
                </label>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <div class="bg-secondary/5 p-4 border border-secondary/10">
                <p class="text-[9px] font-black uppercase text-secondary mb-1">Capacidad Mensual</p>
                <div class="flex items-end justify-between">
                  <span class="text-2xl font-black text-secondary">74%</span>
                  <span class="text-[10px] font-bold text-muted mb-1">Reservado</span>
                </div>
                <div class="mt-2 h-1 bg-secondary/10 w-full overflow-hidden">
                  <div class="h-full bg-secondary w-[74%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow flex flex-col overflow-auto bg-white border-l border-primary/5">
            <div class="grid grid-cols-7 border-b border-primary/10 sticky top-0 z-10 bg-white">
              <div class="calendar-day-header">Lun</div>
              <div class="calendar-day-header">Mar</div>
              <div class="calendar-day-header">Mié</div>
              <div class="calendar-day-header">Jue</div>
              <div class="calendar-day-header">Vie</div>
              <div class="calendar-day-header">Sáb</div>
              <div class="calendar-day-header">Dom</div>
            </div>
            <div class="calendar-grid flex-grow">
              <div class="calendar-cell other-month"><span class="text-[10px] font-black">29</span></div>
              <div class="calendar-cell other-month"><span class="text-[10px] font-black">30</span></div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">1</span>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">2</span>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">3</span>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">4</span>
                <div class="res-block res-confirmado">
                  <span class="check-in-tag"><span class="material-symbols-outlined text-[8px]">login</span> In</span>
                  <span>M. SULLIVAN</span>
                  <span class="opacity-60">Hab. 101</span>
                </div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">5</span>
                <div class="res-block res-confirmado">
                  <span>M. SULLIVAN</span>
                  <span class="opacity-60">Hab. 101</span>
                </div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">6</span>
                <div class="res-block res-confirmado">
                  <span>M. SULLIVAN</span>
                  <span class="opacity-60">Hab. 101</span>
                </div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">7</span>
                <div class="res-block res-confirmado">
                  <span class="check-in-tag"><span class="material-symbols-outlined text-[8px]">logout</span> Out</span>
                  <span>M. SULLIVAN</span>
                </div>
              </div>
              <div class="calendar-cell"><span class="text-[10px] font-black">8</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">9</span></div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">10</span>
                <div class="res-block res-pendiente">
                  <span class="check-in-tag"><span class="material-symbols-outlined text-[8px]">login</span> In</span>
                  <span>E. RODRIGUEZ</span>
                  <span class="opacity-60">Hab. 102</span>
                </div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">11</span>
                <div class="res-block res-pendiente">
                  <span>E. RODRIGUEZ</span>
                  <span class="opacity-60">Hab. 102</span>
                </div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">12</span>
                <div class="res-block res-pendiente">
                  <span class="check-in-tag"><span class="material-symbols-outlined text-[8px]">logout</span> Out</span>
                  <span>E. RODRIGUEZ</span>
                </div>
              </div>
              <div class="calendar-cell"><span class="text-[10px] font-black">13</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">14</span></div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">15</span>
                <div class="res-block res-confirmado">
                  <span class="check-in-tag"><span class="material-symbols-outlined text-[8px]">login</span> In</span>
                  <span>J. WILSON</span>
                  <span class="opacity-60">Hab. 202</span>
                </div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">16</span>
                <div class="res-block res-confirmado">
                  <span>J. WILSON</span>
                  <span class="opacity-60">Hab. 202</span>
                </div>
              </div>
              <div class="calendar-cell"><span class="text-[10px] font-black">17</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">18</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">19</span></div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">20</span>
                <div class="res-block res-cancelado">
                  <span class="check-in-tag">CANCELADO</span>
                  <span>L. PETERSON</span>
                  <span class="opacity-60 text-red-900">Hab. 305</span>
                </div>
              </div>
              <div class="calendar-cell"><span class="text-[10px] font-black">21</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">22</span></div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">23</span>
                <div class="res-block res-confirmado">
                  <span class="check-in-tag"><span class="material-symbols-outlined text-[8px]">login</span> In</span>
                  <span>K. THOMPSON</span>
                  <span class="opacity-60">Hab. 101</span>
                </div>
              </div>
              <div class="calendar-cell bg-primary/5">
                <span class="text-[10px] font-black">24</span>
                <div class="res-block res-confirmado">
                  <span>K. THOMPSON</span>
                  <span class="opacity-60">Hab. 101</span>
                </div>
                <div class="mt-1 px-1 py-0.5 bg-secondary text-white text-[7px] font-black uppercase text-center rounded-full">Hoy</div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">25</span>
                <div class="res-block res-confirmado">
                  <span>K. THOMPSON</span>
                  <span class="opacity-60">Hab. 101</span>
                </div>
              </div>
              <div class="calendar-cell">
                <span class="text-[10px] font-black">26</span>
                <div class="res-block res-confirmado">
                  <span class="check-in-tag"><span class="material-symbols-outlined text-[8px]">logout</span> Out</span>
                  <span>K. THOMPSON</span>
                </div>
              </div>
              <div class="calendar-cell"><span class="text-[10px] font-black">27</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">28</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">29</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">30</span></div>
              <div class="calendar-cell"><span class="text-[10px] font-black">31</span></div>
              <div class="calendar-cell other-month"><span class="text-[10px] font-black">1</span></div>
              <div class="calendar-cell other-month"><span class="text-[10px] font-black">2</span></div>
            </div>
          </div>
        </div>
        <footer class="px-10 py-6 border-t border-primary/5 flex justify-between items-center bg-white">
          <p class="text-[10px] font-bold text-muted uppercase tracking-widest">© 2024 Hotel Aviro Administrative System</p>
          <div class="flex gap-6 text-[10px] font-bold text-muted uppercase tracking-widest">
            <a class="hover:text-primary transition-colors" href="#">Ayuda</a>
            <a class="hover:text-primary transition-colors" href="#">Términos</a>
            <a class="hover:text-primary transition-colors" href="#">Soporte Técnico</a>
          </div>
        </footer>
      `}} />
    </div>
  );
}

