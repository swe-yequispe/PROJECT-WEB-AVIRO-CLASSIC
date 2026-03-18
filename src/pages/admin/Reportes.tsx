
export default function Reportes() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-auto w-72 bg-primary text-creme flex flex-col z-50 transform translate-x-[-1440px] xl:translate-x-0">
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
          <a className="sidebar-link active" href="#">
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
      <main className="ml-72 flex-grow flex flex-col min-h-screen overflow-hidden xl:ml-72" dangerouslySetInnerHTML={{ __html: `
        <header class="bg-creme/95 backdrop-blur-md border-b border-primary/5 px-6 lg:px-12 py-6 flex items-center justify-between sticky top-0 z-40">
          <div class="flex items-center gap-8">
            <div>
              <h1 class="text-2xl font-black text-primary tracking-tighter uppercase">Hotel Aviro - Reporte Ejecutivo (Análisis)</h1>
              <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Reportes de Rendimiento Hotelero • 2024</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <button class="bg-white border border-primary/10 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary/5 transition-all flex items-center gap-2 shadow-sm">
              <span class="material-symbols-outlined text-sm">download</span>
              Exportar PDF
            </button>
            <button class="bg-secondary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-sm">
              <span class="material-symbols-outlined text-sm">refresh</span>
              Actualizar
            </button>
          </div>
        </header>
        <div class="flex flex-grow overflow-hidden">
          <div class="w-64 border-r border-primary/5 p-6 space-y-8 bg-white/50 overflow-y-auto">
            <div>
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Periodo de Reporte</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-3 group cursor-pointer p-2 hover:bg-primary/5 rounded">
                  <input checked="" class="form-radio text-secondary border-primary/20 size-4" name="period" type="radio"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Últimos 30 días</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer p-2 hover:bg-primary/5 rounded">
                  <input class="form-radio text-secondary border-primary/20 size-4" name="period" type="radio"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Trimestral</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer p-2 hover:bg-primary/5 rounded">
                  <input class="form-radio text-secondary border-primary/20 size-4" name="period" type="radio"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Año en curso</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer p-2 hover:bg-primary/5 rounded">
                  <input class="form-radio text-secondary border-primary/20 size-4" name="period" type="radio"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Personalizado</span>
                </label>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Segmentación</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Canales Directos</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">OTAs / Terceros</span>
                </label>
                <label class="flex items-center gap-3 group cursor-pointer">
                  <input checked="" class="form-checkbox text-primary border-primary/20 rounded-sm size-4" type="checkbox"/>
                  <span class="text-[10px] font-bold uppercase tracking-widest">Corporativo</span>
                </label>
              </div>
            </div>
            <div class="pt-8 border-t border-primary/10">
              <div class="bg-primary/5 p-4 border border-primary/10">
                <p class="text-[9px] font-black uppercase text-primary mb-1">Target de Ingresos</p>
                <div class="flex items-end justify-between">
                  <span class="text-2xl font-black text-primary">82%</span>
                  <span class="text-[10px] font-bold text-muted mb-1">Q2 Logrado</span>
                </div>
                <div class="mt-2 h-1 bg-primary/10 w-full overflow-hidden">
                  <div class="h-full bg-primary w-[82%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow overflow-y-auto p-10 space-y-8 bg-white/30">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="kpi-card min-h-[160px] justify-center">
                <span class="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Total Reservas</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-black text-primary tracking-tighter">1,284</span>
                  <span class="text-[10px] font-bold text-green-600 flex items-center">
                    <span class="material-symbols-outlined text-xs">trending_up</span> +12%
                  </span>
                </div>
                <div class="mt-4 pt-4 border-t border-primary/5 flex justify-between text-[10px] font-bold uppercase text-muted">
                  <span>vs. Mes Anterior</span>
                  <span class="text-primary">1,146</span>
                </div>
              </div>
              <div class="kpi-card min-h-[160px] justify-center">
                <span class="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Ingresos Totales</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-black text-primary tracking-tighter">$245,800</span>
                  <span class="text-[10px] font-bold text-green-600 flex items-center">
                    <span class="material-symbols-outlined text-xs">trending_up</span> +8.4%
                  </span>
                </div>
                <div class="mt-4 pt-4 border-t border-primary/5 flex justify-between text-[10px] font-bold uppercase text-muted">
                  <span>vs. Mes Anterior</span>
                  <span class="text-primary">$226,750</span>
                </div>
              </div>
              <div class="kpi-card border-b-4 border-b-secondary min-h-[160px] justify-center">
                <span class="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">ADR (Average Daily Rate)</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-black text-secondary tracking-tighter">$191.40</span>
                  <span class="text-[10px] font-bold text-red-600 flex items-center">
                    <span class="material-symbols-outlined text-xs">trending_down</span> -2.1%
                  </span>
                </div>
                <div class="mt-4 pt-4 border-t border-primary/5 flex justify-between text-[10px] font-bold uppercase text-muted">
                  <span>vs. Mes Anterior</span>
                  <span class="text-primary">$195.50</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div class="chart-container p-8">
                <div class="flex justify-between items-center mb-10">
                  <div>
                    <h3 class="text-sm font-black uppercase tracking-widest text-primary">Tendencia de Ocupación</h3>
                    <p class="text-[10px] font-bold text-muted uppercase tracking-wider">Promedio Mensual %</p>
                  </div>
                  <span class="text-[10px] font-black text-secondary bg-secondary/5 px-2 py-1">META: 85%</span>
                </div>
                <div class="h-64 flex items-end justify-between gap-4 px-2">
                  <div class="flex flex-col items-center gap-2 w-full group">
                    <div class="w-full bg-primary/10 h-[65%] bar-segment relative">
                      <div class="absolute bottom-0 w-full bg-primary h-[90%] opacity-80 group-hover:opacity-100"></div>
                    </div>
                    <span class="text-[9px] font-bold text-muted uppercase">Ene</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 w-full group">
                    <div class="w-full bg-primary/10 h-[65%] bar-segment relative">
                      <div class="absolute bottom-0 w-full bg-primary h-[85%] opacity-80 group-hover:opacity-100"></div>
                    </div>
                    <span class="text-[9px] font-bold text-muted uppercase">Feb</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 w-full group">
                    <div class="w-full bg-primary/10 h-[65%] bar-segment relative">
                      <div class="absolute bottom-0 w-full bg-primary h-[95%] opacity-80 group-hover:opacity-100"></div>
                    </div>
                    <span class="text-[9px] font-bold text-muted uppercase">Mar</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 w-full group">
                    <div class="w-full bg-primary/10 h-[65%] bar-segment relative">
                      <div class="absolute bottom-0 w-full bg-secondary h-[100%]"></div>
                    </div>
                    <span class="text-[9px] font-black text-secondary uppercase">Abr</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 w-full group">
                    <div class="w-full bg-primary/10 h-[65%] bar-segment relative">
                      <div class="absolute bottom-0 w-full bg-primary h-[70%] opacity-80 group-hover:opacity-100"></div>
                    </div>
                    <span class="text-[9px] font-bold text-muted uppercase">May</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 w-full group">
                    <div class="w-full bg-primary/10 h-[65%] bar-segment relative">
                      <div class="absolute bottom-0 w-full bg-primary h-[60%] opacity-80 group-hover:opacity-100"></div>
                    </div>
                    <span class="text-[9px] font-bold text-muted uppercase">Jun</span>
                  </div>
                </div>
              </div>
              <div class="chart-container p-8">
                <div class="flex justify-between items-center mb-10">
                  <div>
                    <h3 class="text-sm font-black uppercase tracking-widest text-primary">Crecimiento de Ingresos</h3>
                    <p class="text-[10px] font-bold text-muted uppercase tracking-wider">Acumulado vs Año Anterior</p>
                  </div>
                  <div class="flex gap-4">
                    <div class="flex items-center gap-2">
                      <div class="size-2 bg-primary"></div>
                      <span class="text-[9px] font-bold uppercase text-muted">2024</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="size-2 bg-primary/20"></div>
                      <span class="text-[9px] font-bold uppercase text-muted">2023</span>
                    </div>
                  </div>
                </div>
                <div class="h-64 flex items-end gap-1">
                  <div class="relative w-full h-full border-b border-l border-primary/10">
                    <svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 400 200">
                      <path d="M0 160 L80 140 L160 150 L240 120 L320 130 L400 100" fill="none" stroke="rgba(0,95,47,0.2)" stroke-width="2"></path>
                      <path d="M0 140 L80 110 L160 90 L240 70 L320 50 L400 30" fill="none" stroke="#D85D31" stroke-width="3"></path>
                      <circle cx="80" cy="110" fill="#D85D31" r="4"></circle>
                      <circle cx="160" cy="90" fill="#D85D31" r="4"></circle>
                      <circle cx="240" cy="70" fill="#D85D31" r="4"></circle>
                      <circle cx="320" cy="50" fill="#D85D31" r="4"></circle>
                    </svg>
                    <div class="absolute bottom-[-24px] w-full flex justify-between text-[9px] font-bold text-muted px-2">
                      <span>ENE</span><span>FEB</span><span>MAR</span><span>ABR</span><span>MAY</span><span>JUN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white border border-primary/5 shadow-sm overflow-hidden">
              <div class="px-6 py-4 border-b border-primary/5 flex justify-between items-center">
                <h3 class="text-xs font-black uppercase tracking-widest text-primary">Rendimiento por Categoría</h3>
                <span class="text-[10px] font-bold text-muted uppercase">Últimos 30 días</span>
              </div>
              <table class="w-full text-left min-w-full">
                <thead class="bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary">
                  <tr>
                    <th class="px-6 py-3 lg:px-8">Tipo de Habitación</th>
                    <th class="px-6 py-3 lg:px-8">Ocupación</th>
                    <th class="px-6 py-3 text-right lg:px-8">RevPAR</th>
                    <th class="px-6 py-3 text-right lg:px-8">Variación %</th>
                  </tr>
                </thead>
                <tbody class="text-[11px] font-medium text-primary divide-y divide-primary/5">
                  <tr class="hover:bg-primary/[0.02] transition-colors">
                    <td class="px-6 py-4 font-bold uppercase lg:px-8">Suite Ejecutiva</td>
                    <td class="px-6 py-4 lg:px-8">
                      <div class="flex items-center gap-2">
                        <div class="w-24 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                          <div class="h-full bg-primary w-[92%]"></div>
                        </div>
                        <span>92%</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right font-bold lg:px-8">$245.00</td>
                    <td class="px-6 py-4 text-right text-green-600 font-bold lg:px-8">+15.2%</td>
                  </tr>
                  <tr class="hover:bg-primary/[0.02] transition-colors">
                    <td class="px-6 py-4 font-bold uppercase lg:px-8">Deluxe King</td>
                    <td class="px-6 py-4 lg:px-8">
                      <div class="flex items-center gap-2">
                        <div class="w-24 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                          <div class="h-full bg-primary w-[78%]"></div>
                        </div>
                        <span>78%</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right font-bold lg:px-8">$168.00</td>
                    <td class="px-6 py-4 text-right text-green-600 font-bold lg:px-8">+4.1%</td>
                  </tr>
                  <tr class="hover:bg-primary/[0.02] transition-colors">
                    <td class="px-6 py-4 font-bold uppercase lg:px-8">Standard Twin</td>
                    <td class="px-6 py-4 lg:px-8">
                      <div class="flex items-center gap-2">
                        <div class="w-24 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                          <div class="h-full bg-primary w-[64%]"></div>
                        </div>
                        <span>64%</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right font-bold lg:px-8">$112.50</td>
                    <td class="px-6 py-4 text-right text-red-600 font-bold lg:px-8">-2.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer class="px-6 lg:px-12 py-8 border-t border-primary/5 flex justify-between items-center bg-white">
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

