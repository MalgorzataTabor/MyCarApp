import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            mark: '',
            model: '',
            color: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.getCarDetails();
    }

    getCarDetails() {
        let carId = this.props.match.params.id;
        axios.get(`http://localhost:8080/cars/${carId}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    mark: response.data.mark,
                    model: response.data.model,
                    color: response.data.color
                }, () => {
                    console.log(this.state);
                });
            })
            .catch(err => console.log(err));
    }

    editCar(newCar) {
        axios.request({
            method: 'PUT',
            url: `http://localhost:8080/cars/${this.state.id}`,
            data: newCar
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const newCar = {

            id: this.refs.id.value,
            mark: this.refs.mark.value,
            model: this.refs.model.value,
            color: this.refs.color.value
        }
        this.editCar(newCar);
        e.preventDefault();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        let buttonText = this.props.edit ? 'Save' : 'Add changes';
        return (
            <div>
        
                <br />
                <Link className="btn grey" to="/">Back</Link>

                <form onSubmit={this.onSubmit.bind(this)} class="form-style-5">
                    <h1>Edit Car</h1>
                    
                    <div className="input-field">
                        <label htmlFor="name">Id</label>
                        <input type="text" name="id" ref="id" value={this.state.id} onChange={this.handleInputChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="name">Mark</label>
                        <input type="text" name="mark" ref="mark" value={this.state.mark} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="city">Model</label>
                        <input type="text" name="model" ref="model" value={this.state.model} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Color</label>
                        <input type="text" name="color" ref="color" value={this.state.color} onChange={this.handleInputChange} />

                    </div>
                    <button type={'submit'}>{buttonText}</button>
                </form>
            </div>
        )
    }
}

export default EditCar;