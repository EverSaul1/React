//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-core/personas/'

export const PERSONA_LIST_REQUEST = "PERSONA_LIST_REQUEST"
export const PERSONA_LIST_SUCCESS = 'PERSONA_LIST_SUCCESS'
export const PERSONA_LIST_FAILURE = 'PERSONA_LIST_FAILURE'

export const personaList = () => ({
    type: PERSONA_LIST_REQUEST,
})

export const personaListSuccess = (list) => ({
    type: PERSONA_LIST_SUCCESS,
    list
})

export const personaListFailure = error => ({
    type: PERSONA_LIST_FAILURE,
    error
})

export const PERSONA_ADD = "PERSONA_ADD"
export const PERSONA_FETCH = "PERSONA_FETCH"
export const PERSONA_UPDATE = "PERSONA_UPDATE"
export const PERSONA_DELETE = "PERSONA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(personaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(personaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(personaListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(personaListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": PERSONA_ADD,
                    "data": r.data //no usado
                })
                history.push('/core/personas/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": CATEGORIA_FETCH,
                    "data": r.data 
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": PERSONA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/core/personas/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": PERSONA_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/categorias')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}