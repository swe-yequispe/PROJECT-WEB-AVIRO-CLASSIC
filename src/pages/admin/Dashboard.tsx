
export default function Dashboard() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-0 w-72 bg-primary text-creme flex flex-col z-50">
        <div className="p-8 border-b border-white/5">
          <img alt="Logo Aviro Light" className="h-8 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNUt7wKt_B06xjYbaqm6cdoDpJDGsjXVaoglnrtbalW_k1DPSRu9Yzr1rzoVx-nG5KIYJj5IEhbmwCwZfqxOjZlRPzPow7zokCgmYScctR0RvjlymrJBb1q5a7z0E-4BUXYEL86SymghoWyLZftMAMiY1kbFx_69VbSW8MEkw42nOYgPNRrQ5c3p0Q01dRm7KAsxD4sBQO8ch8jVQ55YXMJ9EgFnwgiqTS_1GPs5zRnK5c6k4nF8uItYrvoRkl2Op1kqpqHlOD1RS"/>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mt-4">Panel de Control</p>
        </div>
        <nav className="flex-grow py-6 overflow-y-auto">
          <a className="sidebar-link active" href="#">
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
          <a className="sidebar-link" href="#">
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
      <main className="ml-72 flex-grow overflow-y-auto min-h-screen max-w-[1152px] mx-auto" dangerouslySetInnerHTML={{ __html: `
        <header class="sticky top-0 z-40 bg-creme/95 backdrop-blur-md border-b border-primary/5 px-10 py-6 flex items-center justify-between w-full">
          <div>
            <h1 class="text-2xl font-black text-primary tracking-tighter">Vista General de Operaciones</h1>
            <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Lunes, 20 de Mayo 2024</p>
          </div>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2 bg-white px-4 py-2 border border-primary/5 rounded">
              <span class="material-symbols-outlined text-secondary text-lg">notifications</span>
              <span class="text-[10px] font-black text-primary uppercase tracking-widest">3 Avisos nuevos</span>
            </div>
            <button class="bg-primary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all">
              Nueva Reserva
            </button>
          </div>
        </header>
        <div class="p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            <div class="stat-card">
              <div class="flex items-start justify-between mb-4">
                <span class="material-symbols-outlined text-primary bg-primary/5 p-2 rounded">confirmation_number</span>
                <span class="text-[10px] font-black text-green-600 uppercase tracking-widest">+12% vs ayer</span>
              </div>
              <p class="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Nuevas Reservas</p>
              <p class="text-4xl font-black text-primary tracking-tighter">24</p>
            </div>
            <div class="stat-card">
              <div class="flex items-start justify-between mb-4">
                <span class="material-symbols-outlined text-secondary bg-secondary/5 p-2 rounded">luggage</span>
              </div>
              <p class="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Llegadas Pendientes</p>
              <p class="text-4xl font-black text-primary tracking-tighter">18</p>
            </div>
            <div class="stat-card">
              <div class="flex items-start justify-between mb-4">
                <span class="material-symbols-outlined text-primary bg-primary/5 p-2 rounded">bed</span>
              </div>
              <p class="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Ocupación Actual</p>
              <div class="flex items-baseline gap-2">
                <p class="text-4xl font-black text-primary tracking-tighter">85%</p>
                <p class="text-[10px] font-bold text-muted uppercase">42/50 Hab.</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="flex items-start justify-between mb-4">
                <span class="material-symbols-outlined text-secondary bg-secondary/5 p-2 rounded">payments</span>
              </div>
              <p class="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">RevPAR (Hoy)</p>
              <p class="text-4xl font-black text-primary tracking-tighter">$142.50</p>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 bg-white border border-primary/5 rounded-sm overflow-hidden shadow-sm">
              <div class="px-8 py-6 border-b border-primary/5 flex items-center justify-between bg-primary/5">
                <h3 class="text-xs font-black uppercase tracking-[0.2em] text-primary">Últimas Reservas Realizadas</h3>
                <a class="text-[10px] font-black text-secondary uppercase tracking-widest hover:underline" href="#">Ver todas</a>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="bg-primary/5 border-b border-primary/10">
                      <th class="px-8 py-4 text-left text-[9px] font-black uppercase tracking-widest text-muted">ID Reserva</th>
                      <th class="px-8 py-4 text-left text-[9px] font-black uppercase tracking-widest text-muted">Huésped</th>
                      <th class="px-8 py-4 text-left text-[9px] font-black uppercase tracking-widest text-muted">Check-in</th>
                      <th class="px-8 py-4 text-left text-[9px] font-black uppercase tracking-widest text-muted">Estado</th>
                      <th class="px-8 py-4 text-right text-[9px] font-black uppercase tracking-widest text-muted">Total</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-primary/5">
                    <tr class="hover:bg-creme/20 transition-colors">
                      <td class="px-8 py-4 text-xs font-bold text-primary">#AV-8902</td>
                      <td class="px-8 py-4">
                        <p class="text-xs font-black text-primary">Marcos Sullivan</p>
                        <p class="text-[9px] text-muted font-medium">Suite Ejecutiva</p>
                      </td>
                      <td class="px-8 py-4 text-xs font-medium text-muted">22 May, 2024</td>
                      <td class="px-8 py-4">
                        <span class="px-3 py-1 bg-green-100 text-green-700 text-[9px] font-black uppercase rounded-full">Confirmada</span>
                      </td>
                      <td class="px-8 py-4 text-right text-xs font-black text-primary">$450.00</td>
                    </tr>
                    <tr class="hover:bg-creme/20 transition-colors">
                      <td class="px-8 py-4 text-xs font-bold text-primary">#AV-8901</td>
                      <td class="px-8 py-4">
                        <p class="text-xs font-black text-primary">Elena Rodriguez</p>
                        <p class="text-[9px] text-muted font-medium">Habitación Doble</p>
                      </td>
                      <td class="px-8 py-4 text-xs font-medium text-muted">21 May, 2024</td>
                      <td class="px-8 py-4">
                        <span class="px-3 py-1 bg-secondary/10 text-secondary text-[9px] font-black uppercase rounded-full">Pendiente</span>
                      </td>
                      <td class="px-8 py-4 text-right text-xs font-black text-primary">$280.00</td>
                    </tr>
                    <tr class="hover:bg-creme/20 transition-colors">
                      <td class="px-8 py-4 text-xs font-bold text-primary">#AV-8899</td>
                      <td class="px-8 py-4">
                        <p class="text-xs font-black text-primary">James Wilson</p>
                        <p class="text-[9px] text-muted font-medium">Deluxe King</p>
                      </td>
                      <td class="px-8 py-4 text-xs font-medium text-muted">20 May, 2024</td>
                      <td class="px-8 py-4">
                        <span class="px-3 py-1 bg-green-100 text-green-700 text-[9px] font-black uppercase rounded-full">Confirmada</span>
                      </td>
                      <td class="px-8 py-4 text-right text-xs font-black text-primary">$320.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="bg-white border border-primary/5 rounded-sm overflow-hidden shadow-sm">
              <div class="px-8 py-6 border-b border-primary/5 bg-primary/5">
                <h3 class="text-xs font-black uppercase tracking-[0.2em] text-primary">Estado de Inventario</h3>
              </div>
              <div class="p-8 space-y-6">
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-[10px] font-black uppercase tracking-widest text-primary">Suite Ejecutiva</span>
                    <span class="text-[10px] font-black text-secondary uppercase">2 Libres</span>
                  </div>
                  <div class="h-1.5 w-full bg-primary/5 rounded-full overflow-hidden">
                    <div class="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-[10px] font-black uppercase tracking-widest text-primary">Deluxe King</span>
                    <span class="text-[10px] font-black text-secondary uppercase">5 Libres</span>
                  </div>
                  <div class="h-1.5 w-full bg-primary/5 rounded-full overflow-hidden">
                    <div class="h-full bg-primary w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-[10px] font-black uppercase tracking-widest text-primary">Habitación Doble</span>
                    <span class="text-[10px] font-black text-secondary uppercase">1 Libre</span>
                  </div>
                  <div class="h-1.5 w-full bg-primary/5 rounded-full overflow-hidden">
                    <div class="h-full bg-secondary w-[92%]"></div>
                  </div>
                </div>
                <div class="pt-6 border-t border-primary/5">
                  <button class="w-full flex items-center justify-between text-left group">
                    <div>
                      <p class="text-[10px] font-black uppercase tracking-widest text-primary">Próximos Mantenimientos</p>
                      <p class="text-[9px] font-bold text-muted uppercase mt-1">3 Habitaciones programadas</p>
                    </div>
                    <span class="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 bg-secondary/10 border border-secondary/20 p-6 flex items-center gap-4">
            <span class="material-symbols-outlined text-secondary text-2xl">error_outline</span>
            <div class="flex-grow">
              <p class="text-xs font-black text-primary uppercase tracking-widest">Alerta de Seguridad</p>
              <p class="text-[10px] font-bold text-primary/70 uppercase tracking-widest leading-relaxed">
                Se ha detectado un inicio de sesión inusual desde una nueva ubicación (IP: 192.168.1.45). Por favor verifique el log de accesos.
              </p>
            </div>
            <button class="text-[10px] font-black text-secondary uppercase tracking-widest border-b-2 border-secondary pb-0.5">Revisar Log</button>
          </div>
        </div>
        <footer class="mt-12 px-10 py-6 border-t border-primary/5 flex justify-between items-center bg-white/30">
          <p class="text-[10px] font-bold text-muted uppercase tracking-widest">© 2024 Hotel Aviro Administrative System</p>
          <div class="flex gap-6 text-[10px] font-bold text-muted uppercase tracking-widest">
            <a class="hover:text-primary transition-colors" href="#">Ayuda</a>
            <a class="hover:text-primary transition-colors" href="#">Términos</a>
            <a class="hover:text-primary transition-colors" href="#">Soporte</a>
          </div>
        </footer>
      `}} />
    </div>
  );
}

