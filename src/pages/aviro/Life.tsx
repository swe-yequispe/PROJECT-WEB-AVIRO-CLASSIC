﻿
export default function Life() {
  return (
    <div className="font-display bg-creme text-primary">
      <div className="layout-container flex h-full grow flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-creme/95 backdrop-blur-md border-b border-primary/10 px-6 lg:px-12 py-4 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Aviró Hotel Plaza</span>
            </div>
            <nav className="hidden xl:flex items-center gap-6 xl:ml-10">
              <a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Inicio</a><a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Habitaciones</a><a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Restaurante</a><a className="text-primary text-xs font-black uppercase tracking-widest border-b-2 border-secondary" href="#">Life</a><a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Corporativos</a></nav>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 mr-4 border-r border-primary/10 pr-4">
                <button className="p-1.5 hover:bg-primary/5 rounded transition-colors text-primary/70 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">language</span>
                </button>
                <button className="p-1.5 hover:bg-primary/5 rounded transition-colors text-primary/70 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">payments</span>
                </button>
                <button className="p-1.5 hover:bg-primary/5 rounded transition-colors text-primary/70 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">dark_mode</span>
                </button>
              </div>
              <button className="hidden sm:flex items-center justify-center rounded px-5 h-9 bg-primary text-creme text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                Reservar ahora
              </button>
              <button className="flex items-center justify-center rounded h-9 px-5 border border-primary/20 bg-transparent text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary/5 transition-all">
                Iniciar sesión
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-col" dangerouslySetInnerHTML={{ __html: `
          <section class="relative pt-20 pb-32 px-6 lg:px-20 overflow-hidden">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center xl:gap-24">
              <div class="lg:col-span-5 z-10">
                <span class="text-secondary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Bienvenido a Life</span>
                <h1 class="font-serif text-6xl lg:text-8xl text-primary leading-tight mb-8">El arte de pertenecer.</h1>
                <p class="editorial-text text-lg text-primary/80 mb-10 max-w-md">
                  Life no es solo un programa de lealtad; es nuestro círculo más íntimo. Una filosofía de hospitalidad donde cada estadía profundiza su conexión con nosotros, desbloqueando un mundo de privilegios diseñados exclusivamente para quienes llaman a Aviro su hogar lejos de casa.
                </p>
                <button class="bg-primary text-creme px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all">
                  Únete al Círculo
                </button>
              </div>
              <div class="lg:col-span-7 relative">
                <div class="aspect-[4/5] lg:aspect-square overflow-hidden">
                  <img alt="Interior de lujo" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLQ3E9FjejTvUcewdnINn8UedkPichivCXHZk2HRxaZl4d186DdSXwalzGXwCXm9A95uFanmckXH_LnmNN38diQ4LtXVKgp4Mblp-skgy2c0MzkwhfIfZAj6jUh9AF3_t4Ala55N7Ra60AwIHKDmzQW8dNCr03Oqfr1_smuQ2Fhss6jS-djSU7uSVg0LC8ob3Cg6gEKYSSQJYIjWP_cvcdxzJ6b0eWk0UFHggPinTpVUIX9_Rx2UZpCIbVEfWPugjbNsdoWwYqptx"/>
                </div>
                <div class="absolute -bottom-10 -left-10 bg-secondary p-8 hidden lg:block max-w-xs">
                  <p class="text-white text-sm font-medium italic">"La verdadera exclusividad no es el lujo, sino el reconocimiento de sus preferencias antes de que las mencione."</p>
                </div>
              </div>
            </div>
          </section>
          <section class="py-32 bg-creme border-y border-primary/5">
            <div class="mx-auto px-6 text-center max-w-7xl">
              <h2 class="font-serif text-4xl md:text-5xl text-primary mb-12 italic">Más que noches, son momentos compartidos.</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-16 text-left border-t border-primary/10 pt-16">
                <div>
                  <span class="text-secondary font-black text-2xl mb-4 block">01.</span>
                  <h3 class="font-bold text-lg mb-4 text-primary uppercase tracking-tighter">Fidelidad Recompensada</h3>
                  <p class="text-muted text-sm editorial-text">Cada noche con nosotros cuenta. A medida que sus estancias crecen, también lo hace nuestra gratitud, manifestándose en beneficios tangibles para su próxima reserva.</p>
                </div>
                <div>
                  <span class="text-secondary font-black text-2xl mb-4 block">02.</span>
                  <h3 class="font-bold text-lg mb-4 text-primary uppercase tracking-tighter">Gastronomía Sin Límites</h3>
                  <p class="text-muted text-sm editorial-text">Los miembros de Life disfrutan de una mesa siempre reservada y descuentos exclusivos en nuestro restaurante de autor, celebrando el paladar en cada visita.</p>
                </div>
                <div>
                  <span class="text-secondary font-black text-2xl mb-4 block">03.</span>
                  <h3 class="font-bold text-lg mb-4 text-primary uppercase tracking-tighter">Acceso Preferencial</h3>
                  <p class="text-muted text-sm editorial-text">Upgrade de habitaciones sujeto a disponibilidad y early check-in para que su experiencia comience en el momento exacto en que llega a la ciudad.</p>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 px-6 lg:px-20 bg-creme">
            <div class="max-w-7xl mx-auto">
              <div class="flex flex-col lg:flex-row gap-1 border-primary/10 border">
                <div class="flex-1 relative group overflow-hidden">
                  <img alt="Lifestyle" class="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
                  <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12 text-creme">
                    <h4 class="text-3xl font-serif mb-4 italic">Nivel Esencia</h4>
                    <p class="text-sm uppercase tracking-[0.2em] font-bold">1-5 Estancias anuales</p>
                    <ul class="mt-6 space-y-2 text-sm">
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> 10% Descuento en Habitaciones</li>
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> Bebida de bienvenida</li>
                    </ul>
                  </div>
                </div>
                <div class="flex-1 relative group overflow-hidden">
                  <img alt="Dining experience" class="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBpyDuFxDJwRJOGm9ybLAC7nOl_h01YCjxq8pDUVwXeZiN6bGZQ5X6kxYbBWHq5SKWKm46T8voC5mgq09BFOMbdWFHnkaVDyAipH06PNVm7WQN1om6Pda9BrZ8lJqmNWDOvXcb6BhMuJRWZRAc8RHrJ7MycWil7XAWmbaK3OlPkPO6vpMEMuKKYq0jQeyXZtXQkG02-1ngNBc4p4CEG5cLoHVht0BSCP8p--PbX5CJHgWtSdk0kNyb4cpC_FP5fG4k84Sd_9cdVBS6"/>
                  <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12 text-creme">
                    <h4 class="text-3xl font-serif mb-4 italic">Nivel Horizonte</h4>
                    <p class="text-sm uppercase tracking-[0.2em] font-bold">6-15 Estancias anuales</p>
                    <ul class="mt-6 space-y-2 text-sm">
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> 20% Descuento en Habitaciones</li>
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> 15% Descuento en Restaurante</li>
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> Late Check-out garantizado</li>
                    </ul>
                  </div>
                </div>
                <div class="flex-1 relative group overflow-hidden">
                  <img alt="Exterior Aviro" class="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLQ3E9FjejTvUcewdnINn8UedkPichivCXHZk2HRxaZl4d186DdSXwalzGXwCXm9A95uFanmckXH_LnmNN38diQ4LtXVKgp4Mblp-skgy2c0MzkwhfIfZAj6jUh9AF3_t4Ala55N7Ra60AwIHKDmzQW8dNCr03Oqfr1_smuQ2Fhss6jS-djSU7uSVg0LC8ob3Cg6gEKYSSQJYIjWP_cvcdxzJ6b0eWk0UFHggPinTpVUIX9_Rx2UZpCIbVEfWPugjbNsdoWwYqptx"/>
                  <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12 text-creme">
                    <h4 class="text-3xl font-serif mb-4 italic">Nivel Infinito</h4>
                    <p class="text-sm uppercase tracking-[0.2em] font-bold">15+ Estancias anuales</p>
                    <ul class="mt-6 space-y-2 text-sm">
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> 35% Descuento en Reservas</li>
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> Acceso VIP Lounge</li>
                      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">check</span> Desayuno Gourmet incluido</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 bg-creme">
            <div class="max-w-7xl mx-auto px-6 lg:px-20">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-center xl:gap-32">
                <div>
                  <h2 class="text-4xl font-serif text-primary mb-12">Historias de nuestro círculo.</h2>
                  <div class="space-y-16">
                    <div class="relative pl-12">
                      <span class="material-symbols-outlined absolute left-0 top-0 text-secondary text-4xl opacity-50">format_quote</span>
                      <p class="editorial-text text-lg italic text-primary/80 mb-6">"Pertenecer a Life ha cambiado mi forma de viajar por trabajo. Ya no busco hoteles, busco volver a Aviro. El reconocimiento y los beneficios en el restaurante hacen que cada viaje se sienta como un premio."</p>
                      <div class="flex items-center gap-4">
                        <div class="size-10 bg-muted rounded-full overflow-hidden"></div>
                        <div>
                          <p class="font-bold text-xs uppercase tracking-widest text-primary">Sofía Martínez</p>
                          <p class="text-[10px] text-muted font-bold uppercase">Miembro Horizonte desde 2021</p>
                        </div>
                      </div>
                    </div>
                    <div class="relative pl-12">
                      <span class="material-symbols-outlined absolute left-0 top-0 text-secondary text-4xl opacity-50">format_quote</span>
                      <p class="editorial-text text-lg italic text-primary/80 mb-6">"El nivel de atención personalizada es incomparable. Saber que mi habitación preferida está lista y tener un descuento significativo en mi cena es un lujo que valoro profundamente."</p>
                      <div class="flex items-center gap-4">
                        <div class="size-10 bg-muted rounded-full overflow-hidden"></div>
                        <div>
                          <p class="font-bold text-xs uppercase tracking-widest text-primary">Carlos Ruiz</p>
                          <p class="text-[10px] text-muted font-bold uppercase">Miembro Infinito</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <img alt="Revista Editorial" class="shadow-2xl grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
                  <div class="absolute -top-10 -right-10 w-48 h-48 bg-primary flex items-center justify-center p-8 text-center">
                    <p class="text-creme text-xs font-bold uppercase tracking-widest leading-loose">Descubre el privilegio de ser parte.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-24 bg-primary text-creme">
            <div class="max-w-4xl mx-auto px-6 text-center">
              <span class="material-symbols-outlined text-5xl mb-8 text-secondary">workspace_premium</span>
              <h2 class="font-serif text-5xl mb-10 italic">Su próxima estancia merece ser extraordinaria.</h2>
              <p class="text-creme/70 text-lg mb-12 max-w-2xl mx-auto editorial-text">Comience su camino en Life hoy mismo. Regístrese y obtenga beneficios inmediatos en su primera reserva a través de nuestra web.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-secondary text-white px-12 py-5 text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all">Registrarse Ahora</button>
                <button class="border border-creme/20 text-creme px-12 py-5 text-xs font-black uppercase tracking-widest hover:bg-creme/10 transition-all">Ver Más Beneficios</button>
              </div>
            </div>
          </section>
        `}} />

        <footer className="bg-primary text-creme pt-24 pb-12 px-6 lg:px-20 border-t border-white/5" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div>
                <img alt="Logo Aviró Hotel Plaza" class="h-24 mb-10 mx-auto block" src="/aviro-logo-plaza.png" />
                <p class="text-creme/60 text-sm leading-relaxed mb-10">Elevando el estándar de hospitalidad en la ciudad para viajeros de negocios y placer.</p>
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
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-creme">Enlaces Rápidos</h4>
                <ul class="space-y-4 text-creme/60 text-sm">
                  <li><a class="hover:text-creme transition-colors" href="#">Inicio</a></li>
                  <li><a class="hover:text-creme transition-colors" href="#">Nuestros Servicios</a></li>
                  <li><a class="hover:text-creme transition-colors" href="#">Habitaciones</a></li>
                  <li><a class="hover:text-creme transition-colors" href="#">Preguntas Frecuentes</a></li>
                  <li><a class="hover:text-creme transition-colors" href="#">Libro de Reclamaciones</a></li>
                </ul>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-creme">Servicios</h4>
                <ul class="space-y-4 text-creme/60 text-sm">
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Lavandería Express</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Room Service 24h</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Pet Friendly</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Salas de Reunión</li>
                  <li class="flex items-center gap-3"><span class="material-symbols-outlined text-xs text-secondary">check</span> Gimnasio</li>
                </ul>
              </div>
              <div>
                <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-8 text-creme">Contacto</h4>
                <ul class="space-y-5 text-creme/60 text-sm">
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
            <div class="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-creme/40 text-[10px] font-bold uppercase tracking-widest">
              <p>© 2024 Hotel Aviro. Todos los derechos reservados.</p>
              <div class="flex gap-10">
                <a class="hover:text-creme transition-colors" href="#">Términos y Condiciones</a>
                <a class="hover:text-creme transition-colors" href="#">Política de Privacidad</a>
              </div>
            </div>
          </div>
        `}} />
      </div>
    </div>
  );
}







