
export default function RestauranteDark() {
  return (
    <div className="font-display bg-zinc-900 text-primary">
      <div className="layout-container flex h-full grow flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <img alt="Logo Hotel Aviro" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXq8rjVakM9drIaR9kjCOCFywTjZX0aASwpKIwlxZj0sja7toViuQLP-uP_x2rdaieOgTA9pZ4A10-pMV-YgeOgcv5D3_rJ74TlmBNb5JoN4-p-ooeSOO6MP2nhXYme2yjwfQ6PvzxVtrAZNrpaCY6X_YJlT7mAZz34YUdwMUZkQ24M-V9z19G7F0mr5c28L4_5Cdi11uFJnl9ODVace9Je2C1G7e7L0gHn6j0e_CNS6_7tCTl5Yd9zegQAyc-IujyOqkuXjIwams"/>
            </div>
            <nav className="hidden xl:flex items-center gap-6">
              <a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Inicio</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Habitaciones</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Restaurante Darkness</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Life Darkness</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Corporativos Darkness</a></nav>
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
              <button className="hidden sm:flex items-center justify-center rounded px-5 h-9 bg-zinc-900 text-zinc-100 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Reservar ahora
              </button>
              <button className="flex items-center justify-center rounded h-9 px-5 border border-white/10 bg-transparent text-zinc-100 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Iniciar sesion
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-col" dangerouslySetInnerHTML={{ __html: `
          <section class="relative min-h-[calc(100vh-88px)] flex flex-row overflow-hidden border-b border-white/5">
            <aside class="hidden lg:flex flex-col w-[400px] bg-zinc-900 border-r border-white/5 z-40 p-10 shrink-0 overflow-y-auto">
              <div class="event-sidebar w-full">
                <h3 class="text-xs font-black text-zinc-100 uppercase tracking-[0.2em] mb-8 border-l-2 border-secondary pl-4">Próximos Eventos</h3>
                <div class="space-y-6">
                  <div class="bg-white/5 border border-white/10 rounded p-5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-secondary text-[10px] font-black uppercase tracking-widest">15 Nov</span>
                      <span class="text-zinc-600 text-[10px] uppercase">19:30 PM</span>
                    </div>
                    <h4 class="text-zinc-100 font-bold text-sm mb-2 group-hover:text-secondary transition-colors">Cata de Vinos del Valle</h4>
                    <p class="text-zinc-500 text-xs leading-relaxed">Una selección exclusiva de tintos locales maridados con quesos artesanales.</p>
                  </div>
                  <div class="bg-white/5 border border-white/10 rounded p-5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-secondary text-[10px] font-black uppercase tracking-widest">22 Nov</span>
                      <span class="text-zinc-600 text-[10px] uppercase">20:00 PM</span>
                    </div>
                    <h4 class="text-zinc-100 font-bold text-sm mb-2 group-hover:text-secondary transition-colors">Noche de Jazz & Tapas</h4>
                    <p class="text-zinc-500 text-xs leading-relaxed">Música en vivo con nuestro cuarteto residente y menú degustación de temporada.</p>
                  </div>
                  <div class="bg-white/5 border border-white/10 rounded p-5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-secondary text-[10px] font-black uppercase tracking-widest">01 Dic</span>
                      <span class="text-zinc-600 text-[10px] uppercase">13:00 PM</span>
                    </div>
                    <h4 class="text-zinc-100 font-bold text-sm mb-2 group-hover:text-secondary transition-colors">Brunch del Chef</h4>
                    <p class="text-zinc-500 text-xs leading-relaxed">Experiencia culinaria dominical con estaciones de cocina en vivo.</p>
                  </div>
                  <button class="w-full bg-secondary hover:opacity-90 text-white py-4 rounded text-xs font-black uppercase tracking-widest transition-all mt-8 flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg">calendar_month</span>
                    Ver Calendario Completo
                  </button>
                </div>
              </div>
            </aside>
            <div class="flex-grow relative flex flex-col justify-center px-8 lg:px-20 bg-zinc-900 lg:px-24">
              <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-gradient-to-r from-creme via-creme/30 to-transparent z-10"></div>
                <img alt="Escena de restaurante vibrante" class="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBpyDuFxDJwRJOGm9ybLAC7nOl_h01YCjxq8pDUVwXeZiN6bGZQ5X6kxYbBWHq5SKWKm46T8voC5mgq09BFOMbdWFHnkaVDyAipH06PNVm7WQN1om6Pda9BrZ8lJqmNWDOvXcb6BhMuJRWZRAc8RHrJ7MycWil7XAWmbaK3OlPkPO6vpMEMuKKYq0jQeyXZtXQkG02-1ngNBc4p4CEG5cLoHVht0BSCP8p--PbX5CJHgWtSdk0kNyb4cpC_FP5fG4k84Sd_9cdVBS6"/>
              </div>
              <div class="relative z-20 max-w-3xl">
                <span class="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Sabores que inspiran</span>
                <h1 class="text-zinc-100 text-4xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-8 xl:text-8xl">
                  Gastronomía de autor en un ambiente único.
                </h1>
                <div class="flex flex-wrap gap-4">
                  <a class="bg-zinc-900 text-zinc-100 px-8 py-4 rounded text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-2" href="#menu">
                    Explorar Menú <span class="material-symbols-outlined text-sm">restaurant_menu</span>
                  </a>
                  <a class="bg-secondary text-white px-8 py-4 rounded text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all" href="#eventos">
                    Reservar Evento
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 px-6 lg:px-20 bg-zinc-900 lg:py-32" id="menu">
            <div class="max-w-7xl mx-auto">
              <div class="text-center mb-20">
                <h2 class="text-4xl font-black text-zinc-100 tracking-tighter mb-4 uppercase">Nuestra Carta</h2>
                <div class="h-1 w-24 bg-secondary mx-auto"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                <div>
                  <div class="flex items-center gap-4 mb-10">
                    <h3 class="text-2xl font-black text-zinc-100 uppercase tracking-tight">Entradas</h3>
                    <div class="h-px grow bg-white/10"></div>
                  </div>
                  <div class="space-y-10">
                    <div class="group">
                      <div class="flex justify-between items-end mb-2">
                        <h4 class="text-lg font-bold text-zinc-100 group-hover:text-secondary transition-colors">Ceviche de la Casa</h4>
                        <span class="text-zinc-100 font-bold">$22</span>
                      </div>
                      <p class="text-zinc-500 text-sm italic">Pesca del día marinado en cítricos, ají limo y cilantro fresco.</p>
                    </div>
                    <div class="group border-l-4 border-secondary pl-4 py-1">
                      <div class="flex justify-between items-end mb-2">
                        <h4 class="text-lg font-bold text-primary">Carpaccio de Res <span class="ml-2 text-[10px] bg-secondary text-white px-2 py-0.5 rounded uppercase tracking-widest">Sugerencia</span></h4>
                        <span class="text-zinc-100 font-bold">$26</span>
                      </div>
                      <p class="text-zinc-500 text-sm italic">Finos cortes de lomo, aceite de trufa, alcaparras y lascas de parmesano.</p>
                    </div>
                    <div class="group">
                      <div class="flex justify-between items-end mb-2">
                        <h4 class="text-lg font-bold text-zinc-100 group-hover:text-secondary transition-colors">Burrata de Búfala</h4>
                        <span class="text-zinc-100 font-bold">$24</span>
                      </div>
                      <p class="text-zinc-500 text-sm italic">Tomates cherry confitados, pesto de albahaca y reducción de balsámico.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center gap-4 mb-10">
                    <h3 class="text-2xl font-black text-zinc-100 uppercase tracking-tight">Principales</h3>
                    <div class="h-px grow bg-white/10"></div>
                  </div>
                  <div class="space-y-10">
                    <div class="group border-l-4 border-secondary pl-4 py-1">
                      <div class="flex justify-between items-end mb-2">
                        <h4 class="text-lg font-bold text-primary">Risotto de Hongos Silvestres <span class="ml-2 text-[10px] bg-secondary text-white px-2 py-0.5 rounded uppercase tracking-widest">Favorito</span></h4>
                        <span class="text-zinc-100 font-bold">$38</span>
                      </div>
                      <p class="text-zinc-500 text-sm italic">Variedad de setas, mantequilla de trufa negra y queso pecorino.</p>
                    </div>
                    <div class="group">
                      <div class="flex justify-between items-end mb-2">
                        <h4 class="text-lg font-bold text-zinc-100 group-hover:text-secondary transition-colors">Salmón al Grill</h4>
                        <span class="text-zinc-100 font-bold">$42</span>
                      </div>
                      <p class="text-zinc-500 text-sm italic">Acompañado de espárragos trigueros y puré de coliflor aterciopelado.</p>
                    </div>
                    <div class="group">
                      <div class="flex justify-between items-end mb-2">
                        <h4 class="text-lg font-bold text-zinc-100 group-hover:text-secondary transition-colors">Lomo Aviro</h4>
                        <span class="text-zinc-100 font-bold">$48</span>
                      </div>
                      <p class="text-zinc-500 text-sm italic">Corte premium en salsa de pimienta verde y papas rústicas al romero.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-20 flex justify-center">
                <button class="border border-white/10 text-zinc-100 px-10 py-4 rounded text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-zinc-100 transition-all">
                  Descargar Menú Completo (PDF)
                </button>
              </div>
            </div>
          </section>
          <section class="py-24 bg-zinc-900 text-zinc-100 lg:py-32" id="eventos">
            <div class="max-w-7xl mx-auto px-6 lg:px-20">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                  <img alt="Comedor privado elegante" class="rounded-lg shadow-2xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
                  <div class="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-lg hidden md:block">
                    <p class="text-4xl font-black mb-1">Capacidad 40</p>
                    <p class="text-[10px] font-bold uppercase tracking-widest opacity-80">Personas en salón privado</p>
                  </div>
                </div>
                <div>
                  <span class="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block border-l-2 border-secondary pl-3">Servicios Exclusivos</span>
                  <h2 class="text-4xl font-black mb-8 tracking-tighter leading-tight">Cenas Privadas y Eventos Corporativos</h2>
                  <p class="text-zinc-400 text-lg mb-10 leading-relaxed">
                    Diseñamos experiencias a medida para sus momentos especiales. Desde reuniones íntimas hasta lanzamientos de marca, nuestro equipo se encarga de cada detalle culinario y logístico.
                  </p>
                  <ul class="space-y-6 mb-12">
                    <li class="flex items-center gap-4">
                      <span class="material-symbols-outlined text-secondary">verified</span>
                      <span class="font-bold">Menús degustación personalizados</span>
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="material-symbols-outlined text-secondary">verified</span>
                      <span class="font-bold">Equipamiento audiovisual premium</span>
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="material-symbols-outlined text-secondary">verified</span>
                      <span class="font-bold">Servicio de Catering Externo</span>
                    </li>
                  </ul>
                  <button class="bg-zinc-900 text-zinc-100 px-10 py-5 rounded text-xs font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
                    Solicitar Información
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 px-6 lg:px-20 bg-zinc-900 border-t border-white/5 lg:py-32">
            <div class="max-w-7xl mx-auto">
              <h2 class="text-xs font-black text-zinc-500 uppercase tracking-[0.4em] mb-16 text-center">Reserva tu Experiencia</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/5">
                <div class="bg-zinc-900 p-12 text-center group">
                  <div class="size-16 rounded border border-white/5 flex items-center justify-center text-primary/40 text-xl font-black mb-8 mx-auto group-hover:bg-zinc-900 group-hover:text-zinc-100 group-hover:border-white/10 transition-all">01</div>
                  <h4 class="text-lg font-bold text-zinc-100 mb-4">Elige</h4>
                  <p class="text-zinc-500 text-sm">Selecciona tu plato favorito o el evento que desees asistir.</p>
                </div>
                <div class="bg-zinc-900 p-12 text-center group">
                  <div class="size-16 rounded border border-white/5 flex items-center justify-center text-primary/40 text-xl font-black mb-8 mx-auto group-hover:bg-zinc-900 group-hover:text-zinc-100 group-hover:border-white/10 transition-all">02</div>
                  <h4 class="text-lg font-bold text-zinc-100 mb-4">Agenda</h4>
                  <p class="text-zinc-500 text-sm">Reserva tu mesa o cupo para eventos especiales en línea.</p>
                </div>
                <div class="bg-zinc-900 p-12 text-center group">
                  <div class="size-16 rounded border border-white/5 flex items-center justify-center text-primary/40 text-xl font-black mb-8 mx-auto group-hover:bg-zinc-900 group-hover:text-zinc-100 group-hover:border-white/10 transition-all">03</div>
                  <h4 class="text-lg font-bold text-zinc-100 mb-4">Disfruta</h4>
                  <p class="text-zinc-500 text-sm">Vive una velada gastronómica excepcional con nosotros.</p>
                </div>
              </div>
            </div>
          </section>
        `}} />

        <footer className="bg-zinc-900 text-zinc-100 pt-24 pb-12 px-6 lg:px-20 border-t border-white/5" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-7xl mx-auto">
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

