
export default function Huespedes() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-0 w-72 bg-primary text-creme flex flex-col z-50 xl:w-80">
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
          <a className="sidebar-link active" href="#">
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
      <main className="ml-72 flex-grow flex flex-col min-h-screen overflow-hidden xl:ml-80" dangerouslySetInnerHTML={{ __html: `
        <header class="bg-creme/95 backdrop-blur-md border-b border-primary/5 px-10 py-6 flex items-center justify-between xl:px-16">
          <div class="flex items-center gap-8">
            <div>
              <h1 class="text-2xl font-black text-primary tracking-tighter uppercase">Directorio de Huéspedes</h1>
              <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Recepción • Gestión en Tiempo Real</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="relative group">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-lg">search</span>
              <input class="bg-white border border-primary/10 rounded-sm pl-10 pr-4 py-2.5 text-[10px] font-black uppercase tracking-widest focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="BUSCAR POR NOMBRE O ID..." type="text"/>
            </div>
            <button class="bg-secondary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-sm">
              <span class="material-symbols-outlined text-sm">person_add</span>
              Nuevo Registro
            </button>
          </div>
        </header>
        <div class="flex flex-grow overflow-hidden">
          <div class="w-64 border-r border-primary/5 p-6 space-y-8 bg-white/50 overflow-y-auto">
            <div>
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Filtrar Vista</h3>
              <div class="space-y-3">
                <label class="flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <input checked="" class="form-radio text-primary border-primary/20 size-4" name="guest_filter" type="radio"/>
                    <span class="text-[10px] font-bold uppercase tracking-widest">Todos</span>
                  </div>
                  <span class="text-[9px] font-bold text-muted">142</span>
                </label>
                <label class="flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <input class="form-radio text-primary border-primary/20 size-4" name="guest_filter" type="radio"/>
                    <span class="text-[10px] font-bold uppercase tracking-widest">En Casa</span>
                  </div>
                  <span class="text-[9px] font-bold text-muted">48</span>
                </label>
                <label class="flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <input class="form-radio text-primary border-primary/20 size-4" name="guest_filter" type="radio"/>
                    <span class="text-[10px] font-bold uppercase tracking-widest">Llegadas</span>
                  </div>
                  <span class="text-[9px] font-bold text-muted">12</span>
                </label>
                <label class="flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <input class="form-radio text-primary border-primary/20 size-4" name="guest_filter" type="radio"/>
                    <span class="text-[10px] font-bold uppercase tracking-widest">Histórico</span>
                  </div>
                  <span class="text-[9px] font-bold text-muted">82</span>
                </label>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Acciones Rápidas</h3>
              <button class="w-full flex items-center justify-between p-4 bg-primary/5 hover:bg-primary/10 transition-all rounded-sm group mb-2">
                <span class="text-[10px] font-black uppercase tracking-widest">Ver Perfil Completo</span>
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button class="w-full flex items-center justify-between p-4 bg-primary/5 hover:bg-primary/10 transition-all rounded-sm group">
                <span class="text-[10px] font-black uppercase tracking-widest">Generar Reporte</span>
                <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">download</span>
              </button>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <div class="bg-secondary/5 p-4 border border-secondary/10">
                <p class="text-[9px] font-black uppercase text-secondary mb-1">Carga Operativa</p>
                <div class="flex items-end justify-between">
                  <span class="text-2xl font-black text-secondary">86%</span>
                  <span class="text-[10px] font-bold text-muted mb-1">Ocupación Hoy</span>
                </div>
                <div class="mt-2 h-1 bg-secondary/10 w-full overflow-hidden">
                  <div class="h-full bg-secondary w-[86%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow overflow-auto bg-white">
            <table class="w-full border-collapse xl:px-16">
              <thead class="sticky top-0 z-20">
                <tr>
                  <th class="guest-table-header w-12 text-center xl:px-8">
                    <input class="form-checkbox text-primary border-primary/20 rounded-sm size-3" type="checkbox"/>
                  </th>
                  <th class="guest-table-header xl:px-8">
                    <div class="flex items-center gap-2 cursor-pointer group">
                      Huésped
                      <span class="material-symbols-outlined text-sm opacity-30 group-hover:opacity-100">swap_vert</span>
                    </div>
                  </th>
                  <th class="guest-table-header xl:px-8">Reserva ID</th>
                  <th class="guest-table-header xl:px-8">Check-In</th>
                  <th class="guest-table-header xl:px-8">Check-Out</th>
                  <th class="guest-table-header xl:px-8">Habitación</th>
                  <th class="guest-table-header xl:px-8">Estado</th>
                  <th class="guest-table-header text-right xl:px-8">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-primary/[0.02] transition-colors group">
                  <td class="guest-table-cell text-center xl:px-8"><input class="form-checkbox text-primary border-primary/20 rounded-sm size-3" type="checkbox"/></td>
                  <td class="guest-table-cell xl:px-8">
                    <div class="flex items-center gap-3">
                      <div class="size-8 rounded bg-primary/10 text-primary flex items-center justify-center font-black text-[10px]">MS</div>
                      <div>
                        <p class="font-black text-primary uppercase">Marcos Sullivan</p>
                        <p class="text-[9px] text-muted font-bold">MSULLIVAN@EMAIL.COM</p>
                      </div>
                    </div>
                  </td>
                  <td class="guest-table-cell font-mono text-[10px] font-bold xl:px-8">#AV-8902</td>
                  <td class="guest-table-cell xl:px-8">20 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">24 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="font-black text-primary">101</span>
                    <span class="text-[9px] text-muted block uppercase font-bold">Suite Exec</span>
                  </td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="status-badge status-checked-in">
                      <span class="size-1.5 rounded-full bg-green-500"></span>
                      Checked-In
                    </span>
                  </td>
                  <td class="guest-table-cell text-right xl:px-8">
                    <button class="p-2 hover:bg-primary/5 rounded-sm text-primary/40 hover:text-primary transition-all">
                      <span class="material-symbols-outlined text-lg">visibility</span>
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-primary/[0.02] transition-colors group">
                  <td class="guest-table-cell text-center xl:px-8"><input class="form-checkbox text-primary border-primary/20 rounded-sm size-3" type="checkbox"/></td>
                  <td class="guest-table-cell xl:px-8">
                    <div class="flex items-center gap-3">
                      <div class="size-8 rounded bg-primary/10 text-primary flex items-center justify-center font-black text-[10px]">LP</div>
                      <div>
                        <p class="font-black text-primary uppercase">Laura Peterson</p>
                        <p class="text-[9px] text-muted font-bold">L.PETERSON@WORK.COM</p>
                      </div>
                    </div>
                  </td>
                  <td class="guest-table-cell font-mono text-[10px] font-bold xl:px-8">#AV-8915</td>
                  <td class="guest-table-cell xl:px-8">24 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">27 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="font-black text-primary">101</span>
                    <span class="text-[9px] text-muted block uppercase font-bold">Suite Exec</span>
                  </td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="status-badge status-upcoming">
                      <span class="size-1.5 rounded-full bg-blue-500"></span>
                      Próximamente
                    </span>
                  </td>
                  <td class="guest-table-cell text-right xl:px-8">
                    <button class="p-2 hover:bg-primary/5 rounded-sm text-primary/40 hover:text-primary transition-all">
                      <span class="material-symbols-outlined text-lg">visibility</span>
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-primary/[0.02] transition-colors group">
                  <td class="guest-table-cell text-center xl:px-8"><input class="form-checkbox text-primary border-primary/20 rounded-sm size-3" type="checkbox"/></td>
                  <td class="guest-table-cell xl:px-8">
                    <div class="flex items-center gap-3">
                      <div class="size-8 rounded bg-primary/10 text-primary flex items-center justify-center font-black text-[10px]">JW</div>
                      <div>
                        <p class="font-black text-primary uppercase">James Wilson</p>
                        <p class="text-[9px] text-muted font-bold">JWILSON@YAHOO.COM</p>
                      </div>
                    </div>
                  </td>
                  <td class="guest-table-cell font-mono text-[10px] font-bold xl:px-8">#AV-8899</td>
                  <td class="guest-table-cell xl:px-8">18 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">22 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="font-black text-primary">202</span>
                    <span class="text-[9px] text-muted block uppercase font-bold">Deluxe King</span>
                  </td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="status-badge status-checked-out">
                      <span class="size-1.5 rounded-full bg-gray-400"></span>
                      Checked-Out
                    </span>
                  </td>
                  <td class="guest-table-cell text-right xl:px-8">
                    <button class="p-2 hover:bg-primary/5 rounded-sm text-primary/40 hover:text-primary transition-all">
                      <span class="material-symbols-outlined text-lg">visibility</span>
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-primary/[0.02] transition-colors group">
                  <td class="guest-table-cell text-center xl:px-8"><input class="form-checkbox text-primary border-primary/20 rounded-sm size-3" type="checkbox"/></td>
                  <td class="guest-table-cell xl:px-8">
                    <div class="flex items-center gap-3">
                      <div class="size-8 rounded bg-primary/10 text-primary flex items-center justify-center font-black text-[10px]">ER</div>
                      <div>
                        <p class="font-black text-primary uppercase">Elena Rodriguez</p>
                        <p class="text-[9px] text-muted font-bold">ELENA.ROD@OUTLOOK.COM</p>
                      </div>
                    </div>
                  </td>
                  <td class="guest-table-cell font-mono text-[10px] font-bold xl:px-8">#AV-8901</td>
                  <td class="guest-table-cell xl:px-8">24 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">29 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="font-black text-primary">102</span>
                    <span class="text-[9px] text-muted block uppercase font-bold">Suite Exec</span>
                  </td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="status-badge status-upcoming">
                      <span class="size-1.5 rounded-full bg-blue-500"></span>
                      Próximamente
                    </span>
                  </td>
                  <td class="guest-table-cell text-right xl:px-8">
                    <button class="p-2 hover:bg-primary/5 rounded-sm text-primary/40 hover:text-primary transition-all">
                      <span class="material-symbols-outlined text-lg">visibility</span>
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-primary/[0.02] transition-colors group">
                  <td class="guest-table-cell text-center xl:px-8"><input class="form-checkbox text-primary border-primary/20 rounded-sm size-3" type="checkbox"/></td>
                  <td class="guest-table-cell xl:px-8">
                    <div class="flex items-center gap-3">
                      <div class="size-8 rounded bg-primary/10 text-primary flex items-center justify-center font-black text-[10px]">KT</div>
                      <div>
                        <p class="font-black text-primary uppercase">Kevin Thompson</p>
                        <p class="text-[9px] text-muted font-bold">K.THOMPSON@CLIENTS.COM</p>
                      </div>
                    </div>
                  </td>
                  <td class="guest-table-cell font-mono text-[10px] font-bold xl:px-8">#AV-8920</td>
                  <td class="guest-table-cell xl:px-8">25 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">29 MAY, 2024</td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="font-black text-primary">202</span>
                    <span class="text-[9px] text-muted block uppercase font-bold">Deluxe King</span>
                  </td>
                  <td class="guest-table-cell xl:px-8">
                    <span class="status-badge status-upcoming">
                      <span class="size-1.5 rounded-full bg-blue-500"></span>
                      Próximamente
                    </span>
                  </td>
                  <td class="guest-table-cell text-right xl:px-8">
                    <button class="p-2 hover:bg-primary/5 rounded-sm text-primary/40 hover:text-primary transition-all">
                      <span class="material-symbols-outlined text-lg">visibility</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="p-6 flex items-center justify-between border-t border-primary/5 bg-white/50 xl:px-16">
              <p class="text-[10px] font-bold text-muted uppercase tracking-widest">Mostrando 1 - 5 de 142 huéspedes</p>
              <div class="flex gap-2">
                <button class="px-4 py-2 border border-primary/10 text-[10px] font-black uppercase tracking-widest hover:bg-primary/5 transition-all">Anterior</button>
                <button class="px-4 py-2 bg-primary text-creme text-[10px] font-black uppercase tracking-widest shadow-sm">1</button>
                <button class="px-4 py-2 border border-primary/10 text-[10px] font-black uppercase tracking-widest hover:bg-primary/5 transition-all">2</button>
                <button class="px-4 py-2 border border-primary/10 text-[10px] font-black uppercase tracking-widest hover:bg-primary/5 transition-all">3</button>
                <button class="px-4 py-2 border border-primary/10 text-[10px] font-black uppercase tracking-widest hover:bg-primary/5 transition-all">Siguiente</button>
              </div>
            </div>
          </div>
        </div>
        <footer class="px-10 py-6 border-t border-primary/5 flex justify-between items-center bg-white xl:px-16">
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

