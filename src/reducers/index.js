import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import oficina from './oficina-reducer'
import tipoTrabajador from './tipoTrabajador-reducer'
import trabajador from './trabajador-reducer'
import alquiler from './alquiler-reducer'
import cliente from './cliente-reducer'
import detalleAlquiler from './detalleAlquiler-reducer'
import user from './user-reducer'
import persona from './persona-reducer'
import reserva from './reserva-reducer'
import comprobante from './comprobante-reducer'

//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  oficina: oficina,
  alquiler: alquiler,
  tipoTrabajador: tipoTrabajador,
  trabajador: trabajador,
  cliente: cliente,
  detalleAlquiler: detalleAlquiler,
  reserva: reserva,
  comprobante: comprobante,
  user: user,
  persona: persona,
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;