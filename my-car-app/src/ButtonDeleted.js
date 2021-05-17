import { Component } from "react";

class ButtonDeleted extends Component {

    handleClick = (event) => {
        fetch('http://localhost:8080/cars/' + this.props.id, {
            method: 'DELETE'
        }).then(result => {
            window.location.reload(false);
        });
    }

    render() {
        return <button onClick={this.handleClick}>
            Delete
        </button>
    }
}

export default ButtonDeleted;