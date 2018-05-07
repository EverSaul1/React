import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
//import Typography from 'material-ui/Typography'
//import TextField from 'material-ui/TextField';

import { save, getById, update } from '../../../actions/cliente-action'

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
            ruc: props.data ? props.data.ruc : ''
               
        }
    }
    
    
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
    


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    cliente: data.cliente,
                    ruc: data.ruc,
                    
                   
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
        
        let {categoria_list} = this.props

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
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Cliente:
                            <input type="text" name="cliente" value={this.state.cliente} onChange={this.handleChange} />
                        </label>
                        

                        <label>
                            Ruc:
                            <input type="double" name="ruc" value={this.state.ruc} onChange={this.handleChange} />
                        </label>
                        
                       
                        <input type="submit" value="Submit" />
                    </form>
                </CardContent>
            </Card>
        )
    }
}

Form.propTypes = {
    data: PropTypes.object,
    
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
           data: state.cliente.list.find(item => item.id + '' === props.match.params.id + '')
            
        }

      
    }
    return {
        data: null
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
    

})(Form)