import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CarForm.css';

class AddCar extends Component {


    addCar(newCar) {
        axios.request({
            method: 'post',
            url: 'http://localhost:8080/cars/',
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
        this.addCar(newCar);
        e.preventDefault();
    }


    render() {

        let buttonText = this.props.edit ? 'Save' : 'Add new car';

        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>

                <form onSubmit={this.onSubmit.bind(this)} class="form-style-5">
                    <h1>Add New Car</h1>
                    <div className="input-field">
                        <label htmlFor="id">Id: </label>
                        <input type="text" name="id" ref="id" />

                    </div>
                    <div className="input-field">
                        <label htmlFor="mark">Mark: </label>
                        <input type="text" name="mark" ref="mark" />

                    </div>
                    <div className="input-field">
                        <label htmlFor="model">Model: </label>
                        <input type="text" name="model" ref="model" />

                    </div>
                    <div className="input-field">
                        <label htmlFor="color">Color: </label>
                        <input type="text" name="color" ref="color" />

                    </div>


                    <div>
                        <button type={'submit'}>{buttonText}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddCar;