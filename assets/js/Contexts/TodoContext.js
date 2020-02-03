import React, {createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 1, name: 'test1'},
                {id: 2, name: 'test2'},
                {id: 3, name: 'test3'},
                {id: 4, name: 'test4'},
                {id: 5, name: 'test5'},
                {id: 6, name: 'test6'},
            ],
        };
    }

    //create
    createTodo(event, todo){
        event.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState( {
            todos: data,
        });
    }

    //read
    readTodo(){}

    //update
    updateTodo(data) {
        let todos = [...this.state.todos];

        let todo = todos.find(todo => {
            return todo.id === data.id;
        });

        todo.name = data.name;
        this.setState({ todos: todos });

    }

    //delete
    deleteTodo(data){
        let todos = [...this.state.todos];

        let todo = todos.find(todo => {
            return todo.id === data.id;
        });

        todos.splice(todos.indexOf(todo), 1);
        this.setState({ todos: todos });
    }


    render() {
        return (
            <TodoContext.Provider value = {{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
            }}>
                { this.props.children }
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;