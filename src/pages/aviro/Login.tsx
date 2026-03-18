import AviroLayoutLight from '../../layouts/AviroLayoutLight';

export default function Login() {
  return (
    <AviroLayoutLight>
      <main className="flex-grow flex flex-col lg:flex-row min-h-[calc(100vh-88px)]" dangerouslySetInnerHTML={{ __html: `
        <section class="hidden lg:flex w-1/2 relative bg-primary overflow-hidden items-center justify-center p-24">
          <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            <img alt="Interior de Lujo" class="w-full h-full object-cover blur-sm opacity-50 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQtm0_ebNHxiJidbzguwT8yozEuF-JvV91jYti5zFMs0MHMbOqVq9nXxFzhwfmqzoc6mJivDX0X2wBlBs9Myoqhe8mkMNeNHMutTJMjEik8KInXhRy0xIIGHgjZk_0OtlovhI1t0gHFrL74v1posPU1xArhOT0HXDPswZp7tccsokR0CzOfxokp9cCokBp_VVk2MQ85qApNgdSLfXxfo3ula4RmiCf0kHbZrZ4svDFQ7BP9nGJPZuiHldn01N0BVVriwit0R7Y1BKj"/>
          </div>
          <div class="relative z-10 text-center">
            <div class="inline-flex items-center justify-center size-24 border border-creme/20 rounded-full mb-8 backdrop-blur-md">
              <span class="material-symbols-outlined text-creme text-4xl">admin_panel_settings</span>
            </div>
            <h2 class="text-4xl font-black text-creme tracking-tighter mb-4 xl:text-5xl">Gestión Administrativa</h2>
            <div class="w-12 h-1 bg-secondary mx-auto mb-6"></div>
            <p class="text-creme/60 max-w-sm mx-auto text-sm leading-relaxed uppercase tracking-widest font-bold">
              Acceso exclusivo para personal autorizado. Control total de reservas y operaciones.
            </p>
          </div>
          <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #F2F2D8 1px, transparent 0); background-size: 40px 40px;"></div>
        </section>
        <section class="flex-grow flex items-center justify-center p-8 lg:p-32 bg-creme">
          <div class="w-full max-w-md">
            <div class="mb-12">
              <span class="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block border-l-2 border-secondary pl-3">Portal Interno</span>
              <h1 class="text-3xl lg:text-4xl font-black text-primary tracking-tighter mb-2 xl:text-5xl">Iniciar sesión</h1>
              <p class="text-muted text-sm font-medium">Ingresa tus credenciales para gestionar el sistema.</p>
            </div>
            <form class="space-y-10">
              <div class="space-y-2">
                <label class="text-[10px] font-black text-primary uppercase tracking-[0.2em]" for="email">Correo Electrónico</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors">mail</span>
                  <input class="login-input" id="email" placeholder="ejemplo@hotelaviro.com" type="email"/>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black text-primary uppercase tracking-[0.2em]" for="password">Contraseña</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors">lock</span>
                  <input class="login-input" id="password" placeholder="••••••••" type="password"/>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input class="rounded border-primary/20 text-secondary focus:ring-secondary/20 size-4" type="checkbox"/>
                  <span class="text-xs font-bold text-primary/60 uppercase tracking-wider">Recordarme</span>
                </label>
                <a class="text-xs font-black text-muted hover:text-secondary transition-colors uppercase tracking-wider" href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <div class="pt-4">
                <button class="w-full bg-primary hover:bg-primary/95 text-creme py-5 rounded text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-3">
                  <span>Entrar al panel</span>
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </form>
            <div class="mt-16 pt-8 border-t border-primary/5 flex items-center gap-4">
              <span class="material-symbols-outlined text-secondary">verified_user</span>
              <p class="text-[10px] font-bold text-muted uppercase tracking-widest leading-normal">
                Esta es una conexión segura y cifrada. Todas las acciones realizadas serán registradas en el log de auditoría.
              </p>
            </div>
          </div>
        </section>
      `}} />
    </AviroLayoutLight>
  );
}

