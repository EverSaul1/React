import { PERSONA_LIST_REQUEST, PERSONA_LIST_SUCCESS, PERSONA_LIST_FAILURE } from '../actions/persona-action'
import { PERSONA_ADD, PERSONA_FETCH, PERSONA_UPDATE, PERSONA_DELETE } from '../actions/persona-action'

const initialState = {
    list: [],
    data: {}
}

const personaReducer = (state = initialState, action) => {
    switch (action.type) {

        case PERSONA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case PERSONA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case PERSONA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case PERSONA_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case PERSONA_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case PERSONA_FETCH: {
            //console.log('userReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case PERSONA_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default personaReducer
