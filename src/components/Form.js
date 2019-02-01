import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title } = this.state;
        const id = v4();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            // <div style={{ border: "1px solid #000" }}>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Add a new Article</h3>
                        <label>
                            Title{" "}
                            <input
                                type='text'
                                id='title'
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <br />
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;
