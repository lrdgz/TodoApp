import React from 'react';
import ReactDom from 'react-dom';
import TodoContextProvider from "./Contexts/TodoContext";
import TodoTable from "./Components/TodoTable";

class App extends React.Component {
    render() {
        return (
            <TodoContextProvider>
                <TodoTable/>
            </TodoContextProvider>
        );
    }
}

// export default App;

ReactDom.render(<App/>, document.getElementById("root"));