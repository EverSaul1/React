import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

import { save, getById, update } from '../../../actions/oficina-action'
import { getList as getCategoriaList } from '../../../actions/categoria-action'

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
            codigo: props.data ? props.data.codigo : '',
            estado: props.data ? props.data.estado : '',
            descripcion: props.data ? props.data.descripcion : '',
            precio: props.data ? props.data.precio : '',
            categoria: props.data ? props.data.categoria : ''
        }
    }

    componentWillMount = () => {
        this.props.getCategoriaList("")

        /*componentWillMount = () => {
    
            this.props.getCategoriaList("")
    
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
                    codigo: data.codigo,
                    estado: data.estado,
                    descripcion: data.descripcion,
                    precio: data.precio,
                    categoria: data.categoria,

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

        let { categoria_list } = this.props

        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar src="data:image/png;base64,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" >

                        </Avatar>
                    }
                    title="FORMULARIO OFICINA"

                    subheader="-----------------------------------"
                />
                <CardContent>
                    <form >
                        <InputLabel >1.     Codigo:</InputLabel>
                        <Input

                            type="text"
                            name="codigo"

                            value={this.state.codigo}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start">  </InputAdornment>}
                        />

                    </form>



                    <form >
                        <InputLabel >Descripcion :</InputLabel>
                        <Input

                            type="text"
                            name="descripcion"

                            value={this.state.descripcion}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        />
                    </form>

                    <form >
                        <InputLabel >Precio :</InputLabel>
                        <Input

                            type="number"
                            name="precio"

                            value={this.state.precio}
                            onChange={this.handleChange}
                            startAdornment={<InputAdornment position="start"> S/.</InputAdornment>}
                        />
                    </form>


                    <form >
                        <InputLabel >Categoria :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="categoria"
                            value={this.state.categoria}
                            onChange={this.handleChange}

                            helperText="...............Seleccione una categoria.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "categoria"
                                },
                            }}

                        >
                            {categoria_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nombre}
                                </option>
                            )}
                        </TextField>





                    </form>
                    <InputLabel>5.  Estado :</InputLabel>
                    <FormGroup row>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.estado}
                                    onChange={this.handleChange}
                                    name="estado"
                                >

                                </Checkbox>
                            }

                            label={this.state.estado ? "Activo" : "Inactivo"}

                        />


                    </FormGroup>





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
                            onClick={(e) => this.props.history.push('/catalogo/oficinas/list')}>

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
    categoria_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.oficina.list.find(item => item.id + '' === props.match.params.id + ''),
            categoria_list: state.categoria.list,
        }
    }
    return {
        data: null,
        categoria_list: state.categoria.list,
    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
                    save: (d, h) => {dispatch(save(d, h))},
        getList: (q) => {dispatch(getList(q))},
        getById: (id) => {dispatch(getById(id))},
        update: (d, h) => {dispatch(update(d, h))},
    }
}
*/
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getCategoriaList,

})(Form)