﻿
export default function HuespedDark() {
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
        <main className="flex-grow py-12 lg:py-20 px-6" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-6xl mx-auto">
            <div class="mb-16">
              <div class="flex items-center justify-between max-w-2xl mx-auto relative">
                <div class="absolute top-5 left-0 w-full h-px bg-white/10 z-0"></div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-zinc-900 text-zinc-100 flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                    <span class="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Pedido</span>
                </div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-secondary text-zinc-100 flex items-center justify-center font-bold text-sm shadow-lg shadow-secondary/20">
                    2
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-secondary">Huésped</span>
                </div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-zinc-900 border-2 border-white/10 text-primary/30 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-primary/30">Pago</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div class="lg:col-span-8 space-y-8">
                <section class="bg-zinc-900/60 border border-white/5 p-8 rounded-xl shadow-sm">
                  <div class="flex items-center justify-between mb-10">
                    <div class="flex items-center gap-4">
                      <span class="material-symbols-outlined text-secondary text-3xl">person_add</span>
                      <h2 class="text-2xl font-black uppercase tracking-tighter text-primary">Registro de Huéspedes</h2>
                    </div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-zinc-500 bg-white/5 px-3 py-1 rounded">2 Habitaciones Seleccionadas</span>
                  </div>
                  <div class="space-y-6">
                    <div class="border border-white/5 rounded-xl overflow-hidden bg-zinc-900 group">
                      <button class="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all">
                        <div class="flex items-center gap-4">
                          <div class="size-10 rounded bg-zinc-900 flex items-center justify-center text-zinc-100">
                            <span class="material-symbols-outlined">stars</span>
                          </div>
                          <div>
                            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Huésped Titular</p>
                            <h3 class="text-lg font-black text-zinc-100 uppercase">Datos de Facturación y Contacto</h3>
                          </div>
                        </div>
                        <span class="material-symbols-outlined text-primary/40 group-hover:text-zinc-100 transition-colors">expand_less</span>
                      </button>
                      <div class="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nombre Completo</label>
                          <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-zinc-100 placeholder:text-primary/20 focus:ring-secondary focus:border-secondary transition-all" placeholder="Ej. Juan Pérez" type="text" value="Juan Alberto Pérez"/>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Correo Electrónico</label>
                          <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-zinc-100 placeholder:text-primary/20" placeholder="juan@ejemplo.com" type="email"/>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documento de Identidad (DNI/Pasaporte)</label>
                          <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-primary" type="text"/>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Teléfono de Contacto</label>
                          <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-primary" type="tel"/>
                        </div>
                        <div class="md:col-span-2 pt-4 flex items-center gap-3">
                          <input class="size-4 rounded border-white/10 text-secondary focus:ring-secondary transition-all" id="tax_exempt" type="checkbox"/>
                          <label class="text-xs font-bold text-zinc-500 cursor-pointer" for="tax_exempt">Soy extranjero y solicito exoneración del IGV (Debe presentar pasaporte y sello de migración al check-in)</label>
                        </div>
                      </div>
                    </div>
                    <div class="border border-white/5 rounded-xl overflow-hidden bg-zinc-900/40">
                      <button class="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-all">
                        <div class="flex items-center gap-4">
                          <div class="size-9 rounded bg-white/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined text-lg">person</span>
                          </div>
                          <div>
                            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 leading-tight">Huésped 2</p>
                            <h3 class="text-sm font-black text-zinc-100 uppercase">Margarita Sánchez</h3>
                          </div>
                        </div>
                        <div class="flex items-center gap-4">
                          <span class="text-[10px] font-black uppercase tracking-widest text-secondary/40">Completado</span>
                          <span class="material-symbols-outlined text-primary/20">expand_more</span>
                        </div>
                      </button>
                    </div>
                    <div class="border border-white/5 rounded-xl overflow-hidden bg-zinc-900/40">
                      <button class="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-all">
                        <div class="flex items-center gap-4">
                          <div class="size-9 rounded bg-white/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined text-lg">person</span>
                          </div>
                          <div>
                            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 leading-tight">Huésped 3</p>
                            <h3 class="text-sm font-black text-primary/40 uppercase">Pendiente de registro</h3>
                          </div>
                        </div>
                        <span class="material-symbols-outlined text-primary/20">expand_more</span>
                      </button>
                    </div>
                    <button class="w-full py-6 border-2 border-dashed border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-secondary/40 hover:bg-secondary/5 transition-all group">
                      <div class="size-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-zinc-100 transition-all">
                        <span class="material-symbols-outlined">add</span>
                      </div>
                      <span class="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-secondary">Agregar Huésped Adicional</span>
                    </button>
                  </div>
                  <div class="mt-12 pt-8 border-t border-white/5">
                    <div class="flex items-start gap-4 p-5 bg-secondary/5 border border-secondary/10 rounded-lg">
                      <span class="material-symbols-outlined text-secondary">info</span>
                      <div class="space-y-1">
                        <p class="text-[11px] font-black uppercase tracking-wider text-secondary leading-tight">Requerimiento Especial</p>
                        <p class="text-[10px] text-zinc-500 font-medium leading-relaxed">¿Tiene alguna solicitud especial? (Alergias, movilidad reducida, check-in anticipado, etc.)</p>
                        <textarea class="mt-3 w-full bg-zinc-900 border-white/5 rounded p-3 text-xs font-bold text-zinc-100 focus:ring-secondary focus:border-secondary transition-all" placeholder="Escriba aquí sus comentarios..." rows="2"></textarea>
                      </div>
                    </div>
                  </div>
                </section>
                <div class="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                  <button class="flex items-center gap-3 text-zinc-500 hover:text-zinc-100 text-[11px] font-black uppercase tracking-[0.2em] transition-all">
                    <span class="material-symbols-outlined text-lg">arrow_back</span>
                    Regresar a Pedido
                  </button>
                  <button class="w-full sm:w-auto bg-secondary text-zinc-100 px-12 py-5 rounded-lg text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-95 transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-4 group">
                    Proceder al Pago
                    <span class="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">payments</span>
                  </button>
                </div>
              </div>
              <div class="lg:col-span-4">
                <div class="sticky top-[100px] space-y-6">
                  <div class="bg-zinc-900 text-zinc-100 p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    <div class="absolute -right-12 -top-12 size-40 bg-secondary/10 rounded-full blur-3xl"></div>
                    <h3 class="relative z-10 text-xs font-black uppercase tracking-[0.4em] mb-10 border-l-2 border-secondary pl-5">Resumen de Reserva</h3>
                    <div class="relative z-10 space-y-5 mb-10">
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-zinc-500 font-medium">Suite Ejecutiva (3 Noches)</span>
                        <span class="font-bold text-lg">$360.00</span>
                      </div>
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-zinc-500 font-medium">Hab. Deluxe (3 Noches)</span>
                        <span class="font-bold text-lg">$280.00</span>
                      </div>
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-zinc-500 font-medium">Servicios Adicionales</span>
                        <span class="font-bold text-lg">$115.00</span>
                      </div>
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-zinc-500 font-medium">Impuestos (18%)</span>
                        <span class="font-bold text-lg">$135.90</span>
                      </div>
                    </div>
                    <div class="relative z-10 border-t border-white/10 pt-8 flex justify-between items-end">
                      <div>
                        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 block mb-1">Monto Total</span>
                        <span class="text-4xl font-black text-zinc-100 tracking-tighter">$890.90</span>
                      </div>
                      <p class="text-[9px] text-zinc-600 font-bold uppercase text-right leading-tight">Dólares<br/>Americanos</p>
                    </div>
                    <div class="relative z-10 mt-10 bg-white/5 p-5 rounded-lg border border-white/10 flex gap-4 items-start">
                      <span class="material-symbols-outlined text-secondary fill-1">verified</span>
                      <div class="space-y-1">
                        <p class="text-[11px] font-black uppercase tracking-wider text-zinc-100">Garantía Aviro</p>
                        <p class="text-[10px] text-zinc-500 font-medium leading-relaxed">Cancelación gratuita hasta 24 horas antes de su llegada.</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/5 p-6 border border-white/5 rounded-xl flex items-center justify-around opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <span class="material-symbols-outlined text-2xl">payments</span>
                    <span class="material-symbols-outlined text-2xl">account_balance_wallet</span>
                    <span class="material-symbols-outlined text-2xl">lock</span>
                    <span class="material-symbols-outlined text-2xl">contactless</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

















