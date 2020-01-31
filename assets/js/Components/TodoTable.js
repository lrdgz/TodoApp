import React, {useContext, useState} from 'react';
import {TodoContext} from "../Contexts/TodoContext";
import {Table, IconButton, TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";



function TodoTable() {
    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editTodo, setEditTodo] = useState('');


    return (
        <form onSubmit={(event) => {context.createTodo(event, {name: addTodo})}}>
           <Table>
               <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align={"right"}>Actions</TableCell>
                    </TableRow>
               </TableHead>
               <TableBody>
                   <TableRow>
                       <TableCell>
                           <TextField value={addTodo} onChange={ (event) => {setAddTodo(event.target.value)} } label={"New Task"} fullWidth={true}/>
                       </TableCell>
                       <TableCell  align={"right"}>
                           <IconButton type="submit">
                               <AddIcon/>
                           </IconButton>
                       </TableCell>
                   </TableRow>
                   {context.todos.slice().reverse().map((todo, index) => (
                       <TableRow key={'todo' + index}>
                            <TableCell>
                                {
                                    editIsShown === todo.id ?
                                        <TextField
                                            value={editTodo}
                                            onChange={ (event) => { setEditTodo(event.target.value) } }
                                            InputProps={{
                                                //endAdornment: //<InputAdornment position="start"><IconButton><DoneIcon/></IconButton></InputAdornment>
                                                endAdornment: //<InputAdornment position="start"><IconButton><DoneIcon/></IconButton></InputAdornment>
                                            }}
                                        />
                                        : todo.name}
                            </TableCell>
                            <TableCell align={"right"}>

                                <IconButton onClick={ ()=> { setEditIsShown(todo.id); setEditTodo(todo.name) } }>
                                    <EditIcon/>
                                </IconButton>

                                <IconButton>
                                    <DeleteIcon/>
                                </IconButton>

                            </TableCell>
                       </TableRow>
                   ))}
               </TableBody>
           </Table>
        </form>
    );
}

export default TodoTable;