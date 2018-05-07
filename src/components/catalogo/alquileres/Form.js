import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
//import Typography from 'material-ui/Typography'
//import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';

import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';


import { FormGroup, FormControlLabel } from 'material-ui/Form';

import { save, getById, update } from '../../../actions/alquiler-action'
import { getList as getClienteList } from '../../../actions/cliente-action'
import { getList as geTrabajadorList } from '../../../actions/trabajador-action'
import { getList as getComprobanteList } from '../../../actions/comprobante-action'

import { connect } from 'react-redux'

class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    codigo: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            comprobante_descripcion: props.data ? props.data.comprobante_descripcion : '',
            trabajador_trabajador: props.data ? props.data.trabajador_trabajador : '',
            cliente_cliente: props.data ? props.data.cliente_cliente : '',
            fecha: props.data ? props.data.fecha : '',
            nroDoc: props.data ? props.data.nroDoc : '',
            total: props.data ? props.data.total : '',
            direccion: props.data ? props.data.direccion : '',
            direccion: props.data ? props.data.direccion : ''
        }
    }


    componentWillMount = () => {

        this.props.getClienteList(""),
        this.props.geTrabajadorList(""),
        this.props.getComprobanteList("")

        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
                })
            }).catch(e => {

            });
        }
        */

    }

    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    comprobante_descripcion: data.comprobante_descripcion,
                    trabajador_trabajador: data.trabajador_trabajador,
                    cliente_cliente: data.cliente_cliente,
                    fecha: data.fecha,
                    nroDoc: data.nroDoc,
                    total: data.total,
                    direccion: data.direccion,
                    nroBoleta: data.nroBoleta

                });
            });
        }
    }

    handleChange = (event) => {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const { id } = this.props.match.params
        if (id) {
            //console.log('handleSubmit state:' + JSON.stringify(this.state))
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }


    render() {
        let { cliente_list, trabajador_list, comprobante_list  } = this.props
        


        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="User Form"
                    subheader="Oficina Form"
                />
                <CardContent>
                    <form >
                        <InputLabel >Cliente :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="cliente"
                            value={this.state.cliente}
                            onChange={this.handleChange}

                            helperText="...............Seleccione un cliente.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "cliente"
                                },
                            }}

                        >
                            {cliente_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.cliente_nombre}
                                </option>
                            )}
                        </TextField>





                    </form>
                    <form >
                        <InputLabel >Trabajador :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="trabajador"
                            value={this.state.trabajador}
                            onChange={this.handleChange}

                            helperText="...............Seleccione un cliente.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "trabajador"
                                },
                            }}

                        >
                            {trabajador_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.trabajador_username}
                                </option>
                            )}
                        </TextField>





                    </form>
                    <form >
                        <InputLabel >Comprobante :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="comprobante"
                            value={this.state.comprobante}
                            onChange={this.handleChange}

                            helperText="...............Seleccione un comprobante.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "comprobante"
                                },
                            }}

                        >
                            {comprobante_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.descripcion}
                                </option>
                            )}
                        </TextField>





                    </form>



                    <form >
                        <InputLabel >Fecha :</InputLabel>
                        <Input

                            type="text"
                            name="fecha"

                            value={this.state.fecha}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        />
                    </form>

                    <form >
                        <InputLabel >nroDoc :</InputLabel>
                        <Input

                            type="number"
                            name="nroDoc"

                            value={this.state.nroDoc}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> S/.</InputAdornment>}
                        />
                    </form>
                    <form >
                        <InputLabel >total :</InputLabel>
                        <Input

                            type="number"
                            name="nroDoc"

                            value={this.state.nroDoc}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> S/.</InputAdornment>}
                        />
                    </form>
                    <form >
                        <InputLabel >direccion :</InputLabel>
                        <Input

                            type="number"
                            name="nroDoc"

                            value={this.state.nroDoc}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> S/.</InputAdornment>}
                        />
                    </form>
                    <form >
                        <InputLabel >nroBoleta :</InputLabel>
                        <Input

                            type="number"
                            name="nroDoc"

                            value={this.state.nroDoc}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> S/.</InputAdornment>}
                        />
                    </form>



                    





                </CardContent>
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        <Button
                            raised
                            color="primary"
                            type="submit"
                            margin="normal"
                        >
                            Guardar
                    </Button>
                        {'  '}
                        <Button
                            raised
                            color="accent"
                            type="reset"

                            margin="normal"
                            onClick={(e) => this.props.history.push('/catalogo/alquileres/list')}>

                            cancelar
                    </Button>

                    </form>


                </CardContent>
            </Card>
        )
    }
}

Form.propTypes = {
    data: PropTypes.object,
    cliente_list: PropTypes.array,
    trabajador_list: PropTypes.array,
    comprobante_list: PropTypes.array

}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.alquiler.list.find(item => item.id + '' === props.match.params.id + ''),
            cliente_list: state.cliente.list,
            trabajador_list: state.trabajador.list,
            comprobante_list: state.comprobante.list
        }
    }
    return {
        data: null,
        cliente_list: state.cliente.list,
        trabajador_list: state.trabajador.list,
        comprobante_list: state.comprobante.list

    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        save: (d, h) => { dispatch(save(d, h)) },
        getList: (q) => { dispatch(getList(q)) },
        getById: (id) => { dispatch(getById(id)) },
        update: (d, h) => { dispatch(update(d, h)) },
    }
}
*/
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getClienteList,
    geTrabajadorList,
    getComprobanteList,


})(Form)