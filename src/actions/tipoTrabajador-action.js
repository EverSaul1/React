//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/tipoTrabajadores/'

export const TIPOTRABAJADOR_LIST_REQUEST = "TIPOTRABAJADOR_LIST_REQUEST"
export const TIPOTRABAJADOR_LIST_SUCCESS = 'TIPOTRABAJADOR_LIST_SUCCESS'
export const TIPOTRABAJADOR_LIST_FAILURE = 'TIPOTRABAJADOR_LIST_FAILURE'

export const tipoTrabajadorList = () => ({
    type: TIPOTRABAJADOR_LIST_REQUEST,
})

export const tipoTrabajadorListSuccess = (list) => ({
    type: TIPOTRABAJADOR_LIST_SUCCESS,
    list
})

export const tipoTrabajadorListFailure = error => ({
    type: TIPOTRABAJADOR_LIST_FAILURE,
    error
})

export const TIPOTRABAJADOR_ADD = "TIPOTRABAJADOR_ADD"
export const TIPOTRABAJADOR_FETCH = "TIPOTRABAJADOR_FETCH"
export const TIPOTRABAJADOR_UPDATE = "TIPOTRABAJADOR_UPDATE"
export const TIPOTRABAJADOR_DELETE = "TIPOTRABAJADOR_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(tipoTrabajadorListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(tipoTrabajadorListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(tipoTrabajadorListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(tipoTrabajadorListFailure('Error '+error.message))
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
                    "type": TIPOTRABAJADOR_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/tipoTrabajadores/list')
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
                    "type": TIPOTRABAJADOR_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/tipoTrabajadores/list')
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
                    "type": TIPOTRABAJADOR_DELETE,
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