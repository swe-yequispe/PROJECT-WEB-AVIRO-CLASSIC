﻿
export default function LoginDark() {
  return (
    <div className="font-display bg-zinc-900 text-primary transition-colors duration-300 min-h-screen flex flex-col">
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

      <main className="flex-grow flex flex-col lg:flex-row min-h-[calc(100vh-88px)]" dangerouslySetInnerHTML={{ __html: `
        <section class="hidden lg:flex w-1/2 relative bg-zinc-900 overflow-hidden items-center justify-center p-24">
          <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            <img alt="Interior de Lujo" class="w-full h-full object-cover blur-sm opacity-50 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
          </div>
          <div class="relative z-10 text-center">
            <div class="inline-flex items-center justify-center size-24 border border-creme/20 rounded-full mb-8 backdrop-blur-md">
              <span class="material-symbols-outlined text-zinc-100 text-4xl">admin_panel_settings</span>
            </div>
            <h2 class="text-4xl font-black text-zinc-100 tracking-tighter mb-4 xl:text-5xl">Gestión Administrativa</h2>
            <div class="w-12 h-1 bg-secondary mx-auto mb-6"></div>
            <p class="text-zinc-500 max-w-sm mx-auto text-sm leading-relaxed uppercase tracking-widest font-bold">
              Acceso exclusivo para personal autorizado. Control total de reservas y operaciones.
            </p>
          </div>
          <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #F2F2D8 1px, transparent 0); background-size: 40px 40px;"></div>
        </section>
        <section class="flex-grow flex items-center justify-center p-8 lg:p-32 bg-zinc-900">
          <div class="w-full max-w-md">
            <div class="mb-12">
              <span class="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block border-l-2 border-secondary pl-3">Portal Interno</span>
              <h1 class="text-3xl lg:text-4xl font-black text-zinc-100 tracking-tighter mb-2 xl:text-5xl">Iniciar sesión</h1>
              <p class="text-zinc-500 text-sm font-medium">Ingresa tus credenciales para gestionar el sistema.</p>
            </div>
            <form class="space-y-10">
              <div class="space-y-2">
                <label class="text-[10px] font-black text-zinc-100 uppercase tracking-[0.2em]" for="email">Correo Electrónico</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors">mail</span>
                  <input class="login-input" id="email" placeholder="ejemplo@hotelaviro.com" type="email"/>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black text-zinc-100 uppercase tracking-[0.2em]" for="password">Contraseña</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors">lock</span>
                  <input class="login-input" id="password" placeholder="ñ?ññ?ññ?ññ?ññ?ññ?ññ?ññ?ñ" type="password"/>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input class="rounded border-white/10 text-secondary focus:ring-secondary/20 size-4" type="checkbox"/>
                  <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Recordarme</span>
                </label>
                <a class="text-xs font-black text-zinc-500 hover:text-secondary transition-colors uppercase tracking-wider" href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <div class="pt-4">
                <button class="w-full bg-zinc-900 hover:bg-primary/95 text-zinc-100 py-5 rounded text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-3">
                  <span>Entrar al panel</span>
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </form>
            <div class="mt-16 pt-8 border-t border-white/5 flex items-center gap-4">
              <span class="material-symbols-outlined text-secondary">verified_user</span>
              <p class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-normal">
                Esta es una conexión segura y cifrada. Todas las acciones realizadas serán registradas en el log de auditoría.
              </p>
            </div>
          </div>
        </section>
      `}} />

      <footer className="text-zinc-100 pt-32 pb-12 px-6 lg:px-20 border-t border-white/5" dangerouslySetInnerHTML={{ __html: `
        <div class="max-w-[1440px] mx-auto">
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
  );
}

















