import { USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAILURE } from '../actions/user-action'
import { USER_ADD, USER_FETCH, USER_UPDATE, USER_DELETE } from '../actions/user-action'

const initialState = {
    list: [],
    data: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case USER_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case USER_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case USER_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case USER_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case USER_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case USER_FETCH: {
            //console.log('userReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case USER_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default userReducer
