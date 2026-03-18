
export default function CorporativoDark() {
  return (
    <div className="font-display bg-zinc-900 text-primary">
      <div className="layout-container flex h-full grow flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <img alt="Logo Hotel Aviro" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXq8rjVakM9drIaR9kjCOCFywTjZX0aASwpKIwlxZj0sja7toViuQLP-uP_x2rdaieOgTA9pZ4A10-pMV-YgeOgcv5D3_rJ74TlmBNb5JoN4-p-ooeSOO6MP2nhXYme2yjwfQ6PvzxVtrAZNrpaCY6X_YJlT7mAZz34YUdwMUZkQ24M-V9z19G7F0mr5c28L4_5Cdi11uFJnl9ODVace9Je2C1G7e7L0gHn6j0e_CNS6_7tCTl5Yd9zegQAyc-IujyOqkuXjIwams"/>
            </div>
            <nav className="hidden xl:flex items-center gap-6">
              <a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Inicio</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Habitaciones</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Restaurante Darkness</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Life Darkness</a><a className="text-zinc-100 font-bold text-xs uppercase tracking-widest border-b-2 border-secondary pb-1" href="#">Corporativos Darkness</a></nav>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 mr-4 border-r border-white/5 pr-4">
                <button className="p-1.5 hover:bg-white/5 rounded transition-colors text-zinc-400 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">language</span>
                </button>
                <button className="p-1.5 hover:bg-white/5 rounded transition-colors text-zinc-400 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">payments</span>
                </button>
                <button className="p-1.5 hover:bg-white/5 rounded transition-colors text-zinc-400 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">light_mode</span>
                </button>
              </div>
              <button className="hidden sm:flex items-center justify-center rounded px-5 h-9 bg-zinc-900 text-zinc-100 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-sm">
                Reservar ahora
              </button>
              <button className="flex items-center justify-center rounded h-9 px-5 border border-white/10 bg-transparent text-zinc-100 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Iniciar sesión
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-col" dangerouslySetInnerHTML={{ __html: `
          <section class="relative min-h-[calc(100vh-88px)] flex flex-row overflow-hidden border-b border-white/5 bg-zinc-900"><aside class="hidden lg:flex flex-col w-[400px] bg-zinc-900 border-r border-white/5 z-40 p-12 shrink-0">
            <div class="booking-sidebar w-full">
              <div class="mb-10">
                <span class="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-sm mb-4">Portal Corporativo</span>
                <h3 class="text-3xl font-black text-zinc-100 leading-tight tracking-tighter">Reserva con tu Tarifa Preferencial</h3>
              </div>
              <div class="space-y-6">
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Código de Empresa</label>
                  <input class="w-full bg-white/10 border border-white/20 rounded p-4 text-sm text-zinc-100 placeholder:text-creme/30 focus:border-secondary focus:ring-0 transition-all uppercase" placeholder="Ej: CORP-2024" type="text"/>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex flex-col gap-2">
                    <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Llegada</label>
                    <input class="w-full bg-white/10 border border-white/20 rounded p-4 text-sm text-zinc-100 focus:border-secondary focus:ring-0 transition-all" type="date"/>
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Salida</label>
                    <input class="w-full bg-white/10 border border-white/20 rounded p-4 text-sm text-zinc-100 focus:border-secondary focus:ring-0 transition-all" type="date"/>
                  </div>
                </div>
                <button class="w-full bg-secondary hover:scale-[1.02] text-white py-5 rounded text-xs font-black uppercase tracking-widest transition-all mt-6 flex items-center justify-center gap-2 shadow-lg">
                  <span class="material-symbols-outlined text-lg">calendar_month</span>
                  Ver Disponibilidad Corp
                </button>
              </div>
              <div class="mt-16 pt-8 border-t border-white/10 space-y-5">
                <div class="flex items-center gap-3 text-zinc-400">
                  <span class="material-symbols-outlined text-secondary">update</span>
                  <span class="text-[11px] font-bold uppercase tracking-wider">Check-in Anticipado Prioritario</span>
                </div>
                <div class="flex items-center gap-3 text-zinc-400">
                  <span class="material-symbols-outlined text-secondary">percent</span>
                  <span class="text-[11px] font-bold uppercase tracking-wider">Hasta 20% de ahorro corporativo</span>
                </div>
              </div>
            </div>
            </aside>
            <div class="flex-grow relative flex flex-col justify-center px-12 lg:px-24 py-24">
              <div class="absolute inset-0 z-0 bg-pattern"></div>
              <div class="absolute right-0 top-0 bottom-0 w-3/5 z-0 opacity-20 lg:opacity-100">
                <img alt="Lobby corporativo moderno" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLQ3E9FjejTvUcewdnINn8UedkPichivCXHZk2HRxaZl4d186DdSXwalzGXwCXm9A95uFanmckXH_LnmNN38diQ4LtXVKgp4Mblp-skgy2c0MzkwhfIfZAj6jUh9AF3_t4Ala55N7Ra60AwIHKDmzQW8dNCr03Oqfr1_smuQ2Fhss6jS-djSU7uSVg0LC8ob3Cg6gEKYSSQJYIjWP_cvcdxzJ6b0eWk0UFHggPinTpVUIX9_Rx2UZpCIbVEfWPugjbNsdoWwYqptx"/>
                <div class="absolute inset-0 bg-gradient-to-r from-creme via-creme/60 to-transparent"></div>
              </div>
              <div class="relative z-20 max-w-3xl">
                <h1 class="text-zinc-100 text-5xl lg:text-8xl font-black leading-[1] tracking-tighter mb-10">
                  Tu oficina lejos de casa, con <span class="text-secondary italic">beneficios exclusivos.</span>
                </h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div class="bg-zinc-900 text-zinc-100 p-6 rounded-lg flex items-center gap-5 shadow-xl">
                    <span class="material-symbols-outlined text-secondary text-4xl">speed</span>
                    <div>
                      <p class="text-xs font-black uppercase tracking-tighter opacity-70">Check-in</p>
                      <p class="text-lg font-bold">Desde las 10:00 AM</p>
                    </div>
                  </div>
                  <div class="bg-zinc-900 text-zinc-100 p-6 rounded-lg flex items-center gap-5 shadow-xl">
                    <span class="material-symbols-outlined text-secondary text-4xl">restaurant</span>
                    <div>
                      <p class="text-xs font-black uppercase tracking-tighter opacity-70">Gastronomía</p>
                      <p class="text-lg font-bold">15% Dcto. Restaurante</p>
                    </div>
                  </div>
                </div>
                <p class="text-primary/90 text-xl font-medium leading-relaxed max-w-2xl">
                  Diseñado para profesionales que buscan eficiencia. Disfruta de beneficios integrados por tu vínculo empresarial con Hotel Aviro.
                </p>
              </div>
            </div>
          </section>
          <section class="py-24 px-6 lg:px-20 bg-zinc-900 relative">
            <div class="max-w-7xl mx-auto">
              <div class="text-center mb-20">
                <span class="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Propuesta de Valor</span>
                <h2 class="text-3xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tighter">Membresía vs. Cliente Corporativo</h2>
                <div class="h-1.5 w-24 bg-secondary mx-auto"></div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="bg-white/50 border border-white/5 p-10 rounded-xl">
                  <h4 class="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-8">Viajero Estándar</h4>
                  <ul class="space-y-6">
                    <li class="flex items-center gap-3 text-zinc-500">
                      <span class="material-symbols-outlined text-primary/30">close</span>
                      <span class="text-sm font-medium">Tarifas según demanda</span>
                    </li>
                    <li class="flex items-center gap-3 text-zinc-500">
                      <span class="material-symbols-outlined text-primary/30">close</span>
                      <span class="text-sm font-medium">Check-in 15:00 PM</span>
                    </li>
                    <li class="flex items-center gap-3 text-zinc-500">
                      <span class="material-symbols-outlined text-primary/30">close</span>
                      <span class="text-sm font-medium">Precio regular restaurante</span>
                    </li>
                    <li class="flex items-center gap-3 text-zinc-500">
                      <span class="material-symbols-outlined text-primary/30">close</span>
                      <span class="text-sm font-medium">Cancelación restringida</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-zinc-900 text-zinc-100 p-10 rounded-xl shadow-2xl lg:-mt-8 lg:mb-8 border-t-4 border-secondary relative overflow-hidden">
                  <div class="absolute top-4 right-4 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Recomendado</div>
                  <h4 class="text-zinc-100 font-bold uppercase tracking-widest text-xs mb-8">Beneficios Corporativos</h4>
                  <ul class="space-y-6">
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-secondary">check_circle</span>
                      <span class="text-sm font-bold">Tarifas fijas preferenciales</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-secondary">check_circle</span>
                      <span class="text-sm font-bold">Check-in anticipado (10 AM)</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-secondary">check_circle</span>
                      <span class="text-sm font-bold">15% Dcto. Alimentos y Bebidas</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-secondary">check_circle</span>
                      <span class="text-sm font-bold">Cancelación sin penalidad</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-secondary">check_circle</span>
                      <span class="text-sm font-bold">Wi-Fi Premium Simétrico</span>
                    </li>
                  </ul>
                  <button class="w-full mt-10 bg-secondary py-4 font-black uppercase text-xs tracking-widest rounded-lg hover:bg-black hover:text-zinc-100 transition-all">Solicitar Convenio</button>
                </div>
                <div class="bg-white/50 border border-white/5 p-10 rounded-xl">
                  <h4 class="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-8">Servicios Complementarios</h4>
                  <ul class="space-y-6">
                    <li class="flex items-center gap-3 text-primary/80">
                      <span class="material-symbols-outlined text-primary">work</span>
                      <span class="text-sm font-medium">Salas de reunión (2h gratis)</span>
                    </li>
                    <li class="flex items-center gap-3 text-primary/80">
                      <span class="material-symbols-outlined text-primary">local_laundry_service</span>
                      <span class="text-sm font-medium">Lavandería express priority</span>
                    </li>
                    <li class="flex items-center gap-3 text-primary/80">
                      <span class="material-symbols-outlined text-primary">directions_car</span>
                      <span class="text-sm font-medium">Transfer privado aeródromo</span>
                    </li>
                    <li class="flex items-center gap-3 text-primary/80">
                      <span class="material-symbols-outlined text-primary">fitness_center</span>
                      <span class="text-sm font-medium">Gimnasio 24/7 acceso libre</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 bg-white/5 border-y border-white/5">
            <div class="max-w-7xl mx-auto px-6 lg:px-20">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 class="text-4xl font-black text-zinc-100 mb-6 tracking-tighter leading-tight">Calcula el Ahorro de tu Empresa</h2>
                  <p class="text-zinc-500 text-lg mb-10 leading-relaxed">Nuestros convenios están diseñados para optimizar el presupuesto de viajes corporativos. Más que una estadía, somos tu aliado estratégico.</p>
                  <div class="space-y-8">
                    <div class="flex items-start gap-5">
                      <div class="bg-white/10 p-3 rounded-lg text-primary">
                        <span class="material-symbols-outlined">receipt_long</span>
                      </div>
                      <div>
                        <h4 class="font-bold text-primary">Facturación Consolidada</h4>
                        <p class="text-sm text-zinc-500">Gestión simplificada de gastos con facturación electrónica inmediata a nombre de tu empresa.</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-5">
                      <div class="bg-white/10 p-3 rounded-lg text-primary">
                        <span class="material-symbols-outlined">event_available</span>
                      </div>
                      <div>
                        <h4 class="font-bold text-primary">Disponibilidad Garantizada</h4>
                        <p class="text-sm text-zinc-500">Bloqueos de habitaciones para periodos de alta demanda según contrato.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-black p-12 rounded-2xl shadow-xl border border-white/5">
                  <div class="mb-10 text-center">
                    <p class="text-primary/40 font-black uppercase tracking-[0.2em] text-[10px] mb-2">Simulador de Ahorro</p>
                    <h3 class="text-2xl font-black text-primary">Ahorro Estimado Anual</h3>
                  </div>
                  <div class="space-y-8 mb-12">
                    <div>
                      <div class="flex justify-between text-xs font-bold uppercase text-zinc-100 mb-3">
                        <span>Noches por Mes</span>
                        <span>15 Noches</span>
                      </div>
                      <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div class="h-full bg-secondary w-2/3"></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between text-xs font-bold uppercase text-zinc-100 mb-3">
                        <span>Número de Viajeros</span>
                        <span>5 Personas</span>
                      </div>
                      <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div class="h-full bg-zinc-900 w-1/3"></div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-zinc-900 p-8 rounded-xl text-center">
                    <p class="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Ahorro directo proyectado</p>
                    <p class="text-zinc-100 text-5xl font-black tracking-tighter mb-4">$4,850 <span class="text-sm font-normal text-zinc-500 uppercase tracking-tighter">USD / Año</span></p>
                    <div class="h-px bg-white/10 my-4"></div>
                    <p class="text-secondary text-xs font-bold italic uppercase tracking-wider">+ Check-in Anticipado & Upgrades Incluidos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 bg-zinc-900 text-zinc-100 relative overflow-hidden">
            <div class="absolute inset-0 bg-white/5 pointer-events-none"></div>
            <div class="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                  <h2 class="text-4xl font-black mb-12 tracking-tighter">Alianzas que trascienden</h2>
                  <div class="grid grid-cols-2 gap-px bg-zinc-900/10 border border-creme/10">
                    <div class="bg-zinc-900/5 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-secondary mb-2">120+</div>
                      <div class="text-zinc-500 text-xs font-bold uppercase tracking-widest">Empresas Aliadas</div>
                    </div>
                    <div class="bg-zinc-900/5 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-zinc-100 mb-2">24h</div>
                      <div class="text-zinc-500 text-xs font-bold uppercase tracking-widest">Soporte Corp</div>
                    </div>
                    <div class="bg-zinc-900/5 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-zinc-100 mb-2">98%</div>
                      <div class="text-zinc-500 text-xs font-bold uppercase tracking-widest">Tasa de Retención</div>
                    </div>
                    <div class="bg-zinc-900/5 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-zinc-100 mb-2">15m</div>
                      <div class="text-zinc-500 text-xs font-bold uppercase tracking-widest">Cercanía Financiera</div>
                    </div>
                  </div>
                </div>
                <div class="bg-zinc-900 p-12 rounded-lg border border-white/5 shadow-2xl relative">
                  <span class="material-symbols-outlined text-secondary text-6xl opacity-20 absolute top-8 right-8">format_quote</span>
                  <p class="text-xl font-light italic leading-relaxed mb-10 text-primary/80">
                    "Para nuestra firma, Hotel Aviro no es solo un alojamiento, es parte de nuestro ecosistema productivo. El check-in a las 10 AM nos permite llegar directamente del aeropuerto a trabajar, ahorrando horas valiosas."
                  </p>
                  <div class="flex items-center gap-5">
                    <div class="size-14 rounded bg-secondary flex items-center justify-center text-white font-black text-xl">JD</div>
                    <div>
                      <p class="font-black text-zinc-100 uppercase tracking-wider">Julian Delgado</p>
                      <p class="text-xs text-zinc-500 font-bold uppercase tracking-widest">Director Ejecutivo, TechCorp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 px-6 lg:px-20 bg-zinc-900">
            <div class="max-w-7xl mx-auto">
              <div class="text-center mb-16">
                <h2 class="text-xs font-black text-zinc-500 uppercase tracking-[0.4em] mb-4">Proceso para Empresas</h2>
                <p class="text-3xl font-black text-zinc-100 tracking-tighter">Integración inmediata sin burocracia</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/5">
                <div class="bg-zinc-900 p-12 text-center group transition-all">
                  <div class="size-16 rounded border border-white/5 flex items-center justify-center text-primary/40 text-xl font-black mb-8 mx-auto group-hover:bg-zinc-900 group-hover:text-zinc-100 transition-all">01</div>
                  <h4 class="text-lg font-bold text-zinc-100 mb-4">Registro Corp</h4>
                  <p class="text-zinc-500 text-sm">Tu empresa solicita el convenio digital en menos de 5 minutos.</p>
                </div>
                <div class="bg-zinc-900 p-12 text-center group transition-all">
                  <div class="size-16 rounded border border-white/5 flex items-center justify-center text-primary/40 text-xl font-black mb-8 mx-auto group-hover:bg-zinc-900 group-hover:text-zinc-100 transition-all">02</div>
                  <h4 class="text-lg font-bold text-zinc-100 mb-4">Código Único</h4>
                  <p class="text-zinc-500 text-sm">Recibe un código exclusivo para que tus colaboradores reserven directamente.</p>
                </div>
                <div class="bg-zinc-900 p-12 text-center group transition-all">
                  <div class="size-16 rounded border border-white/5 flex items-center justify-center text-primary/40 text-xl font-black mb-8 mx-auto group-hover:bg-zinc-900 group-hover:text-zinc-100 transition-all">03</div>
                  <h4 class="text-lg font-bold text-zinc-100 mb-4">Control Total</h4>
                  <p class="text-zinc-500 text-sm">Accede al portal administrativo para gestionar facturas y consumos.</p>
                </div>
              </div>
            </div>
          </section>
          <section class="py-16 px-6 lg:px-20 bg-white/5 border-y border-white/5">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
              <h3 class="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 border-l-2 border-white/10 pl-4">Canales de Pago Corporativos</h3>
              <div class="flex flex-wrap justify-center gap-12 text-zinc-100 opacity-60">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">account_balance</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Transferencias</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">credit_card</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Tarjetas Corp</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">business_center</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Crédito a 30 días</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">receipt_long</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Facturación Formal</span>
                </div>
              </div>
            </div>
          </section>
        `}} />

        <footer className="bg-zinc-900 text-zinc-100 pt-24 pb-12 px-6 lg:px-20 border-t border-white/5" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-7xl mx-auto max-w-[1440px]">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div>
                <img alt="Logo Aviro Light" class="h-8 mb-10 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNUt7wKt_B06xjYbaqm6cdoDpJDGsjXVaoglnrtbalW_k1DPSRu9Yzr1rzoVx-nG5KIYJj5IEhbmwCwZfqxOjZlRPzPow7zokCgmYScctR0RvjlymrJBb1q5a7z0E-4BUXYEL86SymghoWyLZftMAMiY1kbFx_69VbSW8MEkw42nOYgPNRrQ5c3p0Q01dRm7KAsxD4sBQO8ch8jVQ55YXMJ9EgFnwgiqTS_1GPs5zRnK5c6k4nF8uItYrvoRkl2Op1kqpqHlOD1RS"/>
                <p class="text-zinc-500 text-sm leading-relaxed mb-10">Elevando el estándar de hospitalidad en la ciudad para viajeros de negocios y placer.</p>
                <div class="flex gap-3">
                  <a class="size-9 bg-white/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span class="material-symbols-outlined text-lg">social_leaderboard</span>
                  </a>
                  <a class="size-9 bg-white/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span class="material-symbols-outlined text-lg">photo_camera</span>
                  </a>
                  <a class="size-9 bg-white/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span class="material-symbols-outlined text-lg">alternate_email</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Enlaces Rápidos</h4>
                <ul class="space-y-4 text-zinc-500 text-sm">
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Inicio</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Nuestros Servicios</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Habitaciones</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Preguntas Frecuentes</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Libro de Reclamaciones</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Servicios</h4>
                <ul class="space-y-4 text-zinc-500 text-sm">
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Lavandería Express</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Room Service 24h</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Pet Friendly</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Salas de Reunión</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Gimnasio</li>
                </ul>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Contacto</h4>
                <ul class="space-y-5 text-zinc-500 text-sm">
                  <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-secondary text-xl">location_on</span>
                    <span>Av. Empresarial 450, Centro Financiero</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-secondary text-xl">call</span>
                    <span>+51 987 654 321</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-secondary text-xl">mail</span>
                    <span>reservas@hotelaviro.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              <p>© 2024 Hotel Aviro. Todos los derechos reservados.</p>
              <div class="flex gap-10">
                <a class="hover:text-zinc-100 transition-colors" href="#">Términos y Condiciones</a>
                <a class="hover:text-zinc-100 transition-colors" href="#">Política de Privacidad</a>
              </div>
            </div>
          </div>
        `}} />
      </div>
    </div>
  );
}

