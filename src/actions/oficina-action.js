//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/oficinas/'

export const OFICINA_LIST_REQUEST = "OFICINA_LIST_REQUEST"
export const OFICINA_LIST_SUCCESS = 'OFICINA_LIST_SUCCESS'
export const OFICINA_LIST_FAILURE = 'OFICINA_LIST_FAILURE'

export const oficinaList = () => ({
    type: OFICINA_LIST_REQUEST,
})

export const oficinaListSuccess = (list) => ({
    type: OFICINA_LIST_SUCCESS,
    list
})

export const oficinaListFailure = error => ({
    type: OFICINA_LIST_FAILURE,
    error
})

export const OFICINA_ADD = "OFICINA_ADD"
export const OFICINA_FETCH = "OFICINA_FETCH"
export const OFICINA_UPDATE = "OFICINA_UPDATE"
export const OFICINA_DELETE = "OFICINA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(oficinaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(oficinaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(oficinaListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(oficinaListFailure('Error '+error.message))
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
                    "type": OFICINA_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/oficinas/list')
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
                    "type": OFICINA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/oficinas/list')
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
                    "type": OFICINA_DELETE,
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