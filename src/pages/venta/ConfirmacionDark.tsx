﻿
export default function ConfirmacionDark() {
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
                Iniciar sesión
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-col" dangerouslySetInnerHTML={{ __html: `
          <section class="bg-zinc-900 text-zinc-100 py-16 px-6 lg:px-20 border-b border-white/10">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <div class="flex items-center gap-3 text-secondary mb-4">
                  <span class="material-symbols-outlined">check_circle</span>
                  <span class="text-xs font-black uppercase tracking-[0.2em]">Reserva Confirmada</span>
                </div>
                <h1 class="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-2">Itinerario de Estancia</h1>
                <p class="text-zinc-500 font-medium">Código de Reserva: <span class="text-zinc-100">AV-9428510</span></p>
              </div>
              <div class="flex gap-4 w-full md:w-auto">
                <button class="flex-1 md:flex-none bg-secondary hover:opacity-90 text-zinc-100 px-8 py-4 rounded text-xs font-black uppercase tracking-widest transition-all">
                  Gestionar Reserva
                </button>
                <button class="flex-1 md:flex-none border border-creme/20 hover:bg-white/10 text-zinc-100 px-8 py-4 rounded text-xs font-black uppercase tracking-widest transition-all">
                  Descargar PDF
                </button>
              </div>
            </div>
          </section>
          <section class="py-20 px-6 lg:px-20 bg-zinc-900">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div class="lg:col-span-2 space-y-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/5 overflow-hidden rounded-lg">
                  <div class="bg-white/50 p-8">
                    <div class="flex items-center gap-2 text-zinc-500 mb-4">
                      <span class="material-symbols-outlined text-xl">login</span>
                      <span class="text-[10px] font-black uppercase tracking-[0.2em]">Llegada / Check-in</span>
                    </div>
                    <p class="text-2xl font-black text-primary">Viernes, 24 Mayo</p>
                    <p class="text-secondary font-bold text-sm">Desde las 15:00 hrs</p>
                  </div>
                  <div class="bg-white/50 p-8">
                    <div class="flex items-center gap-2 text-zinc-500 mb-4">
                      <span class="material-symbols-outlined text-xl">logout</span>
                      <span class="text-[10px] font-black uppercase tracking-[0.2em]">Salida / Check-out</span>
                    </div>
                    <p class="text-2xl font-black text-primary">Lunes, 27 Mayo</p>
                    <p class="text-secondary font-bold text-sm">Hasta las 12:00 hrs</p>
                  </div>
                </div>
                <div class="space-y-4">
                  <details class="group bg-zinc-900/40 border border-white/5 rounded-lg overflow-hidden" open="">
                    <summary class="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-all" style="list-style: none;">
                      <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-secondary">hotel</span>
                        <h3 class="font-black uppercase tracking-widest text-sm">Detalles de la Habitación</h3>
                      </div>
                      <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div class="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p class="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4">Tipo de Habitación</p>
                        <p class="font-bold text-lg text-zinc-100 mb-4">Suite Ejecutiva con Vista al Jardín</p>
                        <ul class="space-y-3">
                          <li class="flex items-center gap-3 text-sm text-zinc-400">
                            <span class="material-symbols-outlined text-xs text-secondary">check</span> 45 m² de espacio privado
                          </li>
                          <li class="flex items-center gap-3 text-sm text-zinc-400">
                            <span class="material-symbols-outlined text-xs text-secondary">check</span> Cama King Size Premium
                          </li>
                          <li class="flex items-center gap-3 text-sm text-zinc-400">
                            <span class="material-symbols-outlined text-xs text-secondary">check</span> Escritorio ergonómico
                          </li>
                        </ul>
                      </div>
                      <div class="bg-white/5 rounded p-6">
                        <p class="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4">Servicios Incluidos</p>
                        <div class="grid grid-cols-2 gap-4">
                          <div class="flex flex-col gap-1">
                            <span class="material-symbols-outlined text-zinc-500">wifi</span>
                            <span class="text-[10px] font-bold uppercase text-zinc-500">Wi-Fi 6</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="material-symbols-outlined text-zinc-500">coffee_maker</span>
                            <span class="text-[10px] font-bold uppercase text-zinc-500">Nespresso</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="material-symbols-outlined text-zinc-500">ac_unit</span>
                            <span class="text-[10px] font-bold uppercase text-zinc-500">Clima Smart</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="material-symbols-outlined text-zinc-500">tv</span>
                            <span class="text-[10px] font-bold uppercase text-zinc-500">Smart TV 55"</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                  <details class="group bg-zinc-900/40 border border-white/5 rounded-lg overflow-hidden">
                    <summary class="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-all" style="list-style: none;">
                      <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-secondary">restaurant</span>
                        <h3 class="font-black uppercase tracking-widest text-sm">Alimentación y Gastronomía</h3>
                      </div>
                      <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div class="p-8 pt-0 space-y-6">
                      <div class="flex gap-4 p-4 border-l-4 border-secondary bg-secondary/5">
                        <span class="material-symbols-outlined text-secondary">info</span>
                        <p class="text-sm leading-relaxed text-primary/80">
                          Tu reserva incluye <strong>Desayuno Buffet Gourmet</strong> servido de 06:30 a 10:30 hrs en el Restaurante Central.
                        </p>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="border border-white/5 p-4 rounded">
                          <p class="text-xs font-black text-zinc-100 uppercase mb-2">Restaurante Aviro</p>
                          <p class="text-xs text-zinc-500 mb-4">Cocina de autor e internacional</p>
                          <button class="text-[10px] font-black text-secondary uppercase tracking-widest">Reservar mesa</button>
                        </div>
                        <div class="border border-white/5 p-4 rounded">
                          <p class="text-xs font-black text-zinc-100 uppercase mb-2">Room Service</p>
                          <p class="text-xs text-zinc-500 mb-4">Disponible las 24 horas</p>
                          <button class="text-[10px] font-black text-secondary uppercase tracking-widest">Ver menú digital</button>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
                <div class="pt-12 border-t border-white/5">
                  <h2 class="text-2xl font-black text-zinc-100 tracking-tighter mb-8">Preguntas Frecuentes para tu Estadía</h2>
                  <div class="space-y-6">
                    <div>
                      <h4 class="font-bold text-zinc-100 mb-2">¿Puedo solicitar un Late Check-out?</h4>
                      <p class="text-sm text-zinc-500 leading-relaxed">Sujeto a disponibilidad. Se puede solicitar en recepción el día de la salida. Los miembros Elite disfrutan de late check-out garantizado hasta las 14:00.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-100 mb-2">¿Cómo funciona el acceso al Parking?</h4>
                      <p class="text-sm text-zinc-500 leading-relaxed">Tu reserva incluye parking gratuito. Al llegar, simplemente escanea el código QR de tu reserva en la entrada del estacionamiento subterráneo.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-zinc-100 mb-2">¿Tienen servicio de transfer al aeropuerto?</h4>
                      <p class="text-sm text-zinc-500 leading-relaxed">Sí, contamos con shuttles cada 30 minutos. Puedes coordinar tu recogido o salida directamente desde el botón de "Contactar Soporte".</p>
                    </div>
                  </div>
                </div>
              </div>
              <aside class="space-y-8">
                <div class="bg-zinc-900 p-8 rounded-lg text-zinc-100">
                  <h3 class="text-xs font-black uppercase tracking-[0.2em] mb-6 border-l-2 border-secondary pl-4">Información Importante</h3>
                  <ul class="space-y-6">
                    <li class="flex gap-4">
                      <span class="material-symbols-outlined text-secondary shrink-0">payments</span>
                      <div>
                        <p class="text-xs font-bold uppercase tracking-wider mb-1">Garantía</p>
                        <p class="text-xs text-zinc-500 leading-relaxed">Se requiere una tarjeta de crédito válida al check-in para gastos incidentales.</p>
                      </div>
                    </li>
                    <li class="flex gap-4">
                      <span class="material-symbols-outlined text-secondary shrink-0">pets</span>
                      <div>
                        <p class="text-xs font-bold uppercase tracking-wider mb-1">Políticas Pet-Friendly</p>
                        <p class="text-xs text-zinc-500 leading-relaxed">Se permiten mascotas de hasta 15kg previa notificación (cargo adicional aplica).</p>
                      </div>
                    </li>
                    <li class="flex gap-4">
                      <span class="material-symbols-outlined text-secondary shrink-0">smoke_free</span>
                      <div>
                        <p class="text-xs font-bold uppercase tracking-wider mb-1">Ambiente Libre de Humo</p>
                        <p class="text-xs text-zinc-500 leading-relaxed">Todas nuestras habitaciones y áreas comunes son 100% libres de humo.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="bg-zinc-900 p-8 border border-white/5 rounded-lg shadow-sm">
                  <h3 class="text-xs font-black text-zinc-100 uppercase tracking-[0.2em] mb-6">Asistencia Personalizada</h3>
                  <p class="text-sm text-zinc-500 mb-8 leading-relaxed">¿Necesitas algún requerimiento especial o tienes dudas sobre tu llegada?</p>
                  <button class="w-full bg-zinc-900 hover:opacity-90 text-zinc-100 py-4 rounded text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                    <span class="material-symbols-outlined text-lg">headset_mic</span>
                    Contactar Soporte
                  </button>
                  <div class="mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-4 text-primary/40">
                    <span class="material-symbols-outlined">chat</span>
                    <span class="material-symbols-outlined">call</span>
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        `}} />

        <footer className="text-zinc-100 pt-24 pb-12 px-6 lg:px-20 border-t border-white/5" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-7xl mx-auto">
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

















