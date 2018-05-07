import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
//import Typography from 'material-ui/Typography'
//import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

import { save, getById, update } from '../../../actions/reserva-action'
import { getList as getClienteList } from '../../../actions/cliente-action'
import { getList as getTrabajadorList } from '../../../actions/trabajador-action'
import { getList as getOficinaList } from '../../../actions/oficina-action'

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
            cliente: props.data ? props.data.cliente : '',
            empleado: props.data ? props.data.empleado : '',
            oficina: props.data ? props.data.oficina : '',

            nroReserva: props.data ? props.data.nroReserva : '',
            fechaFin: props.data ? props.data.fechaFin : '',
            fechaReserva: props.data ? props.data.fechaReserva : ''

        }
    }


    componentWillMount = () => {

        this.props.getClienteList(""),
        this.props.getTrabajadorList(""),
        this.props.getOficinaList("")

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
                    cliente: data.cliente,
                    empleado: data.empleado,
                    oficina: data.oficina,
                    nroReserva: data.nroReserva,
                    fechaFin: data.fechaFin,
                    fechaReserva: data.fechaReserva,


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

        let { cliente_list, trabajador_list, oficina_list } = this.props

        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="Cliente Form"
                    subheader="cliente Form"
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

                            helperText="...............Seleccione una categoria.................."
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
                        <InputLabel >Empleado :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="empleado"
                            value={this.state.empleado}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una categoria.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "empleado"
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
                        <InputLabel >Oficina :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="oficina"
                            value={this.state.oficina}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una categoria.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "oficina"
                                },
                            }}

                        >
                            {oficina_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nro_oficina}
                                </option>
                            )}
                        </TextField>





                    </form>



                    <form >
                        <InputLabel >Nro Reserva :</InputLabel>
                        <Input

                            type="text"
                            name="nroReserva"

                            value={this.state.nroReserva}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        />
                    </form>

                    <form >
                        <InputLabel >Fecha F :</InputLabel>
                        <Input

                            type="date"
                            name="fechaFin"

                            value={this.state.fechaFin}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        />
                    </form>
                    <form >
                        <InputLabel >Fecha Reserva :</InputLabel>
                        <Input

                            type="date"
                            name="fechaReserva"

                            value={this.state.fechaReserva}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
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
                            onClick={(e) => this.props.history.push('/catalogo/reservas/list')}>

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
    oficina_list: PropTypes.array

}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.reserva.list.find(item => item.id + '' === props.match.params.id + ''),
            cliente_list: state.cliente.list,
            trabajador_list: state.trabajador.list,

            oficina_list: state.oficina.list
            
        }


    }
    return {
        data: null,
        cliente_list: state.cliente.list,
        trabajador_list: state.trabajador.list,
        oficina_list: state.oficina.list
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
    getTrabajadorList,
    getOficinaList,


})(Form)