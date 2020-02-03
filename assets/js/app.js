import React from 'react';
import ReactDom from 'react-dom';
import TodoContextProvider from "./Contexts/TodoContext";
import TodoTable from "./Components/TodoTable";
import {CssBaseline} from "@material-ui/core";
import AppSnackbar from "./Components/AppSnackbar";

class App extends React.Component {
    render() {
        return (
            <TodoContextProvider>
                <CssBaseline>
                    <TodoTable/>
                    <AppSnackbar/>
                </CssBaseline>
            </TodoContextProvider>
        );
    }
}

// export default App;

ReactDom.render(<App/>, document.getElementById("root"));