import React, { Component } from "react";
import { connect } from "react-redux";
import { delArticle } from "../actions/index";

class ConnectedList extends Component {
    constructor(props) {
        super(props);

        this.handleDelArticle = this.handleDelArticle.bind(this);
    }

    handleDelArticle(e, id) {
        this.props.delArticle(id);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.articles.map(el => (
                        <li key={el.id}>
                            {el.title}
                            {" - "}
                            <button onClick={(e) => this.handleDelArticle(e, el.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

const mapDispatchToProps = {
    delArticle
};

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedList);

export default List;
