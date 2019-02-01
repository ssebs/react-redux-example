import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class App extends Component {
    render() {
        return (
            <div style={top}>
                <div style={fl}>
                    <h2 style={{ margin: "0" }}>Articles:</h2>
                    <List />
                </div>
                <div style={fl}>
                    <Form />
                </div>
            </div>
        );
    }
}
const fl = {
    float: "left",
    width: "50%"
};

const top = {
    margin: "30px"
};

export default App;
