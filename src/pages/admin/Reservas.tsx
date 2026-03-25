﻿
export default function Reservas() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-0 w-72 bg-primary text-creme flex flex-col z-50">
        <div className="p-8 border-b border-white/5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Aviró Hotel Plaza</span>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mt-4">Panel de Control</p>
        </div>
        <nav className="flex-grow py-6 overflow-y-auto">
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            Dashboard
          </a>
          <a className="sidebar-link active" href="#">
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
      <main className="ml-72 flex-grow overflow-y-auto min-h-screen flex flex-col bg-creme/30" dangerouslySetInnerHTML={{ __html: `
        <header class="sticky top-0 z-40 bg-creme/95 backdrop-blur-md border-b border-primary/5 px-10 py-6"><div class="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-black text-primary tracking-tighter uppercase">Hotel Aviro - Log de Reservas</h1>
            <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Gestión avanzada de transacciones y ocupación</p>
          </div>
          <div class="flex items-center gap-4">
            <button class="flex items-center gap-2 bg-white border border-primary/10 px-4 py-2.5 text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary/5 transition-all">
              <span class="material-symbols-outlined text-sm">download</span>
              Exportar CSV
            </button>
            <button class="bg-primary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all">
              Nueva Reserva
            </button>
          </div>
        </div></header>
        <div class="p-10 flex-grow max-w-[1440px] mx-auto w-full">
          <div class="bg-white border border-primary/5 p-6 mb-8 shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-[9px] font-black uppercase tracking-widest text-muted">Búsqueda Rápida</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-lg">search</span>
                  <input class="filter-input w-full pl-10" placeholder="ID, HUñ?SPED O EMAIL..." type="text"/>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-[9px] font-black uppercase tracking-widest text-muted">Rango de Fechas</label>
                <div class="flex gap-2">
                  <input class="filter-input w-1/2" type="date"/>
                  <input class="filter-input w-1/2" type="date"/>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-[9px] font-black uppercase tracking-widest text-muted">Estado del Pago</label>
                <select class="filter-input appearance-none">
                  <option>Todos los estados</option>
                  <option>Pagado</option>
                  <option>Pendiente</option>
                  <option>Reembolsado</option>
                  <option>Cancelado</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-[9px] font-black uppercase tracking-widest text-muted">Fuente de Origen</label>
                <select class="filter-input appearance-none">
                  <option>Todas las fuentes</option>
                  <option>Directa (Web)</option>
                  <option>Booking.com</option>
                  <option>Expedia</option>
                  <option>Airbnb</option>
                </select>
              </div>
              <div class="flex flex-col gap-2 lg:col-span-4 xl:col-span-1 justify-end">
                <button class="bg-secondary text-creme py-2 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Aplicar Filtros
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white border border-primary/5 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr>
                    <th class="table-header w-12 text-center">
                      <input class="rounded-sm border-primary/20 text-secondary focus:ring-secondary" type="checkbox"/>
                    </th>
                    <th class="table-header">
                      <div class="flex items-center gap-1 cursor-pointer hover:text-primary">
                        ID Reserva
                        <span class="material-symbols-outlined text-sm">unfold_more</span>
                      </div>
                    </th>
                    <th class="table-header">Huésped &amp; Contacto</th>
                    <th class="table-header">Habitación / Categoría</th>
                    <th class="table-header">
                      <div class="flex items-center gap-1 cursor-pointer hover:text-primary">
                        Check-In / Out
                        <span class="material-symbols-outlined text-sm">unfold_more</span>
                      </div>
                    </th>
                    <th class="table-header">Fuente</th>
                    <th class="table-header">Estado Pago</th>
                    <th class="table-header text-right">Monto Total</th>
                    <th class="table-header">Acciones</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-primary/5">
                  <tr class="hover:bg-creme/20 transition-colors">
                    <td class="table-cell text-center"><input class="rounded-sm border-primary/20 text-secondary focus:ring-secondary" type="checkbox"/></td>
                    <td class="table-cell font-black">#AV-8905</td>
                    <td class="table-cell">
                      <div class="font-black text-primary uppercase">Sofia Lorenza</div>
                      <div class="text-[9px] text-muted font-bold lowercase tracking-wider">sofia.l@email.com</div>
                    </td>
                    <td class="table-cell">
                      <div class="font-bold">204 - Deluxe King</div>
                      <div class="text-[9px] text-muted font-bold uppercase">2 Adultos</div>
                    </td>
                    <td class="table-cell">
                      <div class="flex flex-col">
                        <span class="font-bold">25 MAY 2024</span>
                        <span class="text-[9px] text-muted font-bold uppercase">A 28 MAY (3 Noches)</span>
                      </div>
                    </td>
                    <td class="table-cell">
                      <span class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-[2px] text-[9px] font-black uppercase tracking-tighter border border-blue-100">Booking.com</span>
                    </td>
                    <td class="table-cell">
                      <span class="flex items-center gap-1.5 text-green-700 font-black uppercase text-[9px]">
                        <span class="size-1.5 bg-green-600 rounded-full"></span>
                        Pagado
                      </span>
                    </td>
                    <td class="table-cell text-right font-black">$540.00</td>
                    <td class="table-cell">
                      <button class="p-1 hover:bg-primary/5 rounded transition-colors text-primary">
                        <span class="material-symbols-outlined text-lg leading-none">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-creme/20 transition-colors">
                    <td class="table-cell text-center"><input class="rounded-sm border-primary/20 text-secondary focus:ring-secondary" type="checkbox"/></td>
                    <td class="table-cell font-black">#AV-8904</td>
                    <td class="table-cell">
                      <div class="font-black text-primary uppercase">Carlos Mendez</div>
                      <div class="text-[9px] text-muted font-bold lowercase tracking-wider">c.mendez@empresa.es</div>
                    </td>
                    <td class="table-cell">
                      <div class="font-bold">102 - Suite Ejecutiva</div>
                      <div class="text-[9px] text-muted font-bold uppercase">1 Adulto</div>
                    </td>
                    <td class="table-cell">
                      <div class="flex flex-col">
                        <span class="font-bold">24 MAY 2024</span>
                        <span class="text-[9px] text-muted font-bold uppercase">A 26 MAY (2 Noches)</span>
                      </div>
                    </td>
                    <td class="table-cell">
                      <span class="bg-green-50 text-green-700 px-2 py-0.5 rounded-[2px] text-[9px] font-black uppercase tracking-tighter border border-green-100">Directo</span>
                    </td>
                    <td class="table-cell">
                      <span class="flex items-center gap-1.5 text-secondary font-black uppercase text-[9px]">
                        <span class="size-1.5 bg-secondary rounded-full animate-pulse"></span>
                        Pendiente
                      </span>
                    </td>
                    <td class="table-cell text-right font-black">$320.00</td>
                    <td class="table-cell">
                      <button class="p-1 hover:bg-primary/5 rounded transition-colors text-primary">
                        <span class="material-symbols-outlined text-lg leading-none">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-creme/20 transition-colors">
                    <td class="table-cell text-center"><input class="rounded-sm border-primary/20 text-secondary focus:ring-secondary" type="checkbox"/></td>
                    <td class="table-cell font-black">#AV-8903</td>
                    <td class="table-cell">
                      <div class="font-black text-primary uppercase">Marta Villegas</div>
                      <div class="text-[9px] text-muted font-bold lowercase tracking-wider">marta88@gmail.com</div>
                    </td>
                    <td class="table-cell">
                      <div class="font-bold">305 - Habitación Doble</div>
                      <div class="text-[9px] text-muted font-bold uppercase">2 Adultos, 1 Niño</div>
                    </td>
                    <td class="table-cell">
                      <div class="flex flex-col">
                        <span class="font-bold">22 MAY 2024</span>
                        <span class="text-[9px] text-muted font-bold uppercase">A 25 MAY (3 Noches)</span>
                      </div>
                    </td>
                    <td class="table-cell">
                      <span class="bg-red-50 text-red-700 px-2 py-0.5 rounded-[2px] text-[9px] font-black uppercase tracking-tighter border border-red-100">Expedia</span>
                    </td>
                    <td class="table-cell">
                      <span class="flex items-center gap-1.5 text-green-700 font-black uppercase text-[9px]">
                        <span class="size-1.5 bg-green-600 rounded-full"></span>
                        Pagado
                      </span>
                    </td>
                    <td class="table-cell text-right font-black">$415.00</td>
                    <td class="table-cell">
                      <button class="p-1 hover:bg-primary/5 rounded transition-colors text-primary">
                        <span class="material-symbols-outlined text-lg leading-none">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-creme/20 transition-colors">
                    <td class="table-cell text-center"><input class="rounded-sm border-primary/20 text-secondary focus:ring-secondary" type="checkbox"/></td>
                    <td class="table-cell font-black">#AV-8902</td>
                    <td class="table-cell">
                      <div class="font-black text-primary uppercase">Marcos Sullivan</div>
                      <div class="text-[9px] text-muted font-bold lowercase tracking-wider">m.sully@outlook.com</div>
                    </td>
                    <td class="table-cell">
                      <div class="font-bold">101 - Suite Ejecutiva</div>
                      <div class="text-[9px] text-muted font-bold uppercase">2 Adultos</div>
                    </td>
                    <td class="table-cell">
                      <div class="flex flex-col">
                        <span class="font-bold">20 MAY 2024</span>
                        <span class="text-[9px] text-muted font-bold uppercase">A 22 MAY (2 Noches)</span>
                      </div>
                    </td>
                    <td class="table-cell">
                      <span class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-[2px] text-[9px] font-black uppercase tracking-tighter border border-blue-100">Booking.com</span>
                    </td>
                    <td class="table-cell">
                      <span class="flex items-center gap-1.5 text-green-700 font-black uppercase text-[9px]">
                        <span class="size-1.5 bg-green-600 rounded-full"></span>
                        Pagado
                      </span>
                    </td>
                    <td class="table-cell text-right font-black">$450.00</td>
                    <td class="table-cell">
                      <button class="p-1 hover:bg-primary/5 rounded transition-colors text-primary">
                        <span class="material-symbols-outlined text-lg leading-none">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="px-10 py-6 border-t border-primary/5 flex items-center justify-between bg-primary/5">
              <p class="text-[10px] font-bold text-muted uppercase tracking-widest">Mostrando 1 a 10 de 1,248 reservas</p>
              <div class="flex items-center gap-1">
                <button class="size-8 flex items-center justify-center border border-primary/10 text-primary hover:bg-white transition-colors">
                  <span class="material-symbols-outlined text-base">chevron_left</span>
                </button>
                <button class="size-8 flex items-center justify-center border border-secondary bg-secondary text-creme font-black text-[10px]">1</button>
                <button class="size-8 flex items-center justify-center border border-primary/10 text-primary hover:bg-white font-black text-[10px] transition-colors">2</button>
                <button class="size-8 flex items-center justify-center border border-primary/10 text-primary hover:bg-white font-black text-[10px] transition-colors">3</button>
                <span class="px-2 text-muted">...</span>
                <button class="size-8 flex items-center justify-center border border-primary/10 text-primary hover:bg-white font-black text-[10px] transition-colors">125</button>
                <button class="size-8 flex items-center justify-center border border-primary/10 text-primary hover:bg-white transition-colors">
                  <span class="material-symbols-outlined text-base">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer class="px-10 py-6 border-t border-primary/5 flex justify-between items-center bg-white/30 max-w-[1440px] mx-auto w-full">
          <p class="text-[10px] font-bold text-muted uppercase tracking-widest">© 2024 Hotel Aviro Administrative System - Advanced Ops</p>
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






