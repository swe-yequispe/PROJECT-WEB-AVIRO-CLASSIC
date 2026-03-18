
export default function AdminHabitaciones() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-auto w-64 bg-primary text-creme flex flex-col z-50 border-r border-white/5">
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
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">date_range</span>
            Calendario
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">analytics</span>
            Reportes
          </a>
          <a className="sidebar-link active" href="#">
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
      <main className="ml-64 flex-grow flex flex-col min-h-screen overflow-hidden bg-creme" dangerouslySetInnerHTML={{ __html: `
        <header class="bg-creme/95 backdrop-blur-md border-b border-primary/5 px-10 py-6 flex items-center justify-between sticky top-0 z-40 shadow-sm">
          <div class="flex items-center gap-8">
            <div>
              <h1 class="text-2xl font-black text-primary tracking-tighter uppercase">AVIRO INVENTARIO</h1>
              <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Administración de Habitaciones • En Vivo</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-lg">search</span>
              <input class="bg-white border border-primary/10 pl-10 pr-4 py-2.5 text-[10px] font-black uppercase tracking-widest focus:ring-secondary focus:border-secondary w-64" placeholder="BUSCAR HABITACIÓN..." type="text"/>
            </div>
            <button class="bg-secondary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-sm">
              <span class="material-symbols-outlined text-sm">add</span>
              Nueva Habitación
            </button>
          </div>
        </header>
        <div class="flex flex-grow overflow-hidden">
          <div class="w-64 border-r border-primary/5 p-6 space-y-8 bg-white/50 overflow-y-auto">
            <div>
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Filtrar por Tipo</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Suite Ejecutiva</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Deluxe King</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Standard Twin</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Junior Suite</span>
                </label>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Estado Actual</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-green-600 border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Disponible</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-red-600 border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Ocupada</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-orange-600 border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Mantenimiento</span>
                </label>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <div class="bg-primary/5 p-4 border border-primary/10">
                <p class="text-[9px] font-black uppercase text-primary mb-1">Ocupación Total</p>
                <div class="flex items-end justify-between">
                  <span class="text-2xl font-black text-primary">74%</span>
                  <span class="text-[10px] font-bold text-muted mb-1">48/65 HAB</span>
                </div>
                <div class="mt-2 h-1 bg-primary/10 w-full overflow-hidden">
                  <div class="h-full bg-primary w-[74%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow overflow-y-auto p-10 bg-white/30 p-12">
            <div class="mb-6 flex justify-between items-end">
              <div class="flex gap-4">
                <button class="text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary flex items-center gap-1 border-b-2 border-transparent hover:border-primary pb-1 transition-all">
                  Todas (120)
                </button>
                <button class="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 border-b-2 border-secondary pb-1">
                  Disponibles (85)
                </button>
                <button class="text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary flex items-center gap-1 border-b-2 border-transparent hover:border-primary pb-1 transition-all">
                  Ocupadas (25)
                </button>
                <button class="text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary flex items-center gap-1 border-b-2 border-transparent hover:border-primary pb-1 transition-all">
                  Mantenimiento (10)
                </button>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[10px] font-bold uppercase text-muted">Acciones en lote:</span>
                <select class="bg-white border border-primary/10 text-[10px] font-black uppercase tracking-widest py-1.5 focus:ring-secondary focus:border-secondary">
                  <option>Cambiar Estado</option>
                  <option>Actualizar Precio</option>
                  <option>Asignar Limpieza</option>
                </select>
                <button class="bg-primary text-creme px-4 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-primary/90">Aplicar</button>
              </div>
            </div>
            <div class="bg-white border border-primary/5 shadow-sm overflow-hidden">
              <table class="w-full text-left border-collapse">
                <thead class="bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary/10">
                  <tr>
                    <th class="px-4 py-5 cursor-pointer hover:bg-primary/10 group transition-colors">
                      <input class="form-checkbox text-secondary border-primary/20 rounded-sm size-4" type="checkbox"/>
                    </th>
                    <th class="px-4 py-5 cursor-pointer hover:bg-primary/10 group transition-colors">
                      <div class="flex items-center gap-1">
                        Número <span class="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100">swap_vert</span>
                      </div>
                    </th>
                    <th class="px-4 py-5 cursor-pointer hover:bg-primary/10 group transition-colors">
                      <div class="flex items-center gap-1">
                        Tipo de Habitación <span class="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100">swap_vert</span>
                      </div>
                    </th>
                    <th class="px-4 py-5 cursor-pointer hover:bg-primary/10 group transition-colors">
                      <div class="flex items-center gap-1">
                        Estado Actual <span class="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100">swap_vert</span>
                      </div>
                    </th>
                    <th class="px-4 py-5 cursor-pointer hover:bg-primary/10 group transition-colors">
                      <div class="flex items-center justify-center gap-1">
                        Capacidad <span class="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100">swap_vert</span>
                      </div>
                    </th>
                    <th class="px-4 py-5 cursor-pointer hover:bg-primary/10 group transition-colors">
                      <div class="flex items-center justify-end gap-1">
                        Precio Base <span class="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100">swap_vert</span>
                      </div>
                    </th>
                    <th class="px-4 py-5 cursor-pointer hover:bg-primary/10 group transition-colors">Acciones</th>
                  </tr>
                </thead>
                <tbody class="text-[11px] font-medium text-primary divide-y divide-primary/5">
                  <tr class="table-row-hover transition-colors">
                    <td class="px-4 py-4">
                      <input class="form-checkbox text-secondary border-primary/20 rounded-sm size-4" type="checkbox"/>
                    </td>
                    <td class="px-4 py-4">101</td>
                    <td class="px-4 py-4">Suite Ejecutiva</td>
                    <td class="px-4 py-4">
                      <select class="status-badge status-available border-none bg-green-100 cursor-pointer focus:ring-0">
                        <option selected="">Disponible</option>
                        <option>Ocupada</option>
                        <option>Mantenimiento</option>
                      </select>
                    </td>
                    <td class="px-4 py-4">2 Adultos</td>
                    <td class="px-4 py-4">$245.00</td>
                    <td class="px-4 py-4">
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">edit</span></button>
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">more_vert</span></button>
                    </td>
                  </tr>
                  <tr class="table-row-hover transition-colors">
                    <td class="px-4 py-4">
                      <input class="form-checkbox text-secondary border-primary/20 rounded-sm size-4" type="checkbox"/>
                    </td>
                    <td class="px-4 py-4">102</td>
                    <td class="px-4 py-4">Deluxe King</td>
                    <td class="px-4 py-4">
                      <select class="status-badge status-occupied border-none bg-red-100 cursor-pointer focus:ring-0">
                        <option>Disponible</option>
                        <option selected="">Ocupada</option>
                        <option>Mantenimiento</option>
                      </select>
                    </td>
                    <td class="px-4 py-4">2 Adultos</td>
                    <td class="px-4 py-4">$180.00</td>
                    <td class="px-4 py-4">
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">edit</span></button>
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">more_vert</span></button>
                    </td>
                  </tr>
                  <tr class="table-row-hover transition-colors">
                    <td class="px-4 py-4">
                      <input class="form-checkbox text-secondary border-primary/20 rounded-sm size-4" type="checkbox"/>
                    </td>
                    <td class="px-4 py-4">103</td>
                    <td class="px-4 py-4">Standard Twin</td>
                    <td class="px-4 py-4">
                      <select class="status-badge status-maintenance border-none bg-orange-100 cursor-pointer focus:ring-0">
                        <option>Disponible</option>
                        <option>Ocupada</option>
                        <option selected="">Mantenimiento</option>
                      </select>
                    </td>
                    <td class="px-4 py-4">2 Adultos</td>
                    <td class="px-4 py-4">$120.00</td>
                    <td class="px-4 py-4">
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">edit</span></button>
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">more_vert</span></button>
                    </td>
                  </tr>
                  <tr class="table-row-hover transition-colors">
                    <td class="px-4 py-4">
                      <input class="form-checkbox text-secondary border-primary/20 rounded-sm size-4" type="checkbox"/>
                    </td>
                    <td class="px-4 py-4">201</td>
                    <td class="px-4 py-4">Suite Ejecutiva</td>
                    <td class="px-4 py-4">
                      <select class="status-badge status-available border-none bg-green-100 cursor-pointer focus:ring-0">
                        <option selected="">Disponible</option>
                        <option>Ocupada</option>
                        <option>Mantenimiento</option>
                      </select>
                    </td>
                    <td class="px-4 py-4">2 Adultos</td>
                    <td class="px-4 py-4">$245.00</td>
                    <td class="px-4 py-4">
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">edit</span></button>
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">more_vert</span></button>
                    </td>
                  </tr>
                  <tr class="table-row-hover transition-colors">
                    <td class="px-4 py-4">
                      <input class="form-checkbox text-secondary border-primary/20 rounded-sm size-4" type="checkbox"/>
                    </td>
                    <td class="px-4 py-4">202</td>
                    <td class="px-4 py-4">Junior Suite</td>
                    <td class="px-4 py-4">
                      <select class="status-badge status-available border-none bg-green-100 cursor-pointer focus:ring-0">
                        <option selected="">Disponible</option>
                        <option>Ocupada</option>
                        <option>Mantenimiento</option>
                      </select>
                    </td>
                    <td class="px-4 py-4">3 Adultos</td>
                    <td class="px-4 py-4">$210.00</td>
                    <td class="px-4 py-4">
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">edit</span></button>
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">more_vert</span></button>
                    </td>
                  </tr>
                  <tr class="table-row-hover transition-colors">
                    <td class="px-4 py-4">
                      <input class="form-checkbox text-secondary border-primary/20 rounded-sm size-4" type="checkbox"/>
                    </td>
                    <td class="px-4 py-4">203</td>
                    <td class="px-4 py-4">Standard Twin</td>
                    <td class="px-4 py-4">
                      <select class="status-badge status-occupied border-none bg-red-100 cursor-pointer focus:ring-0">
                        <option>Disponible</option>
                        <option selected="">Ocupada</option>
                        <option>Mantenimiento</option>
                      </select>
                    </td>
                    <td class="px-4 py-4">2 Adultos</td>
                    <td class="px-4 py-4">$120.00</td>
                    <td class="px-4 py-4">
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">edit</span></button>
                      <button class="p-1 hover:text-secondary transition-colors"><span class="material-symbols-outlined text-lg">more_vert</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="px-6 py-4 border-t border-primary/5 bg-primary/[0.02] flex justify-between items-center">
                <span class="text-[10px] font-bold text-muted uppercase tracking-widest">Mostrando 1-10 de 120 habitaciones</span>
                <div class="flex gap-1">
                  <button class="size-8 flex items-center justify-center border border-primary/10 hover:bg-primary/5 text-primary transition-colors">
                    <span class="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button class="size-8 flex items-center justify-center bg-primary text-creme font-bold text-[10px]">1</button>
                  <button class="size-8 flex items-center justify-center border border-primary/10 hover:bg-primary/5 text-primary transition-colors font-bold text-[10px]">2</button>
                  <button class="size-8 flex items-center justify-center border border-primary/10 hover:bg-primary/5 text-primary transition-colors font-bold text-[10px]">3</button>
                  <button class="size-8 flex items-center justify-center border border-primary/10 hover:bg-primary/5 text-primary transition-colors">
                    <span class="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="px-10 py-6 border-t border-primary/5 flex justify-between items-center bg-white mt-auto sticky bottom-0 z-40">
          <p class="text-[10px] font-bold text-muted uppercase tracking-widest">© 2024 Hotel Aviro Intelligence System</p>
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

