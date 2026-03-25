﻿
export default function Huesped() {
  return (
    <div className="font-display transition-colors duration-300 bg-creme text-primary">
      <div className="layout-container flex h-full grow flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-creme/95 backdrop-blur-md border-b border-primary/10 px-6 lg:px-12 py-4 xl:px-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Aviró Hotel Plaza</span>
            </div>
            <nav className="hidden xl:flex items-center gap-6 xl:ml-10">
              <a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Inicio</a><a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Habitaciones</a><a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Restaurante</a><a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Life</a><a className="text-primary/80 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors" href="#">Corporativos</a></nav>
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
        <main className="flex-grow bg-creme py-12 lg:py-20 px-6" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-6xl mx-auto">
            <div class="mb-16">
              <div class="flex items-center justify-between max-w-2xl mx-auto relative">
                <div class="absolute top-5 left-0 w-full h-px bg-primary/10 z-0"></div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                    <span class="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-primary/60">Pedido</span>
                </div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-secondary/20">
                    2
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-secondary">Huésped</span>
                </div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-creme border-2 border-primary/20 text-primary/30 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-primary/30">Pago</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div class="lg:col-span-8 space-y-8">
                <section class="bg-white/60 border border-primary/5 p-8 rounded-xl shadow-sm">
                  <div class="flex items-center justify-between mb-10">
                    <div class="flex items-center gap-4">
                      <span class="material-symbols-outlined text-secondary text-3xl">person_add</span>
                      <h2 class="text-2xl font-black uppercase tracking-tighter text-primary">Registro de Huéspedes</h2>
                    </div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-muted bg-primary/5 px-3 py-1 rounded">2 Habitaciones Seleccionadas</span>
                  </div>
                  <div class="space-y-6">
                    <div class="border border-primary/10 rounded-xl overflow-hidden bg-white group">
                      <button class="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-all">
                        <div class="flex items-center gap-4">
                          <div class="size-10 rounded bg-primary flex items-center justify-center text-creme">
                            <span class="material-symbols-outlined">stars</span>
                          </div>
                          <div>
                            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Huésped Titular</p>
                            <h3 class="text-lg font-black text-primary uppercase">Datos de Facturación y Contacto</h3>
                          </div>
                        </div>
                        <span class="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">expand_less</span>
                      </button>
                      <div class="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-muted">Nombre Completo</label>
                          <input class="w-full bg-creme/30 border-primary/10 rounded px-4 py-3 text-sm font-bold text-primary placeholder:text-primary/20 focus:ring-secondary focus:border-secondary transition-all" placeholder="Ej. Juan Pérez" type="text" value="Juan Alberto Pérez"/>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-muted">Correo Electrónico</label>
                          <input class="w-full bg-creme/30 border-primary/10 rounded px-4 py-3 text-sm font-bold text-primary placeholder:text-primary/20" placeholder="juan@ejemplo.com" type="email"/>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-muted">Documento de Identidad (DNI/Pasaporte)</label>
                          <input class="w-full bg-creme/30 border-primary/10 rounded px-4 py-3 text-sm font-bold text-primary" type="text"/>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-muted">Teléfono de Contacto</label>
                          <input class="w-full bg-creme/30 border-primary/10 rounded px-4 py-3 text-sm font-bold text-primary" type="tel"/>
                        </div>
                        <div class="md:col-span-2 pt-4 flex items-center gap-3">
                          <input class="size-4 rounded border-primary/20 text-secondary focus:ring-secondary transition-all" id="tax_exempt" type="checkbox"/>
                          <label class="text-xs font-bold text-primary/60 cursor-pointer" for="tax_exempt">Soy extranjero y solicito exoneración del IGV (Debe presentar pasaporte y sello de migración al check-in)</label>
                        </div>
                      </div>
                    </div>
                    <div class="border border-primary/10 rounded-xl overflow-hidden bg-white/40">
                      <button class="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-all">
                        <div class="flex items-center gap-4">
                          <div class="size-9 rounded bg-primary/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined text-lg">person</span>
                          </div>
                          <div>
                            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-muted leading-tight">Huésped 2</p>
                            <h3 class="text-sm font-black text-primary uppercase">Margarita Sánchez</h3>
                          </div>
                        </div>
                        <div class="flex items-center gap-4">
                          <span class="text-[10px] font-black uppercase tracking-widest text-secondary/40">Completado</span>
                          <span class="material-symbols-outlined text-primary/20">expand_more</span>
                        </div>
                      </button>
                    </div>
                    <div class="border border-primary/10 rounded-xl overflow-hidden bg-white/40">
                      <button class="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-all">
                        <div class="flex items-center gap-4">
                          <div class="size-9 rounded bg-primary/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined text-lg">person</span>
                          </div>
                          <div>
                            <p class="text-[9px] font-black uppercase tracking-[0.2em] text-muted leading-tight">Huésped 3</p>
                            <h3 class="text-sm font-black text-primary/40 uppercase">Pendiente de registro</h3>
                          </div>
                        </div>
                        <span class="material-symbols-outlined text-primary/20">expand_more</span>
                      </button>
                    </div>
                    <button class="w-full py-6 border-2 border-dashed border-primary/10 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-secondary/40 hover:bg-secondary/5 transition-all group">
                      <div class="size-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <span class="material-symbols-outlined">add</span>
                      </div>
                      <span class="text-xs font-black uppercase tracking-[0.2em] text-primary/60 group-hover:text-secondary">Agregar Huésped Adicional</span>
                    </button>
                  </div>
                  <div class="mt-12 pt-8 border-t border-primary/10">
                    <div class="flex items-start gap-4 p-5 bg-secondary/5 border border-secondary/10 rounded-lg">
                      <span class="material-symbols-outlined text-secondary">info</span>
                      <div class="space-y-1">
                        <p class="text-[11px] font-black uppercase tracking-wider text-secondary leading-tight">Requerimiento Especial</p>
                        <p class="text-[10px] text-primary/60 font-medium leading-relaxed">¿Tiene alguna solicitud especial? (Alergias, movilidad reducida, check-in anticipado, etc.)</p>
                        <textarea class="mt-3 w-full bg-white border-primary/10 rounded p-3 text-xs font-bold text-primary focus:ring-secondary focus:border-secondary transition-all" placeholder="Escriba aquí sus comentarios..." rows="2"></textarea>
                      </div>
                    </div>
                  </div>
                </section>
                <div class="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                  <button class="flex items-center gap-3 text-primary/60 hover:text-primary text-[11px] font-black uppercase tracking-[0.2em] transition-all">
                    <span class="material-symbols-outlined text-lg">arrow_back</span>
                    Regresar a Pedido
                  </button>
                  <button class="w-full sm:w-auto bg-secondary text-white px-12 py-5 rounded-lg text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-95 transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-4 group">
                    Proceder al Pago
                    <span class="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">payments</span>
                  </button>
                </div>
              </div>
              <div class="lg:col-span-4">
                <div class="sticky top-[100px] space-y-6">
                  <div class="bg-primary text-creme p-8 rounded-xl shadow-2xl relative overflow-hidden">
                    <div class="absolute -right-12 -top-12 size-40 bg-secondary/10 rounded-full blur-3xl"></div>
                    <h3 class="relative z-10 text-xs font-black uppercase tracking-[0.4em] mb-10 border-l-2 border-secondary pl-5">Resumen de Reserva</h3>
                    <div class="relative z-10 space-y-5 mb-10">
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-creme/50 font-medium">Suite Ejecutiva (3 Noches)</span>
                        <span class="font-bold text-lg">$360.00</span>
                      </div>
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-creme/50 font-medium">Hab. Deluxe (3 Noches)</span>
                        <span class="font-bold text-lg">$280.00</span>
                      </div>
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-creme/50 font-medium">Servicios Adicionales</span>
                        <span class="font-bold text-lg">$115.00</span>
                      </div>
                      <div class="flex justify-between items-center text-sm">
                        <span class="text-creme/50 font-medium">Impuestos (18%)</span>
                        <span class="font-bold text-lg">$135.90</span>
                      </div>
                    </div>
                    <div class="relative z-10 border-t border-white/10 pt-8 flex justify-between items-end">
                      <div>
                        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-creme/40 block mb-1">Monto Total</span>
                        <span class="text-4xl font-black text-white tracking-tighter">$890.90</span>
                      </div>
                      <p class="text-[9px] text-creme/40 font-bold uppercase text-right leading-tight">Dólares<br/>Americanos</p>
                    </div>
                    <div class="relative z-10 mt-10 bg-white/5 p-5 rounded-lg border border-white/10 flex gap-4 items-start">
                      <span class="material-symbols-outlined text-secondary fill-1">verified</span>
                      <div class="space-y-1">
                        <p class="text-[11px] font-black uppercase tracking-wider text-white">Garantía Aviro</p>
                        <p class="text-[10px] text-creme/60 font-medium leading-relaxed">Cancelación gratuita hasta 24 horas antes de su llegada.</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-primary/5 p-6 border border-primary/10 rounded-xl flex items-center justify-around opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
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







