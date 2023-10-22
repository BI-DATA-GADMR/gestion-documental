// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'PAC',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Documentación',
    path: '/dashboard/products',
    icon: icon('docs'),
  },

  {
    title: 'Cerrar sesión',
    path: '/login',
    icon: icon('logout'),
  },

];

export default navConfig;
