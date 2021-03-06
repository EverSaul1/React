import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton'

import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';

import { getList, del } from '../../../actions/alquiler-action'

import { connect } from 'react-redux'

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {
    Link
} from 'react-router-dom'


class List extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    handleClick = () => {
        this.props.history.push('/catalogo/alquileres/new');
    }

    render() {
        let { list, del } = this.props
        if (list) {

        } else {
            list = []

        }

        return (

            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="alquileres de List"
                    subheader="Lista de Alquileres"

                />
                <CardContent>
                    <Typography component="p">
                        q={this.props.q}
                    </Typography>

                    <TextField
                        id="search"
                        label="Search"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"

                    />
                    <Button fab color="primary" aria-label="add" onClick={this.handleClick}>
                        <AddIcon />
                    </Button>

                    <Paper style={{
                        overflowX: 'auto',
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Cliente</TableCell>
                                    <TableCell >Nro Documento</TableCell>
                                    <TableCell >direccion</TableCell>
                                    <TableCell >Fecha </TableCell>
                                    <TableCell >Comprobante</TableCell>
                                    <TableCell >Nro Boleta</TableCell>
                                    <TableCell >Trabajador</TableCell>
                                    <TableCell >Total</TableCell>

                                    <TableCell >Edit</TableCell>
                                    <TableCell >Delete</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {list.map((d, index) =>
                                    <TableRow key={index}>
                                        <TableCell numeric>{index + 1}</TableCell>
                                        <TableCell >{d.cliente}</TableCell>
                                        <TableCell >{d.nroDoc}</TableCell>
                                        <TableCell >{d.direccion}</TableCell>
                                        <TableCell >{d.fecha}</TableCell>
                                        <TableCell >{d.comprobante_descripcion}</TableCell>
                                        <TableCell >{d.nroBoleta}</TableCell>
                                        <TableCell >{d.trabajador_trabajador}</TableCell>
                                        <TableCell >{d.total}</TableCell>



                                        <TableCell >
                                        
                                           <Link to={`/catalogo/alquileres/edit/${d.id}`}  ><EditIcon color="blue" /></Link>
                                       </TableCell>
                                      <TableCell >
                                           <IconButton aria-label="Delete" onClick={() => del(d.id, this.props.history)}>
                                               <DeleteIcon color = "red"/>
                                           </IconButton>
                                       </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>

            </Card>
        );
    }
}
List.propTypes = {
    list: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        list: state.alquiler.list
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        getList: (q) => { dispatch(getList(q)) },
        del: (id, h) => { dispatch(del(id, h)) }
    }
}
*/
export default connect(mapStateToProps, {
    getList,
    del
})(List)