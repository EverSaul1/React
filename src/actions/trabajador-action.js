//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/trabajadores/'

export const TRABAJADOR_LIST_REQUEST = "TRABAJADOR_LIST_REQUEST"
export const TRABAJADOR_LIST_SUCCESS = 'TRABAJADOR_LIST_SUCCESS'
export const TRABAJADOR_LIST_FAILURE = 'TRABAJADOR_LIST_FAILURE'

export const trabajadorList = () => ({
    type: TRABAJADOR_LIST_REQUEST,
})

export const trabajadorListSuccess = (list) => ({
    type: TRABAJADOR_LIST_SUCCESS,
    list
})

export const trabajadorListFailure = error => ({
    type: TRABAJADOR_LIST_FAILURE,
    error
})

export const TRABAJADOR_ADD = "TRABAJADOR_ADD"
export const TRABAJADOR_FETCH = "TRABAJADOR_FETCH"
export const TRABAJADOR_UPDATE = "TRABAJADOR_UPDATE"
export const TRABAJADOR_DELETE = "TRABAJADOR_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(trabajadorListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(trabajadorListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(trabajadorListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(trabajadorListFailure('Error '+error.message))
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
                    "type": TRABAJADOR_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/trabajadores/list')
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
                    "type": TRABAJADOR_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/trabajadores/list')
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
                    "type": TRABAJADOR_DELETE,
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