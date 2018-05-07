import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

import Button from 'material-ui/Button';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';


import { save, getById, update } from '../../../actions/detalleAlquiler-action'
import { getList as getOficinaList } from '../../../actions/oficina-action'
import { getList as getAlquilerList } from '../../../actions/alquiler-action'




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
            alquiler: props.data ? props.data.alquiler : '',
            descripcion: props.data ? props.data.descripcion: '',
            precio: props.data ? props.data.precio : '',
            cantidad: props.data ? props.data.cantidad : '',
            fecha: props.data ? props.data.fecha : '',
            importe: props.data ? props.data.importe : '',
            



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
        this.props.getAlquilerList(""),
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
                    alquiler: data.alquiler,
                    descripcion: data.descripcion,
                    importe: data.importe,
                    fecha: data.fecha,
                    cantidad: data.cantidad,
                    precio: data.precio,
                    

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
        let { oficina_list, alquiler_list } = this.props
        //const { data } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar src="https://icon-icons.com/icons2/1147/PNG/512/1486486297-attribute-category-label-shop-price-price-tag-tag_81213.png" >

                        </Avatar>
                    }
                    title="ffffffffffffff Form"
                    subheader="Users Form"
                />
                <CardContent>
                    <form >
                        <InputLabel >Alquiler :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="alquiler"
                            value={this.state.alquiler}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una alquiler.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "alquiler"
                                },
                            }}

                        >
                            {alquiler_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.fecha}
                                </option>
                            )}
                        </TextField>





                    </form>

                    <form >
                        <InputLabel >descripcion :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="descripcion"
                            value={this.state.descripcion}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una descripcion.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "descripcion"
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
                        <InputLabel >precio</InputLabel>
                        <Input

                            type="number"
                            name="precio"

                            value={this.state.precio}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>

                    <form >
                        <InputLabel >cantidad</InputLabel>
                        <Input

                            type="number"
                            name="cantidad"

                            value={this.state.cantidad}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>
                    <form >
                        <InputLabel >fecha</InputLabel>
                        <Input

                            type="date"
                            name="fecha"

                            value={this.state.fecha}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
                        />

                    </form>
                    <form >
                        <InputLabel >importe</InputLabel>
                        <Input

                            type="number"
                            name="importe"

                            value={this.state.importe}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> : </InputAdornment>}
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
                            onClick={(e) => this.props.history.push('/catalogo/detalleAlquileres/list')}>

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
    oficina_list: PropTypes.array,
    alquiler_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.detalleAlquiler.list.find(item => item.id + '' === props.match.params.id + ''),
            oficina_list: state.oficina.list,
            alquiler_list: state.alquiler.list,
        }
    }
    return {
        data: null,
        oficina_list: state.oficina.list,
        alquiler_list: state.alquiler.list

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
    getOficinaList,
    getAlquilerList,

})(Form)