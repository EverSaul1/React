import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { save, getById, update } from '../../../actions/trabajador-action'
import { getList as getTipoTrabajadorList } from '../../../actions/tipoTrabajador-action'
import { getList as getUserList } from '../../../actions/user-action'
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
            tipoEmpleado: props.data ? props.data.tipoEmpleado : '',
            trabajador: props.data ? props.data.trabajador : '',

        }
    }
    /*
        componentWillReceiveProps = (nextProps) => { // Load Asynchronously
            const { data } = nextProps;
            console.log('componentWillReceiveProps data:' + JSON.stringify(data))
            this.setState({
                id: data.id,
                codigo: data.codigo,
                nombre: data.nombre
            })
        }
    */
    componentWillMount = () => {
        this.props.getTipoTrabajadorList(""),
        this.props.getUserList("")
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
                    tipoEmpleado: data.tipoEmpleado,
                    trabajador: data.trabajador,


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
        let { tipoTrabajador_list, user_list } = this.props
        
        //const { datador } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="Formulario"
                    subheader=""
                />
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        <InputLabel >Tipo Empleado :</InputLabel>
                        {'  '}
                        <TextField

                            id="select-currency-native"
                            select

                            name="tipoEmpleado"
                            value={this.state.tipoEmpleado}
                            onChange={this.handleChange}

                            helperText="Seleccione un Tipo Empleado"
                            margin="normal"
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    name: "tipoEmpleado"
                                },
                            }}

                        >
                            {tipoTrabajador_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nombre}
                                </option>
                            )}
                        </TextField>

                       


                        
                    </form>
                    <form onSubmit={this.handleSubmit}>
                        <InputLabel >Trabajador :</InputLabel>
                        
                        <TextField

                            id="select-currency-native"
                            select

                            name="trabajador"
                            value={this.state.trabajador}
                            onChange={this.handleChange}

                            helperText="Seleccione un Trabajador"
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "trabajador"
                                },
                            }}

                        >
                            {user_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.username}
                                </option>
                            )}
                        </TextField>

                       


                        
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
                            onClick={(e) => this.props.history.push('/catalogo/trabajadores/list')}>
                        
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
    tipoTrabajador_list: PropTypes.array,
    user_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.trabajador.list.find(item => item.id + '' === props.match.params.id + ''),
            tipoTrabajador_list: state.tipoTrabajador.list,
            user_list: state.user.list
        }
    }
    return {
        data: null,
        tipoTrabajador_list: state.tipoTrabajador.list,
        user_list: state.user.list
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
    getTipoTrabajadorList,
    getUserList,


})(Form)