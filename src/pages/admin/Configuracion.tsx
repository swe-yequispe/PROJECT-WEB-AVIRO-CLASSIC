﻿
export default function Configuracion() {
  return (
    <div className="font-display bg-creme text-primary min-h-screen flex overflow-hidden">
      <aside className="fixed inset-y-0 left-0 w-72 bg-primary text-creme flex flex-col z-50">
        <div className="p-8 border-b border-white/5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Aviró Hotel Plaza</span>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mt-4">Panel de Control</p>
        </div>
        <nav className="flex-grow py-6 overflow-y-auto">
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">dashboard</span> Dashboard
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">calendar_month</span> Reservas
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">group</span> Huéspedes
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">date_range</span> Calendario
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">analytics</span> Reportes
          </a>
          <a className="sidebar-link" href="#">
            <span className="material-symbols-outlined text-xl">hotel</span> Habitaciones
          </a>
          <a className="sidebar-link active" href="#">
            <span className="material-symbols-outlined text-xl">settings</span> Configuración
          </a>
        </nav>
        <div className="p-6 border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded bg-secondary flex items-center justify-center font-black text-creme">JD</div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider">Juan Delgado</p>
              <p className="text-[10px] text-creme/50 uppercase font-bold">Administrador</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-sm">logout</span> Cerrar Sesión
          </button>
        </div>
      </aside>
      <main className="ml-72 flex-grow flex flex-col min-h-screen overflow-hidden bg-white/20" dangerouslySetInnerHTML={{ __html: `
        <header class="bg-creme/95 backdrop-blur-md border-b border-primary/5 px-10 py-6 flex items-center justify-between xl:max-w-[1440px] xl:mx-auto w-full">
          <div class="flex items-center gap-8">
            <div>
              <h1 class="text-2xl font-black text-primary tracking-tighter uppercase">Configuración Avanzada</h1>
              <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Panel de Control de Sistemas ñ?ñ Modo Experto</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-lg">search</span>
              <input class="bg-white border border-primary/10 pl-10 pr-4 py-2.5 text-[10px] font-black uppercase tracking-widest focus:ring-secondary focus:border-secondary w-80" placeholder="BUSCAR AJUSTE..." type="text"/>
            </div>
            <button class="bg-primary text-creme px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">history</span> Historial de Cambios
            </button>
          </div>
        </header>
        <div class="flex flex-grow overflow-hidden xl:max-w-[1440px] xl:mx-auto w-full">
          <aside class="w-72 border-r border-primary/5 bg-white/50 overflow-y-auto p-4">
            <div class="space-y-1">
              <div class="tree-category">
                <span class="material-symbols-outlined text-sm">computer</span>
                Sistema
              </div>
              <div class="ml-4 space-y-1 border-l border-primary/10">
                <div class="tree-item active">General</div>
                <div class="tree-item">Seguridad</div>
                <div class="tree-item">Notificaciones</div>
                <div class="tree-item">Integraciones</div>
              </div>
              <div class="tree-category">
                <span class="material-symbols-outlined text-sm">bed</span>
                Habitaciones
              </div>
              <div class="ml-4 space-y-1 border-l border-primary/10">
                <div class="tree-item">Tipos &amp; Categorías</div>
                <div class="tree-item">Precios Dinámicos</div>
                <div class="tree-item">Amenities</div>
                <div class="tree-item">Reglas de Limpieza</div>
              </div>
              <div class="tree-category">
                <span class="material-symbols-outlined text-sm">payments</span>
                Finanzas
              </div>
              <div class="ml-4 space-y-1 border-l border-primary/10">
                <div class="tree-item">Impuestos &amp; Tasas</div>
                <div class="tree-item">Métodos de Pago</div>
                <div class="tree-item">Divisas</div>
              </div>
              <div class="tree-category">
                <span class="material-symbols-outlined text-sm">badge</span>
                Usuarios
              </div>
              <div class="ml-4 space-y-1 border-l border-primary/10">
                <div class="tree-item">Roles &amp; Permisos</div>
                <div class="tree-item">Auditoría</div>
              </div>
            </div>
          </aside>
          <div class="flex-grow overflow-y-auto bg-white/20 p-8">
            <div class="max-w-4xl mx-auto space-y-8">
              <div>
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <span class="material-symbols-outlined text-lg">info</span>
                    Sistema &gt; General
                  </h2>
                  <button class="text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:underline">Restablecer por defecto</button>
                </div>
                <div class="bg-white border border-primary/10 shadow-sm">
                  <div class="settings-row group">
                    <div class="max-w-md">
                      <h4 class="text-[11px] font-black uppercase tracking-widest text-primary">Idioma del Sistema</h4>
                      <p class="text-[10px] text-muted font-medium mt-0.5">Define el lenguaje principal de la interfaz administrativa.</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <select class="bg-creme border-none text-[10px] font-bold uppercase py-1.5 focus:ring-0 w-40">
                        <option selected="">Español (ES)</option>
                        <option>English (US)</option>
                        <option>Português (BR)</option>
                      </select>
                      <button class="btn-save-sm">Guardar</button>
                    </div>
                  </div>
                  <div class="settings-row group">
                    <div class="max-w-md">
                      <h4 class="text-[11px] font-black uppercase tracking-widest text-primary">Modo Mantenimiento</h4>
                      <p class="text-[10px] text-muted font-medium mt-0.5">Desactiva el motor de reservas para actualizaciones.</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <button class="toggle-switch bg-primary/10" role="switch" type="button">
                        <span class="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white transition-transform"></span>
                      </button>
                      <button class="btn-save-sm">Guardar</button>
                    </div>
                  </div>
                  <div class="settings-row group">
                    <div class="max-w-md">
                      <h4 class="text-[11px] font-black uppercase tracking-widest text-primary">Zona Horaria</h4>
                      <p class="text-[10px] text-muted font-medium mt-0.5">Utilizado para registros de entrada y salida.</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <input class="bg-creme border-none text-[10px] font-bold uppercase py-1.5 focus:ring-0 w-48" type="text" value="GMT-5 (Lima/Bogotá)"/>
                      <button class="btn-save-sm">Guardar</button>
                    </div>
                  </div>
                  <div class="settings-row group">
                    <div class="max-w-md">
                      <h4 class="text-[11px] font-black uppercase tracking-widest text-primary">Cierre de Sesión Automático</h4>
                      <p class="text-[10px] text-muted font-medium mt-0.5">Tiempo de inactividad antes de expirar la sesión (min).</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <input class="bg-creme border-none text-[10px] font-bold uppercase py-1.5 focus:ring-0 w-20 text-center" type="number" value="30"/>
                      <button class="btn-save-sm">Guardar</button>
                    </div>
                  </div>
                  <div class="settings-row group">
                    <div class="max-w-md">
                      <h4 class="text-[11px] font-black uppercase tracking-widest text-primary">Modo Debug (Logs)</h4>
                      <p class="text-[10px] text-muted font-medium mt-0.5">Registra errores detallados del sistema.</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <button class="toggle-switch bg-secondary" role="switch" type="button">
                        <span class="translate-x-5 inline-block h-3 w-3 transform rounded-full bg-white transition-transform"></span>
                      </button>
                      <button class="btn-save-sm">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <span class="material-symbols-outlined text-lg">security</span>
                    Parámetros de Seguridad
                  </h2>
                </div>
                <div class="bg-white border border-primary/10 shadow-sm">
                  <div class="settings-row group">
                    <div class="max-w-md">
                      <h4 class="text-[11px] font-black uppercase tracking-widest text-primary">Complejidad de Contraseña</h4>
                      <p class="text-[10px] text-muted font-medium mt-0.5">Exigir caracteres especiales y mayúsculas.</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <button class="toggle-switch bg-secondary" role="switch" type="button">
                        <span class="translate-x-5 inline-block h-3 w-3 transform rounded-full bg-white transition-transform"></span>
                      </button>
                      <button class="btn-save-sm">Guardar</button>
                    </div>
                  </div>
                  <div class="settings-row group">
                    <div class="max-w-md">
                      <h4 class="text-[11px] font-black uppercase tracking-widest text-primary">Restricción de IP Administrativa</h4>
                      <p class="text-[10px] text-muted font-medium mt-0.5">Permitir acceso solo desde rangos IP autorizados.</p>
                    </div>
                    <div class="flex items-center gap-4">
                      <input class="bg-creme border-none text-[10px] font-bold py-1.5 focus:ring-0 w-64" placeholder="192.168.1.1, 10.0.0.*" type="text"/>
                      <button class="btn-save-sm">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="px-10 py-4 border-t border-primary/5 flex justify-between items-center bg-white z-10 xl:max-w-[1440px] xl:mx-auto w-full">
          <p class="text-[10px] font-bold text-muted uppercase tracking-widest">© 2024 Hotel Aviro Intelligence System</p>
          <div class="flex gap-6 text-[10px] font-bold text-muted uppercase tracking-widest">
            <a class="hover:text-primary transition-colors" href="#">Ayuda</a>
            <a class="hover:text-primary transition-colors" href="#">Términos</a>
            <a class="hover:text-primary transition-colors" href="#">Soporte Técnico</a>
          </div>
        </footer>
      `}} />
    </div>
  );
}






