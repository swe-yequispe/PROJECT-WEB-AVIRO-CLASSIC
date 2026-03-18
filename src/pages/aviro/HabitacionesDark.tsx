
export default function HabitacionesDark() {
  return (
    <div className="font-display transition-colors duration-300 bg-black text-zinc-100">
      <div className="layout-container flex h-full grow flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <img alt="Logo Hotel Aviro" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXq8rjVakM9drIaR9kjCOCFywTjZX0aASwpKIwlxZj0sja7toViuQLP-uP_x2rdaieOgTA9pZ4A10-pMV-YgeOgcv5D3_rJ74TlmBNb5JoN4-p-ooeSOO6MP2nhXYme2yjwfQ6PvzxVtrAZNrpaCY6X_YJlT7mAZz34YUdwMUZkQ24M-V9z19G7F0mr5c28L4_5Cdi11uFJnl9ODVace9Je2C1G7e7L0gHn6j0e_CNS6_7tCTl5Yd9zegQAyc-IujyOqkuXjIwams"/>
            </div>
            <nav className="hidden xl:flex items-center gap-6">
              <a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Inicio</a><a className="text-zinc-100 text-xs font-bold uppercase tracking-widest border-b-2 border-secondary pb-1" href="#">Habitaciones Darkness</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Restaurante</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Life</a><a className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-zinc-100 transition-colors" href="#">Corporativos</a></nav>
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
              <button className="hidden sm:flex items-center justify-center rounded px-5 h-9 bg-zinc-100 text-zinc-100 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Reservar ahora
              </button>
              <button className="flex items-center justify-center rounded h-9 px-5 border border-primary/20 bg-transparent text-zinc-100 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Iniciar sesion
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-col" dangerouslySetInnerHTML={{ __html: `
          <section class="relative py-20 px-6 lg:px-20 bg-black overflow-hidden">
            <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <span class="material-symbols-outlined text-[400px] text-zinc-100 rotate-12">bed</span>
            </div>
            <div class="max-w-7xl mx-auto relative z-10">
              <div class="max-w-3xl mb-12">
                <span class="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block border-l-2 border-secondary pl-3">Encuentra tu espacio</span>
                <h1 class="text-zinc-100 text-5xl lg:text-7xl font-black leading-tight tracking-tighter mb-6">
                  Habitaciones diseñadas para el descanso.
                </h1>
                <p class="text-zinc-400 text-lg lg:text-xl max-w-xl">
                  Desde suites ejecutivas hasta espacios familiares, cada detalle ha sido pensado para garantizar una estadía excepcional.
                </p>
              </div>
              <div class="flex flex-wrap items-center gap-4 border-y border-white/5 py-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-zinc-100/50 mr-2">Filtrar por:</span>
                <div class="relative group">
                  <button class="flex items-center gap-2 px-4 py-2 bg-zinc-900/40 border border-white/5 rounded text-xs font-bold text-zinc-100 hover:border-secondary transition-all">
                    Huéspedes <span class="material-symbols-outlined text-sm">expand_more</span>
                  </button>
                </div>
                <div class="relative group">
                  <button class="flex items-center gap-2 px-4 py-2 bg-zinc-900/40 border border-white/5 rounded text-xs font-bold text-zinc-100 hover:border-secondary transition-all">
                    Tipo de Cama <span class="material-symbols-outlined text-sm">expand_more</span>
                  </button>
                </div>
                <div class="flex items-center gap-2">
                  <button class="flex items-center gap-2 px-4 py-2 bg-zinc-900/40 border border-white/5 rounded text-xs font-bold text-zinc-100 hover:text-secondary hover:border-secondary transition-all">
                    <span class="material-symbols-outlined text-sm">balcony</span> Con Balcón
                  </button>
                  <button class="flex items-center gap-2 px-4 py-2 bg-zinc-900/40 border border-white/5 rounded text-xs font-bold text-zinc-100 hover:text-secondary hover:border-secondary transition-all">
                    <span class="material-symbols-outlined text-sm">workspace_premium</span> Corporativo
                  </button>
                </div>
                <div class="ml-auto">
                  <button class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary">
                    Limpiar filtros <span class="material-symbols-outlined text-xs">close</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section class="py-12 px-6 lg:px-20 bg-black">
            <div class="max-w-7xl mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="group bg-zinc-900/40 border border-white/5 rounded-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div class="relative h-72 overflow-hidden">
                    <img alt="Suite Ejecutiva" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
                    <div class="absolute top-4 right-4 bg-zinc-100 text-zinc-100 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded">Más Popular</div>
                  </div>
                  <div class="p-8 flex-grow flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-xl font-black text-zinc-100 tracking-tight">Suite Ejecutiva Superior</h3>
                      <p class="text-secondary font-black text-lg">$145<span class="text-[10px] text-zinc-100/50">/noche</span></p>
                    </div>
                    <p class="text-zinc-500 text-sm mb-6 line-clamp-2">Ideal para el viajero de negocios que busca confort y funcionalidad en un ambiente sofisticado.</p>
                    <div class="flex flex-wrap gap-4 mb-8">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-lg">laptop_mac</span>
                        <span class="text-[11px] font-bold text-zinc-100 uppercase">Espacio de Trabajo</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-lg">coffee_maker</span>
                        <span class="text-[11px] font-bold text-zinc-100 uppercase">Desayuno Incluido</span>
                      </div>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                      <a class="text-xs font-black uppercase tracking-widest text-zinc-100 hover:text-secondary flex items-center gap-2 transition-colors group/link" href="#">
                        Descubrir Más <span class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                      <button class="size-10 bg-white/5 rounded flex items-center justify-center text-zinc-100 hover:bg-secondary hover:text-zinc-100 transition-all">
                        <span class="material-symbols-outlined text-xl">bookmark</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="group bg-zinc-900/40 border border-white/5 rounded-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div class="relative h-72 overflow-hidden">
                    <img alt="Deluxe King" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBpyDuFxDJwRJOGm9ybLAC7nOl_h01YCjxq8pDUVwXeZiN6bGZQ5X6kxYbBWHq5SKWKm46T8voC5mgq09BFOMbdWFHnkaVDyAipH06PNVm7WQN1om6Pda9BrZ8lJqmNWDOvXcb6BhMuJRWZRAc8RHrJ7MycWil7XAWmbaK3OlPkPO6vpMEMuKKYq0jQeyXZtXQkG02-1ngNBc4p4CEG5cLoHVht0BSCP8p--PbX5CJHgWtSdk0kNyb4cpC_FP5fG4k84Sd_9cdVBS6"/>
                  </div>
                  <div class="p-8 flex-grow flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-xl font-black text-zinc-100 tracking-tight">Habitación Deluxe King</h3>
                      <p class="text-secondary font-black text-lg">$120<span class="text-[10px] text-zinc-100/50">/noche</span></p>
                    </div>
                    <p class="text-zinc-500 text-sm mb-6 line-clamp-2">Amplio espacio con cama King-size y ventanales de piso a techo con vistas panorámicas a la ciudad.</p>
                    <div class="flex flex-wrap gap-4 mb-8">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-lg">balcony</span>
                        <span class="text-[11px] font-bold text-zinc-100 uppercase">Balcón Privado</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-lg">wifi</span>
                        <span class="text-[11px] font-bold text-zinc-100 uppercase">Wi-Fi High-Speed</span>
                      </div>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                      <a class="text-xs font-black uppercase tracking-widest text-zinc-100 hover:text-secondary flex items-center gap-2 transition-colors group/link" href="#">
                        Descubrir Más <span class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                      <button class="size-10 bg-white/5 rounded flex items-center justify-center text-zinc-100 hover:bg-secondary hover:text-zinc-100 transition-all">
                        <span class="material-symbols-outlined text-xl">bookmark</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="group bg-zinc-900/40 border border-white/5 rounded-lg overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <div class="relative h-72 overflow-hidden">
                    <img alt="Suite Familiar" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLQ3E9FjejTvUcewdnINn8UedkPichivCXHZk2HRxaZl4d186DdSXwalzGXwCXm9A95uFanmckXH_LnmNN38diQ4LtXVKgp4Mblp-skgy2c0MzkwhfIfZAj6jUh9AF3_t4Ala55N7Ra60AwIHKDmzQW8dNCr03Oqfr1_smuQ2Fhss6jS-djSU7uSVg0LC8ob3Cg6gEKYSSQJYIjWP_cvcdxzJ6b0eWk0UFHggPinTpVUIX9_Rx2UZpCIbVEfWPugjbNsdoWwYqptx"/>
                  </div>
                  <div class="p-8 flex-grow flex flex-col">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-xl font-black text-zinc-100 tracking-tight">Suite Familiar Aviro</h3>
                      <p class="text-secondary font-black text-lg">$190<span class="text-[10px] text-zinc-100/50">/noche</span></p>
                    </div>
                    <p class="text-zinc-500 text-sm mb-6 line-clamp-2">Dos ambientes conectados, diseñados para ofrecer privacidad y comodidad a toda la familia.</p>
                    <div class="flex flex-wrap gap-4 mb-8">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-lg">family_restroom</span>
                        <span class="text-[11px] font-bold text-zinc-100 uppercase">Hasta 4 Personas</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary text-lg">kitchen</span>
                        <span class="text-[11px] font-bold text-zinc-100 uppercase">Minibar Completo</span>
                      </div>
                    </div>
                    <div class="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                      <a class="text-xs font-black uppercase tracking-widest text-zinc-100 hover:text-secondary flex items-center gap-2 transition-colors group/link" href="#">
                        Descubrir Más <span class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                      <button class="size-10 bg-white/5 rounded flex items-center justify-center text-zinc-100 hover:bg-secondary hover:text-zinc-100 transition-all">
                        <span class="material-symbols-outlined text-xl">bookmark</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-20 flex flex-col items-center">
                <button class="px-10 py-4 border border-primary text-zinc-100 text-xs font-black uppercase tracking-widest hover:bg-zinc-100 hover:text-zinc-100 transition-all">
                  Cargar más habitaciones
                </button>
                <p class="mt-4 text-[10px] font-bold text-zinc-100/50 uppercase tracking-[0.2em]">Mostrando 3 de 12 opciones</p>
              </div>
            </div>
          </section>
          <section class="py-24 px-6 lg:px-20 bg-[#121212] border-y border-white/5">
            <div class="max-w-7xl mx-auto">
              <div class="flex flex-col md:flex-row gap-12 items-center">
                <div class="w-full md:w-1/2">
                  <h2 class="text-3xl font-black text-zinc-100 mb-6 tracking-tighter">Estándares Aviro en cada estancia.</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-start gap-4">
                      <span class="material-symbols-outlined text-secondary">hotel_class</span>
                      <div>
                        <h4 class="font-bold text-zinc-100 text-sm uppercase mb-1">Camas Ortopédicas</h4>
                        <p class="text-xs text-zinc-100/50 leading-relaxed">Sábanas de algodón egipcio de 400 hilos.</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <span class="material-symbols-outlined text-secondary">shield_moon</span>
                      <div>
                        <h4 class="font-bold text-zinc-100 text-sm uppercase mb-1">Insonorización</h4>
                        <p class="text-xs text-zinc-100/50 leading-relaxed">Ventanas termoacústicas para un descanso total.</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <span class="material-symbols-outlined text-secondary">shower</span>
                      <div>
                        <h4 class="font-bold text-zinc-100 text-sm uppercase mb-1">Ducha Rain-Fall</h4>
                        <p class="text-xs text-zinc-100/50 leading-relaxed">Presión constante y amenities premium.</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <span class="material-symbols-outlined text-secondary">air_purifier_gen</span>
                      <div>
                        <h4 class="font-bold text-zinc-100 text-sm uppercase mb-1">Domótica</h4>
                        <p class="text-xs text-zinc-100/50 leading-relaxed">Control de luces y temperatura desde tu móvil.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 relative">
                  <div class="aspect-square bg-zinc-900 border border-white/5 rounded-lg p-2 overflow-hidden">
                    <img alt="Detalle de habitación" class="w-full h-full object-cover rounded shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
                  </div>
                  <div class="absolute -bottom-6 -left-6 bg-secondary p-8 text-zinc-100 hidden lg:block">
                    <p class="text-4xl font-black">100%</p>
                    <p class="text-[10px] font-bold uppercase tracking-widest">Satisfacción garantizada</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-20 px-6 lg:px-20 bg-zinc-900 text-zinc-100">
            <div class="max-w-4xl mx-auto text-center">
              <h2 class="text-3xl md:text-5xl font-black mb-8 tracking-tighter">¿Listo para una experiencia inolvidable?</h2>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button class="w-full sm:w-auto px-12 py-5 bg-secondary text-zinc-100 text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all">
                  Reservar Mi Habitación
                </button>
                <button class="w-full sm:w-auto px-12 py-5 border border-creme/20 text-zinc-100 text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-zinc-100 transition-all">
                  Ver Paquetes Corporativos
                </button>
              </div>
            </div>
          </section>
        `}} />

        <footer className="bg-zinc-950 text-zinc-100 pt-24 pb-12 px-6 lg:px-20 border-t border-white/5" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div>
                <img alt="Logo Aviro Light" class="h-8 mb-10 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNUt7wKt_B06xjYbaqm6cdoDpJDGsjXVaoglnrtbalW_k1DPSRu9Yzr1rzoVx-nG5KIYJj5IEhbmwCwZfqxOjZlRPzPow7zokCgmYScctR0RvjlymrJBb1q5a7z0E-4BUXYEL86SymghoWyLZftMAMiY1kbFx_69VbSW8MEkw42nOYgPNRrQ5c3p0Q01dRm7KAsxD4sBQO8ch8jVQ55YXMJ9EgFnwgiqTS_1GPs5zRnK5c6k4nF8uItYrvoRkl2Op1kqpqHlOD1RS"/>
                <p class="text-zinc-100/60 text-sm leading-relaxed mb-10">Elevando el estándar de hospitalidad en la ciudad para viajeros de negocios y placer.</p>
                <div class="flex gap-3">
                  <a class="size-9 bg-zinc-900/40/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span class="material-symbols-outlined text-lg">social_leaderboard</span>
                  </a>
                  <a class="size-9 bg-zinc-900/40/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span class="material-symbols-outlined text-lg">photo_camera</span>
                  </a>
                  <a class="size-9 bg-zinc-900/40/5 rounded flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                    <span class="material-symbols-outlined text-lg">alternate_email</span>
                  </a>
                </div>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Enlaces Rápidos</h4>
                <ul class="space-y-4 text-zinc-100/60 text-sm">
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Inicio</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Nuestros Servicios</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Habitaciones Darkness</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Preguntas Frecuentes</a></li>
                  <li><a class="hover:text-zinc-100 transition-colors" href="#">Libro de Reclamaciones</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Servicios</h4>
                <ul class="space-y-4 text-zinc-100/60 text-sm">
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Lavandería Express</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Room Service 24h</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Pet Friendly</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Salas de Reunión</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Gimnasio</li>
                </ul>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-zinc-100">Contacto</h4>
                <ul class="space-y-5 text-zinc-100/60 text-sm">
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
            <div class="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-100/40 text-[10px] font-bold uppercase tracking-widest">
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

