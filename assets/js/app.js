import React from 'react';
import ReactDom from 'react-dom';
import TodoContextProvider from "./Contexts/TodoContext";
import TodoTable from "./Components/TodoTable";
import {CssBaseline} from "@material-ui/core";

class App extends React.Component {
    render() {
        return (
            <TodoContextProvider>
                <CssBaseline>
                    <TodoTable/>
                </CssBaseline>
            </TodoContextProvider>
        );
    }
}

// export default App;

ReactDom.render(<App/>, document.getElementById("root"));