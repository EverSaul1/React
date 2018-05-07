import { COMPROBANTE_LIST_REQUEST, COMPROBANTE_LIST_SUCCESS, COMPROBANTE_LIST_FAILURE } from '../actions/comprobante-action'
import { COMPROBANTE_ADD, COMPROBANTE_FETCH, COMPROBANTE_UPDATE, COMPROBANTE_DELETE } from '../actions/comprobante-action'

const initialState = {
    list: [],
    data: {}
}

const comprobanteReducer = (state = initialState, action) => {
    switch (action.type) {

        case COMPROBANTE_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case COMPROBANTE_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case COMPROBANTE_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case COMPROBANTE_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case COMPROBANTE_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case COMPROBANTE_FETCH: {
            //console.log('clienteReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case COMPROBANTE_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default comprobanteReducer
