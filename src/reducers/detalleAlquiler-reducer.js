import { DETALLEALQUILER_LIST_REQUEST, DETALLEALQUILER_LIST_SUCCESS, DETALLEALQUILER_LIST_FAILURE } from '../actions/detalleAlquiler-action'
import { DETALLEALQUILER_ADD, DETALLEALQUILER_FETCH, DETALLEALQUILER_UPDATE, DETALLEALQUILER_DELETE } from '../actions/detalleAlquiler-action'

const initialState = {
    list: [],
    data: {}
}

const detalleAlquilerReducer = (state = initialState, action) => {
    switch (action.type) {

        case DETALLEALQUILER_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case DETALLEALQUILER_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case DETALLEALQUILER_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case DETALLEALQUILER_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLEALQUILER_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLEALQUILER_FETCH: {
            //console.log('detalleAlquilerReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case DETALLEALQUILER_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default detalleAlquilerReducer
