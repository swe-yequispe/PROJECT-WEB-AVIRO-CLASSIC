
export default function PagoDark() {
  return (
    <div className="font-display transition-colors duration-300 bg-zinc-900 text-primary">
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
        <main className="flex-grow bg-zinc-900 py-12 lg:py-20 px-6" dangerouslySetInnerHTML={{ __html: `
          <div class="max-w-6xl mx-auto">
            <div class="mb-16">
              <div class="flex items-center justify-between max-w-2xl mx-auto relative">
                <div class="absolute top-5 left-0 w-full h-px bg-white/10 z-0"></div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                    <span class="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Pedido</span>
                </div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                    <span class="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Huésped</span>
                </div>
                <div class="relative z-10 flex flex-col items-center gap-3">
                  <div class="size-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-secondary/20">
                    3
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-secondary">Pago</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div class="lg:col-span-8 space-y-8">
                <section class="bg-black/60 border border-white/5 p-8 rounded-xl shadow-sm">
                  <div class="flex items-center justify-between mb-10">
                    <div class="flex items-center gap-4">
                      <span class="material-symbols-outlined text-secondary text-3xl">account_balance_wallet</span>
                      <h2 class="text-2xl font-black uppercase tracking-tighter text-primary">Método de Pago</h2>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <button class="payment-card-selected group flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all hover:border-secondary/50">
                      <div class="size-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">credit_card</span>
                      </div>
                      <span class="text-xs font-black uppercase tracking-[0.2em] text-primary">Tarjeta de Crédito</span>
                      <p class="text-[10px] text-primary/40 mt-1 font-bold">Visa, Mastercard, Amex</p>
                    </button>
                    <button class="bg-black/40 group flex flex-col items-center justify-center p-8 rounded-xl border-2 border-transparent transition-all hover:bg-black hover:border-white/5">
                      <div class="size-16 rounded-full bg-white/5 flex items-center justify-center text-primary/40 mb-4 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">account_balance</span>
                      </div>
                      <span class="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">PayPal</span>
                      <p class="text-[10px] text-primary/40 mt-1 font-bold">Transferencia Rápida</p>
                    </button>
                  </div>
                  <div class="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div class="bg-black p-8 rounded-xl border border-white/5">
                      <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-8">Detalles de la Tarjeta</h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="md:col-span-2 space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Nombre en la Tarjeta</label>
                          <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-zinc-100 placeholder:text-primary/20" placeholder="Como figura en el plástico" type="text"/>
                        </div>
                        <div class="md:col-span-2 space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Número de Tarjeta</label>
                          <div class="relative">
                            <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-zinc-100 tracking-widest" placeholder="0000 0000 0000 0000" type="text"/>
                            <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                              <span class="material-symbols-outlined text-primary/20">credit_card</span>
                            </div>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">Fecha de Expiración</label>
                          <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-primary" placeholder="MM/YY" type="text"/>
                        </div>
                        <div class="space-y-2">
                          <label class="text-[10px] font-black uppercase tracking-widest text-zinc-500">CVV / CVC</label>
                          <input class="w-full bg-zinc-900/30 border-white/5 rounded px-4 py-3 text-sm font-bold text-primary" placeholder="123" type="password"/>
                        </div>
                      </div>
                      <div class="mt-8 p-4 bg-white/5 rounded border border-white/5 flex items-center gap-4">
                        <span class="material-symbols-outlined text-primary/40">lock</span>
                        <p class="text-[10px] font-medium text-zinc-500">Sus datos de pago se procesan de forma segura mediante encriptación SSL de 256 bits. Nosotros no almacenamos los datos de su tarjeta.</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-8 pt-8 border-t border-white/5">
                    <div class="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-4">
                      <span>Recordatorio de Reserva</span>
                      <a class="text-secondary hover:underline" href="#">Editar</a>
                    </div>
                    <div class="flex items-center gap-3 p-4 bg-zinc-900/30 rounded border border-white/5">
                      <span class="material-symbols-outlined text-primary/40 text-lg">calendar_today</span>
                      <p class="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">Registro para 2 Habitaciones · 3 Huéspedes · Check-in 15:00</p>
                    </div>
                  </div>
                </section>
                <div class="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4">
                  <button class="flex items-center gap-3 text-zinc-500 hover:text-zinc-100 text-[11px] font-black uppercase tracking-[0.2em] transition-all">
                    <span class="material-symbols-outlined text-lg">arrow_back</span>
                    Regresar a Huéspedes
                  </button>
                  <button class="w-full sm:w-auto bg-zinc-900 text-zinc-100 px-12 py-5 rounded-lg text-[11px] font-black uppercase tracking-[0.2em] hover:opacity-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 group">
                    Confirmar Pago y Reservar
                    <span class="material-symbols-outlined text-lg transition-transform group-hover:scale-110">verified_user</span>
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
                        <span class="text-4xl font-black text-white tracking-tighter">$890.90</span>
                      </div>
                      <p class="text-[9px] text-zinc-600 font-bold uppercase text-right leading-tight">Dólares<br/>Americanos</p>
                    </div>
                    <div class="relative z-10 mt-10 bg-white/5 p-5 rounded-lg border border-white/10 flex gap-4 items-start">
                      <span class="material-symbols-outlined text-secondary fill-1">verified</span>
                      <div class="space-y-1">
                        <p class="text-[11px] font-black uppercase tracking-wider text-white">Garantía Aviro</p>
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

