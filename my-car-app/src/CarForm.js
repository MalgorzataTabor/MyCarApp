import React, { Component } from 'react';
import './CarForm.css';

class CarForm extends Component {

    state = {
        id: '',
        mark: '',
        model: '',
        color: '',

    }

    componentDidMount() {
        if (this.props.edit) {
            fetch('http://localhost:8080/cars/' + this.props.match.params.id)
                .then(result => result.json())
                .then(data => this.setState({
                    id: data.id,
                    mark: data.mark,
                    model: data.model,
                    color: data.color
                }));
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let method = this.props.edit ? 'PUT' : 'POST';

        fetch('http://localhost:8080/cars', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(result => {
            this.setState({

            });
        });
    }
    

    render() {

        let title = this.props.edit ? 'Edit car properties' : 'Add new car';
        let buttonText = this.props.edit ? 'Save' : 'Add new car';



        return (
            <form onSubmit={this.handleSubmit} class="form-style-5">
                <h1>{title}</h1>
                <div>
                    <label>Id:  </label>
                    <input type={'text'} id={'id'} name={'id'} value={this.state.id}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label>Mark: </label>
                    <input type={'text'} id={'mark'} name={'mark'} value={this.state.mark}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label>Model: </label>
                    <input type={'text'} id={'model'} name={'model'} value={this.state.model}

                        onChange={this.handleChange} />
                </div>
                <div>
                <label>Color: </label>
                    <input type={'text'} id={'color'} name={'color'} value={this.state.color}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <button type={'submit'}>{buttonText}</button>
                </div>
            </form>
        )
    }
}

export default CarForm;