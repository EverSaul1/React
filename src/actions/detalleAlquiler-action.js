//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/detalleAlquileres/'

export const DETALLEALQUILER_LIST_REQUEST = "DETALLEALQUILER_LIST_REQUEST"
export const DETALLEALQUILER_LIST_SUCCESS = 'DETALLEALQUILER_LIST_SUCCESS'
export const DETALLEALQUILER_LIST_FAILURE = 'DETALLEALQUILER_LIST_FAILURE'

export const detalleAlquilerList = () => ({
    type: DETALLEALQUILER_LIST_REQUEST,
})

export const detalleAlquilerListSuccess = (list) => ({
    type: DETALLEALQUILER_LIST_SUCCESS,
    list
})

export const detalleAlquilerListFailure = error => ({
    type: DETALLEALQUILER_LIST_FAILURE,
    error
})

export const DETALLEALQUILER_ADD = "DETALLEALQUILER_ADD"
export const DETALLEALQUILER_FETCH = "DETALLEALQUILER_FETCH"
export const DETALLEALQUILER_UPDATE = "DETALLEALQUILER_UPDATE"
export const DETALLEALQUILER_DELETE = "DETALLEALQUILER_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(detalleAlquilerListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(detalleAlquilerListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(detalleAlquilerListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(detalleAlquilerListFailure('Error '+error.message))
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
                    "type": DETALLEALQUILER_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/detalleAlquilers/list')
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
                    "type": DETALLEALQUILER_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/detalleAlquilers/list')
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
                    "type": DETALLEALQUILER_DELETE,
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