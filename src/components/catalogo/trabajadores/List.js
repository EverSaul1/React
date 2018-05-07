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
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import { getList, del } from '../../../actions/trabajador-action'

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

    state = {
        current: 3,
      };
      onChange = (page) => {
        console.log(page);
        this.setState({
          current: page,
        });
      }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    handleClick = () => {
        this.props.history.push('/catalogo/trabajadores/new');
    }

    render() {
        

        let { list, del } = this.props
        if (list) {
            
        } else{
            list =[]

        }
       

        return (

            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            T
                          </Avatar>
                    }
                    title="Lista de Trabajadores"
                    subheader=""
                
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
                                    <TableCell >Tipo Empleado</TableCell>
                                    <TableCell >Trabajador</TableCell>
                                    <TableCell >Edit</TableCell>
                                    <TableCell >Delete</TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                {list.map((d, index) =>
                                    <TableRow key={index}>
                                        <TableCell numeric>{index + 1}</TableCell>
                                        <TableCell >{d.tipoEmpleado_tipoEmpleado }</TableCell>
                                        <TableCell >{d.trabajador_username}</TableCell>
                                       
                                        <TableCell >
                                            <Link to={`/catalogo/trabajadores/edit/${d.id}`} className="ui basic button green"><EditIcon color="blue" /></Link>
                                        </TableCell>
                                        <TableCell >
                                        <IconButton aria-label="Delete" onClick={() => del(d.id, this.props.history)}>
                                                <DeleteIcon color="red" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <Pagination onChange={this.onChange} current={this.state.current} total={25} />;
                            
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
        list: state.trabajador.list
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