import { TRABAJADOR_LIST_REQUEST, TRABAJADOR_LIST_SUCCESS, TRABAJADOR_LIST_FAILURE } from '../actions/trabajador-action'
import { TRABAJADOR_ADD, TRABAJADOR_FETCH, TRABAJADOR_UPDATE, TRABAJADOR_DELETE } from '../actions/trabajador-action'

const initialState = {
    list: [],
    data: {}
}

const trabajadorReducer = (state = initialState, action) => {
    switch (action.type) {

        case TRABAJADOR_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case TRABAJADOR_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case TRABAJADOR_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case TRABAJADOR_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case TRABAJADOR_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case TRABAJADOR_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case TRABAJADOR_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default trabajadorReducer
