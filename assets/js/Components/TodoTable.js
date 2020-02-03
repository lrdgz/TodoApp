import React, {Fragment, useContext, useState} from 'react';
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
import CloseIcon from "@material-ui/icons/Close";
import DeleteDialog from "./DeleteDialog";


function TodoTable() {
    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editTodo, setEditTodo] = useState('');
    const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
    const [todoToBeDeleted, setTodoToBeDeleted] = useState(null);


    const onCreateSubmit = (event) => {
        event.preventDefault();
        context.createTodo(event, {name: addTodo});
        setAddTodo('');
    };

    const onEditSubmit = (todoId, event) => {
        event.preventDefault();
        context.updateTodo({id: todoId, name: editTodo});
        setEditIsShown(false);
    };

    return (
        <Fragment>
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
                            <form onSubmit={onCreateSubmit}>
                                <TextField
                                    value={addTodo}
                                    onChange={(event) => {
                                        setAddTodo(event.target.value)
                                    }}
                                    label={"New Task"} fullWidth={true}
                                />
                            </form>
                        </TableCell>

                        <TableCell align={"right"}>
                            <IconButton type="submit" onClick={onCreateSubmit}>
                                <AddIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    {context.todos.slice().reverse().map((todo, index) => (
                        <TableRow key={'todo' + index}>
                            <TableCell>
                                {
                                    editIsShown === todo.id ?
                                        <form onSubmit={onEditSubmit.bind(this, todo.id)}>
                                            <TextField
                                                type='text'
                                                autoFocus={true}
                                                fullWidth={true}
                                                value={editTodo}
                                                onChange={(event) => {
                                                    setEditTodo(event.target.value)
                                                }}
                                                InputProps={{
                                                    //endAdornment: //<InputAdornment position="start"><IconButton><DoneIcon/></IconButton></InputAdornment>
                                                    endAdornment: <Fragment>
                                                        <IconButton
                                                            onClick={
                                                                () => {
                                                                    setEditIsShown(false);
                                                                }
                                                            }><CloseIcon/></IconButton>
                                                        <IconButton
                                                            type='submit'
                                                        ><DoneIcon/></IconButton>
                                                    </Fragment>
                                                }}
                                            />
                                        </form>
                                        : todo.name}
                            </TableCell>
                            <TableCell align={"right"}>

                                <IconButton onClick={() => {
                                    setEditIsShown(todo.id);
                                    setEditTodo(todo.name)
                                }}>
                                    <EditIcon/>
                                </IconButton>

                                <IconButton onClick={() => {
                                    setDeleteConfirmationIsShown(true);
                                    setTodoToBeDeleted(todo)
                                }}>
                                    <DeleteIcon/>
                                </IconButton>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {deleteConfirmationIsShown && (
                <DeleteDialog
                    todo={todoToBeDeleted}
                    open={deleteConfirmationIsShown}
                    setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}
                />
            )}

        </Fragment>
    );
}

export default TodoTable;