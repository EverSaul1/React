import { ALQUILER_LIST_REQUEST, ALQUILER_LIST_SUCCESS, ALQUILER_LIST_FAILURE } from '../actions/alquiler-action'
import { ALQUILER_ADD, ALQUILER_FETCH, ALQUILER_UPDATE, ALQUILER_DELETE } from '../actions/alquiler-action'

const initialState = {
    list: [],
    data: {}
}

const alquilerReducer = (state = initialState, action) => {
    switch (action.type) {

        case ALQUILER_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case ALQUILER_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case ALQUILER_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case ALQUILER_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case ALQUILER_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case ALQUILER_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case ALQUILER_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default alquilerReducer
