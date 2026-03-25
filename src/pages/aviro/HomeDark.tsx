﻿
export default function HomeDark() {
  return (
    <div className="font-display bg-zinc-900 text-primary transition-colors duration-300">
      <div className="layout-container flex h-full grow flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Aviró Hotel Plaza</span>
            </div>
            <nav className="hidden xl:flex items-center gap-6 xl:ml-10">
              <a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Inicio</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Habitaciones</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Restaurante</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Life</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Corporativos</a></nav>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-zinc-400 hover:text-zinc-100">
                  <span className="material-symbols-outlined text-lg">language</span>
                </button>
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-zinc-400 hover:text-zinc-100">
                  <span className="material-symbols-outlined text-lg">payments</span>
                </button>
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-zinc-400 hover:text-zinc-100">
                  <span className="material-symbols-outlined text-lg">light_mode</span>
                </button>
              </div>
              <button className="hidden sm:flex items-center justify-center rounded px-5 h-9 bg-zinc-900 text-zinc-100 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Reservar ahora
              </button>
              <button className="flex items-center justify-center rounded h-9 px-5 border border-white/10 bg-transparent text-zinc-300 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Iniciar sesión
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-col" dangerouslySetInnerHTML={{ __html: `
          <section class="relative min-h-[calc(100vh-88px)] flex flex-row overflow-hidden border-b border-white/5">
            <aside class="hidden lg:flex flex-col w-[350px] bg-[#1a1a1a] border-r border-white/10 z-40 p-8 shrink-0 xl:w-[400px]">
              <div class="booking-sidebar w-full">
                <h3 class="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-8 border-l-2 border-secondary pl-4">Gestión de Reserva</h3>
                <div class="space-y-6">
                  <div class="flex flex-col gap-2">
                    <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Check-in</label>
                    <div class="relative group">
                      <input class="w-full bg-zinc-800/50 border border-white/5 rounded p-3 text-sm text-zinc-100 focus:border-secondary focus:ring-0 transition-all" type="date"/>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Check-out</label>
                    <div class="relative group">
                      <input class="w-full bg-zinc-800/50 border border-white/5 rounded p-3 text-sm text-zinc-100 focus:border-secondary focus:ring-0 transition-all" type="date"/>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Huéspedes</label>
                    <div class="relative">
                      <select class="w-full bg-zinc-800/50 border border-white/5 rounded p-3 text-sm text-zinc-100 focus:border-secondary focus:ring-0 appearance-none">
                        <option>1 Adulto</option>
                        <option selected="">2 Adultos</option>
                        <option>2 Adultos, 1 Niño</option>
                        <option>Grupo Corporativo</option>
                      </select>
                      <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-lg">expand_more</span>
                    </div>
                  </div>
                  <button class="w-full bg-secondary hover:bg-[#365d48] text-zinc-100 py-4 rounded text-xs font-black uppercase tracking-widest transition-all mt-8 flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg">search</span>
                    Consultar Disponibilidad
                  </button>
                  <div class="pt-8 border-t border-white/5">
                    <div class="flex items-center gap-3 text-zinc-500">
                      <span class="material-symbols-outlined text-sm">bolt</span>
                      <span class="text-[10px] font-bold uppercase tracking-tighter">Confirmación Inmediata</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div class="flex-grow relative flex flex-col justify-center px-8 lg:px-20">
              <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent z-10"></div>
                <img alt="Hotel Exterior" class="w-full h-full object-cover grayscale opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLQ3E9FjejTvUcewdnINn8UedkPichivCXHZk2HRxaZl4d186DdSXwalzGXwCXm9A95uFanmckXH_LnmNN38diQ4LtXVKgp4Mblp-skgy2c0MzkwhfIfZAj6jUh9AF3_t4Ala55N7Ra60AwIHKDmzQW8dNCr03Oqfr1_smuQ2Fhss6jS-djSU7uSVg0LC8ob3Cg6gEKYSSQJYIjWP_cvcdxzJ6b0eWk0UFHggPinTpVUIX9_Rx2UZpCIbVEfWPugjbNsdoWwYqptx"/>
              </div>
              <div class="relative z-20 max-w-3xl">
                <h1 class="text-zinc-100 text-4xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6">
                  Reserva tu estadía en minutos, sin intermediarios.
                </h1>
                <p class="text-zinc-400 text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-0">
                  Disponibilidad en tiempo real, confirmación inmediata y todos los servicios incluidos para una experiencia cómoda y sin complicaciones.
                </p>
              </div>
              <div class="lg:hidden mt-12 bg-zinc-900 border border-white/10 p-4 rounded grid grid-cols-1 gap-4 z-20">
                <button class="bg-secondary text-zinc-100 py-3 rounded text-xs font-bold uppercase tracking-widest">Reservar Ahora</button>
              </div>
            </div>
          </section>
          <section class="py-24 px-6 lg:px-20 bg-[#121212]">
            <div class="max-w-full mx-auto">
              <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                <div class="max-w-xl">
                  <h2 class="text-2xl md:text-4xl font-black text-zinc-100 mb-4 tracking-tighter">Comodidad total en un solo lugar.</h2>
                  <div class="h-1 w-20 bg-secondary"></div>
                </div>
                <p class="text-zinc-500 text-sm font-medium uppercase tracking-widest">Aviro Business Class</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border-t border-l border-white/5">
                <div class="bg-zinc-900/40 p-10 border-r border-b border-white/5 hover:bg-zinc-800/40 transition-all group">
                  <div class="text-secondary mb-8 transition-transform group-hover:scale-110">
                    <span class="material-symbols-outlined text-4xl">bed</span>
                  </div>
                  <h3 class="text-lg font-bold mb-4 text-zinc-100 tracking-tight">Habitaciones Premium</h3>
                  <p class="text-zinc-500 text-sm leading-relaxed">Descanso garantizado con sábanas de 400 hilos y limpieza profunda diaria.</p>
                </div>
                <div class="bg-zinc-900/40 p-10 border-r border-b border-white/5 hover:bg-zinc-800/40 transition-all group">
                  <div class="text-secondary mb-8 transition-transform group-hover:scale-110">
                    <span class="material-symbols-outlined text-4xl">restaurant</span>
                  </div>
                  <h3 class="text-lg font-bold mb-4 text-zinc-100 tracking-tight">Gastronomía</h3>
                  <p class="text-zinc-500 text-sm leading-relaxed">Restaurante de autor con platos locales e internacionales de alta cocina.</p>
                </div>
                <div class="bg-zinc-900/40 p-10 border-r border-b border-white/5 hover:bg-zinc-800/40 transition-all group">
                  <div class="text-secondary mb-8 transition-transform group-hover:scale-110">
                    <span class="material-symbols-outlined text-4xl">coffee</span>
                  </div>
                  <h3 class="text-lg font-bold mb-4 text-zinc-100 tracking-tight">Desayuno Buffet</h3>
                  <p class="text-zinc-500 text-sm leading-relaxed">Comienza tu día con la mejor selección de frutas, panes y café de especialidad.</p>
                </div>
                <div class="bg-zinc-900/40 p-10 border-r border-b border-white/5 hover:bg-zinc-800/40 transition-all group">
                  <div class="text-secondary mb-8 transition-transform group-hover:scale-110">
                    <span class="material-symbols-outlined text-4xl">local_parking</span>
                  </div>
                  <h3 class="text-lg font-bold mb-4 text-zinc-100 tracking-tight">Parking Gratis</h3>
                  <p class="text-zinc-500 text-sm leading-relaxed">Seguridad 24/7 para tu vehículo sin costos adicionales durante tu estadía.</p>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 bg-secondary text-zinc-100 relative overflow-hidden">
            <div class="absolute inset-0 bg-zinc-900/20 pointer-events-none"></div>
            <div class="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                  <h2 class="text-4xl font-black mb-12 tracking-tighter">Nuestra excelencia en números</h2>
                  <div class="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <div class="bg-secondary/40 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-zinc-100 mb-2">15k+</div>
                      <div class="text-zinc-300 text-xs font-bold uppercase tracking-widest">Clientes satisfechos</div>
                    </div>
                    <div class="bg-secondary/40 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-zinc-100 mb-2">120+</div>
                      <div class="text-zinc-300 text-xs font-bold uppercase tracking-widest">Empresas que confían</div>
                    </div>
                    <div class="bg-secondary/40 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-zinc-100 mb-2">25</div>
                      <div class="text-zinc-300 text-xs font-bold uppercase tracking-widest">Años de servicio</div>
                    </div>
                    <div class="bg-secondary/40 backdrop-blur-sm p-10">
                      <div class="text-5xl font-black text-zinc-100 mb-2">4.9</div>
                      <div class="text-zinc-300 text-xs font-bold uppercase tracking-widest">Calificación promedio</div>
                    </div>
                  </div>
                </div>
                <div class="bg-zinc-950 p-12 rounded-lg border border-white/10 shadow-2xl relative">
                  <span class="material-symbols-outlined text-secondary text-6xl opacity-20 absolute top-8 right-8">format_quote</span>
                  <p class="text-xl font-light italic leading-relaxed mb-10 text-zinc-300">
                    "La mejor experiencia corporativa que he tenido. El proceso de reserva es increíblemente fluido y la atención al detalle en las habitaciones es de primer nivel. Hotel Aviro es mi elección segura en cada viaje."
                  </p>
                  <div class="flex items-center gap-5">
                    <div class="size-14 rounded bg-secondary flex items-center justify-center text-zinc-100 font-black text-xl">JD</div>
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
              <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
                <div>
                  <span class="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block border-l-2 border-secondary pl-3">¿Por qué elegirnos?</span>
                  <h2 class="text-4xl font-black text-zinc-100 mb-10 tracking-tighter">Diseñado para el viajero moderno</h2>
                  <ul class="space-y-8">
                    <li class="flex gap-5">
                      <span class="material-symbols-outlined text-secondary shrink-0">verified_user</span>
                      <div>
                        <p class="font-bold text-lg text-zinc-100">Sin Cargos Ocultos</p>
                        <p class="text-zinc-500 text-sm leading-relaxed mt-1">El precio que ves es el que pagas, con todos los impuestos incluidos.</p>
                      </div>
                    </li>
                    <li class="flex gap-5">
                      <span class="material-symbols-outlined text-secondary shrink-0">router</span>
                      <div>
                        <p class="font-bold text-lg text-zinc-100">Wi-Fi de Alta Velocidad</p>
                        <p class="text-zinc-500 text-sm leading-relaxed mt-1">Conexión simétrica en todo el hotel, ideal para videoconferencias.</p>
                      </div>
                    </li>
                    <li class="flex gap-5">
                      <span class="material-symbols-outlined text-secondary shrink-0">headset_mic</span>
                      <div>
                        <p class="font-bold text-lg text-zinc-100">Soporte 24/7</p>
                        <p class="text-zinc-500 text-sm leading-relaxed mt-1">Atención personalizada en recepción y vía WhatsApp en cualquier momento.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <img alt="Habitación" class="rounded-lg h-96 w-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
                  <img alt="Restaurante" class="rounded-lg h-96 w-full object-cover grayscale mt-16" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBpyDuFxDJwRJOGm9ybLAC7nOl_h01YCjxq8pDUVwXeZiN6bGZQ5X6kxYbBWHq5SKWKm46T8voC5mgq09BFOMbdWFHnkaVDyAipH06PNVm7WQN1om6Pda9BrZ8lJqmNWDOvXcb6BhMuJRWZRAc8RHrJ7MycWil7XAWmbaK3OlPkPO6vpMEMuKKYq0jQeyXZtXQkG02-1ngNBc4p4CEG5cLoHVht0BSCP8p--PbX5CJHgWtSdk0kNyb4cpC_FP5fG4k84Sd_9cdVBS6"/>
                </div>
              </div>
              <div class="border-t border-white/5 pt-20">
                <h2 class="text-xs font-black text-zinc-500 uppercase tracking-[0.4em] mb-16 text-center">Proceso Simple</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                  <div class="bg-zinc-900 p-12 text-center group">
                    <div class="size-16 rounded border border-white/10 flex items-center justify-center text-zinc-400 text-xl font-black mb-8 mx-auto group-hover:bg-secondary group-hover:text-zinc-100 group-hover:border-secondary transition-all">01</div>
                    <h4 class="text-lg font-bold text-zinc-100 mb-4">Consulta</h4>
                    <p class="text-zinc-500 text-sm">Busca tus fechas y elige tu habitación ideal.</p>
                  </div>
                  <div class="bg-zinc-900 p-12 text-center group">
                    <div class="size-16 rounded border border-white/10 flex items-center justify-center text-zinc-400 text-xl font-black mb-8 mx-auto group-hover:bg-secondary group-hover:text-zinc-100 group-hover:border-secondary transition-all">02</div>
                    <h4 class="text-lg font-bold text-zinc-100 mb-4">Confirmación</h4>
                    <p class="text-zinc-500 text-sm">Recibe tu voucher digital al instante.</p>
                  </div>
                  <div class="bg-zinc-900 p-12 text-center group">
                    <div class="size-16 rounded border border-white/10 flex items-center justify-center text-zinc-400 text-xl font-black mb-8 mx-auto group-hover:bg-secondary group-hover:text-zinc-100 group-hover:border-secondary transition-all">03</div>
                    <h4 class="text-lg font-bold text-zinc-100 mb-4">Estadía</h4>
                    <p class="text-zinc-500 text-sm">Disfruta de la mejor experiencia en Aviro.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-16 px-6 lg:px-20 bg-zinc-900/30 border-y border-white/5">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
              <h3 class="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 border-l-2 border-zinc-700 pl-4">Métodos de Pago Seguros</h3>
              <div class="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">account_balance</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Transferencias</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">credit_card</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Tarjetas</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">business_center</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Pagos Corporativos</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl">receipt_long</span>
                  <span class="font-bold text-xs uppercase tracking-widest">Facturación Formal</span>
                </div>
              </div>
            </div>
          </section>
        `}} />

        <footer className="bg-zinc-950 text-zinc-100 pt-24 pb-12 px-6 lg:px-20 border-t border-white/5" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-7xl mx-auto max-w-screen-xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div>
                <img alt="Logo Aviró Hotel Plaza" class="h-24 mb-10 mx-auto block" src="/aviro-logo-plaza.png" />
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














