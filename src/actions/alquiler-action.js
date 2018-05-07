//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/alquileres/'

export const ALQUILER_LIST_REQUEST = "ALQUILER_LIST_REQUEST"
export const ALQUILER_LIST_SUCCESS = 'ALQUILER_LIST_SUCCESS'
export const ALQUILER_LIST_FAILURE = 'ALQUILER_LIST_FAILURE'

export const alquilerList = () => ({
    type: ALQUILER_LIST_REQUEST,
})

export const alquilerListSuccess = (list) => ({
    type: ALQUILER_LIST_SUCCESS,
    list
})

export const alquilerListFailure = error => ({
    type: ALQUILER_LIST_FAILURE,
    error
})

export const ALQUILER_ADD = "ALQUILER_ADD"
export const ALQUILER_FETCH = "ALQUILER_FETCH"
export const ALQUILER_UPDATE = "ALQUILER_UPDATE"
export const ALQUILER_DELETE = "ALQUILER_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(alquilerListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(alquilerListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(alquilerListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(alquilerListFailure('Error '+error.message))
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
                    "type": ALQUILER_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/alquileres/list')
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
                    "type": ALQUILER_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/alquileres/list')
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
                    "type": ALQUILER_DELETE,
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