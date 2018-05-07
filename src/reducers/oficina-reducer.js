import { OFICINA_LIST_REQUEST, OFICINA_LIST_SUCCESS, OFICINA_LIST_FAILURE } from '../actions/oficina-action'
import { OFICINA_ADD, OFICINA_FETCH, OFICINA_UPDATE, OFICINA_DELETE } from '../actions/oficina-action'

const initialState = {
    list: [],
    data: {}
}

const oficinaReducer = (state = initialState, action) => {
    switch (action.type) {

        case OFICINA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case OFICINA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case OFICINA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case OFICINA_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case OFICINA_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case OFICINA_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case OFICINA_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default oficinaReducer
