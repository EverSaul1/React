import { TIPOTRABAJADOR_LIST_REQUEST, TIPOTRABAJADOR_LIST_SUCCESS, TIPOTRABAJADOR_LIST_FAILURE } from '../actions/tipoTrabajador-action'
import { TIPOTRABAJADOR_ADD, TIPOTRABAJADOR_FETCH, TIPOTRABAJADOR_UPDATE, TIPOTRABAJADOR_DELETE } from '../actions/tipoTrabajador-action'

const initialState = {
    list: [],
    data: {}
}

const tipoTrabajadorReducer = (state = initialState, action) => {
    switch (action.type) {

        case TIPOTRABAJADOR_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case TIPOTRABAJADOR_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case TIPOTRABAJADOR_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case TIPOTRABAJADOR_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case TIPOTRABAJADOR_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case TIPOTRABAJADOR_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case TIPOTRABAJADOR_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default tipoTrabajadorReducer
