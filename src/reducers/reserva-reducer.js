import { RESERVA_LIST_REQUEST, RESERVA_LIST_SUCCESS, RESERVA_LIST_FAILURE } from '../actions/reserva-action'
import { RESERVA_ADD, RESERVA_FETCH, RESERVA_UPDATE, RESERVA_DELETE } from '../actions/reserva-action'

const initialState = {
    list: [],
    data: {}
}

const reservaReducer = (state = initialState, action) => {
    switch (action.type) {

        case RESERVA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case RESERVA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case RESERVA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case RESERVA_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case RESERVA_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case RESERVA_FETCH: {
            //console.log('clienteReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case RESERVA_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default reservaReducer
