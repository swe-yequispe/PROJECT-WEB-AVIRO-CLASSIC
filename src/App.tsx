import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function GlobalNavigationHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if it's a "Reservar ahora" button or link
      if (
        (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) && 
        target.textContent?.toLowerCase().includes('reservar ahora')
      ) {
        e.preventDefault();
        navigate('/habitaciones#habitaciones');
        return;
      }

      // Check if it's "Iniciar sesion" or "Iniciar sesión"
      if (
        (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) && 
        (target.textContent?.toLowerCase().includes('iniciar sesion') || target.textContent?.toLowerCase().includes('iniciar sesión'))
      ) {
        e.preventDefault();
        navigate('/login');
        return;
      }

      // Check if it's "dark_mode" toggle for testing presentation
      if (target.textContent?.trim() === 'dark_mode') {
        e.preventDefault();
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
          navigate('/dark');
        } else if (!currentPath.endsWith('dark')) {
          navigate(`${currentPath === '/' ? '' : currentPath}/dark`);
        }
        return;
      }

      // Check if it's "light_mode" toggle for testing presentation
      if (target.textContent?.trim() === 'light_mode') {
        e.preventDefault();
        const currentPath = window.location.pathname;
        if (currentPath === '/dark') {
          navigate('/');
        } else if (currentPath.endsWith('/dark')) {
          navigate(currentPath.replace(/\/dark$/, ''));
        }
        return;
      }

      // Intercept anchor clicks
      const anchorNode = target.closest('a');
      if (anchorNode) {
        let href = anchorNode.getAttribute('href');
        let text = anchorNode.textContent?.trim().toLowerCase() || '';

        // If it's a precise nav link
        const isDark = window.location.pathname.endsWith('dark') || window.location.pathname === '/dark';

        if (text.includes('inicio')) { 
          e.preventDefault(); 
          navigate(isDark ? '/dark' : '/'); 
          return; 
        }
        if (text.includes('habitaciones')) { 
          e.preventDefault(); 
          navigate(isDark ? '/habitaciones/dark' : '/habitaciones'); 
          return; 
        }
        if (text.includes('restaurante')) { 
          e.preventDefault(); 
          navigate(isDark ? '/restaurante/dark' : '/restaurante'); 
          return; 
        }
        if (text.includes('life')) { 
          e.preventDefault(); 
          navigate(isDark ? '/life/dark' : '/life'); 
          return; 
        }
        if (text.includes('corporativos')) { 
          e.preventDefault(); 
          navigate(isDark ? '/corporativos/dark' : '/corporativos'); 
          return; 
        }

        if (href && href.startsWith('/') && !href.startsWith('//')) {
          e.preventDefault();
          navigate(href);
        } else if (href && href.endsWith('.html')) {
          // If there are any stray .html links
          e.preventDefault();
          const route = href.replace('.html', '').replace('aviro-', '').replace('admin-', 'admin/').replace('venta-', 'venta/');
          navigate(href === 'aviro-home-light.html' || href === 'index.html' ? '/' : '/' + route);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return null;
}

// Layouts

// Aviro Pages
import HomeLight from './pages/aviro/HomeLight';
import HomeDark from './pages/aviro/HomeDark';
import Habitaciones from './pages/aviro/Habitaciones';
import HabitacionesDark from './pages/aviro/HabitacionesDark';
import Restaurante from './pages/aviro/Restaurante';
import RestauranteDark from './pages/aviro/RestauranteDark';
import Life from './pages/aviro/Life';
import LifeDark from './pages/aviro/LifeDark';
import Corporativo from './pages/aviro/Corporativo';
import CorporativoDark from './pages/aviro/CorporativoDark';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Reservas from './pages/admin/Reservas';
import Huespedes from './pages/admin/Huespedes';
import HuespedesVip from './pages/admin/HuespedesVip';
import Calendario from './pages/admin/Calendario';
import Reportes from './pages/admin/Reportes';
import AdminHabitaciones from './pages/admin/AdminHabitaciones';
import Configuracion from './pages/admin/Configuracion';
import Login from './pages/admin/Login';
import LoginDark from './pages/admin/LoginDark';

// Venta Pages
import Pedido from './pages/venta/Pedido';
import PedidoDark from './pages/venta/PedidoDark';
import Huesped from './pages/venta/Huesped';
import HuespedDark from './pages/venta/HuespedDark';
import Pago from './pages/venta/Pago';
import PagoDark from './pages/venta/PagoDark';
import Confirmacion from './pages/venta/Confirmacion';
import ConfirmacionDark from './pages/venta/ConfirmacionDark';

function App() {
  return (
    <BrowserRouter>
      <GlobalNavigationHandler />
      <Routes>
        {/* Aviro Public Routes */}
        <Route path="/" element={<HomeLight />} />
        <Route path="/dark" element={<HomeDark />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/habitaciones/dark" element={<HabitacionesDark />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/restaurante/dark" element={<RestauranteDark />} />
        <Route path="/life" element={<Life />} />
        <Route path="/life/dark" element={<LifeDark />} />
        <Route path="/corporativos" element={<Corporativo />} />
        <Route path="/corporativos/dark" element={<CorporativoDark />} />

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/dark" element={<LoginDark />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/reservas" element={<Reservas />} />
        <Route path="/admin/huespedes" element={<Huespedes />} />
        <Route path="/admin/huespedes-vip" element={<HuespedesVip />} />
        <Route path="/admin/calendario" element={<Calendario />} />
        <Route path="/admin/reportes" element={<Reportes />} />
        <Route path="/admin/habitaciones" element={<AdminHabitaciones />} />
        <Route path="/admin/configuracion" element={<Configuracion />} />

        {/* Venta Routes */}
        <Route path="/venta/pedido" element={<Pedido />} />
        <Route path="/venta/pedido/dark" element={<PedidoDark />} />
        <Route path="/venta/huesped" element={<Huesped />} />
        <Route path="/venta/huesped/dark" element={<HuespedDark />} />
        <Route path="/venta/pago" element={<Pago />} />
        <Route path="/venta/pago/dark" element={<PagoDark />} />
        <Route path="/venta/confirmacion" element={<Confirmacion />} />
        <Route path="/venta/confirmacion/dark" element={<ConfirmacionDark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
