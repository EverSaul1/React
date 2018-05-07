import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './catalogo/categorias/List'
import CategoriaForm from './catalogo/categorias/Form'
import OficinaList from './catalogo/oficinas/List'
import OficinaForm from './catalogo/oficinas/Form'
import TipoTrabajadorList from './catalogo/tipoTrabajadores/List'
import TipoTrabajadorForm from './catalogo/tipoTrabajadores/Form'
import TrabajadorList from './catalogo/trabajadores/List'
import TrabajadorForm from './catalogo/trabajadores/Form'
import AlquilerList from './catalogo/alquileres/List'
import AlquilerForm from './catalogo/alquileres/Form'
import ClienteList from './catalogo/clientes/List'
import ClienteForm from './catalogo/clientes/Form'
import DetalleAlquilerList from './catalogo/detalleAlquileres/List'
import DetalleAlquilerForm from './catalogo/detalleAlquileres/Form'
import UserList from './core/user/List'
import UserForm from './core/user/Form'
import PersonaList from './core/persona/List'
import PersonaForm from './core/persona/Form'
import ReservaList from './catalogo/reservas/List'
import ReservaForm from './catalogo/reservas/Form'
import ComprobanteList from './catalogo/comprobantes/List'
import ComprobanteForm from './catalogo/comprobantes/Form'



import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {   
    path: '/home',
    title: 'Home',
    icon: 'home',
    exact: true,
    component: Home
  },



 
  {
    path: '/catalogo',
    title: 'Catalogo',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias',
        icon: 'copyrightmark',
        component: CategoriaList
      },
      {
        path: '/catalogo/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/oficinas/list',
        exact: true,
        title: 'Oficinas',
        icon: 'book',
        component: OficinaList
      },
      {
        path: '/catalogo/oficinas/new',
        exact: true,
        title: 'Oficina New!',
        icon: 'send',
        component: OficinaForm,
        novisible: true
      },
      {
        path: '/catalogo/oficinas/edit/:id',
        exact: true,
        title: 'Oficina Edit!',
        icon: 'send',
        component: OficinaForm,
        novisible: true
      },
      {
        path: '/catalogo/tipoTrabajadores/list',
        exact: true,
        title: 'Tipo Empleado',
        icon: 'lock',
        component: TipoTrabajadorList
      },
      {
        path: '/catalogo/tipoTrabajadores/new',
        exact: true,
        title: 'Agregar Tipo de Empleados',
        icon: 'send',
        component: TipoTrabajadorForm,
        novisible: true
      },
      {
        path: '/catalogo/tipoTrabajadores/edit/:id',
        exact: true,
        title: 'Tipo Empleado Edit!',
        icon: 'send',
        component: TipoTrabajadorForm,
        novisible: true
      },
      {
        path: '/catalogo/trabajadores/list',
        exact: true,
        title: 'Trabajador',
        icon: 'mail',
        component: TrabajadorList
      },
      {
        path: '/catalogo/trabajadores/new',
        exact: true,
        title: 'Trabajador New!',
        icon: 'send',
        component: TrabajadorForm,
        novisible: true
      },
      {
        path: '/catalogo/trabajadores/edit/:id',
        exact: true,
        title: 'Trabajador Edit!',
        icon: 'send',
        component: TrabajadorForm,
        novisible: true
      },

      {
        path: '/catalogo/alquileres/list',
        exact: true,
        title: 'Alquiler',
        icon: 'drafts',
        component: AlquilerList
      },
      {
        path: '/catalogo/alquileres/new',
        exact: true,
        title: 'Alquiler New!',
        icon: 'send',
        component: AlquilerForm,
        novisible: true
      },
      {
        path: '/catalogo/alquileres/edit/:id',
        exact: true,
        title: 'Alquiler Edit!',
        icon: 'send',
        component: AlquilerForm,
        novisible: true
      },

       {
        path: '/catalogo/clientes/list',
        exact: true,
        title: 'Cliente',
        icon: 'personadd ',
        component: ClienteList
      },
      {
        path: '/catalogo/clientes/new',
        exact: true,
        title: 'Cliente New!',
        icon: 'send',
        component: ClienteForm,
        novisible: true
      },
      {
        path: '/catalogo/clientes/edit/:id',
        exact: true,
        title: 'Cliente Edit!',
        icon: 'send',
        component: ClienteForm,
        novisible: true
      },

       {
        path: '/catalogo/detalleAlquileres/list',
        exact: true,
        title: 'DetalleAlquiler',
        icon: 'settings',
        component: DetalleAlquilerList
      },
      {
        path: '/catalogo/detalleAlquileres/new',
        exact: true,
        title: 'DetalleAlquiler New!',
        icon: 'send',
        component: DetalleAlquilerForm,
        novisible: true
      },
      {
        path: '/catalogo/detalleAlquileres/edit/:id',
        exact: true,
        title: 'DetalleAlquiler Edit!',
        icon: 'send',
        component: DetalleAlquilerForm,
        novisible: true
      },
      {
        path: '/catalogo/reservas/list',
        exact: true,
        title: 'Reservas',
        icon: 'settings',
        component: ReservaList
      },
      {
        path: '/catalogo/reservas/new',
        exact: true,
        title: 'Reservas New!',
        icon: 'send',
        component: ReservaForm,
        novisible: true
      },
      {
        path: '/catalogo/reservas/edit/:id',
        exact: true,
        title: 'Reservas Edit!',
        icon: 'send',
        component: ReservaForm,
        novisible: true
      },
      {
        path: '/catalogo/comprobantes/list',
        exact: true,
        title: 'Comprobante',
        icon: 'settings',
        component: ComprobanteList
      },
      {
        path: '/catalogo/comprobantes/new',
        exact: true,
        title: 'Comprobante New!',
        icon: 'send',
        component: ComprobanteForm,
        novisible: true
      },
      {
        path: '/catalogo/comprobantes/edit/:id',
        exact: true,
        title: 'Comprobante Edit!',
        icon: 'send',
        component: ComprobanteForm,
        novisible: true
      },
     
    ]


    
  },
  {
    path: '/core',
    title: 'Core',
    icon: 'list',
    component: Content,
    routes: [
       

       {
        path: '/core/users/list',
        exact: true,
        title: 'users',
        icon: 'send',
        component: UserList
      },
      {
        path: '/core/users/new',
        exact: true,
        title: 'User New!',
        icon: 'send',
        component: UserForm,
        novisible: true
      },
      {
        path: '/core/users/edit/:id',
        exact: true,
        title: 'User Edit!',
        icon: 'send',
        component: UserForm,
        novisible: true
      }, 
      {
        path: '/core/personas/list',
        exact: true,
        title: 'personas',
        icon: 'send',
        component: PersonaList
      },
      {
        path: '/core/personas/new',
        exact: true,
        title: 'Persona New!',
        icon: 'send',
        component: PersonaForm,
        novisible: true
      },
      {
        path: '/core/personas/edit/:id',
        exact: true,
        title: 'Perona Edit!',
        icon: 'send',
        component: PersonaForm,
        novisible: true
      },

      

      ]
      
    }
  ] 




export { routes, routese }