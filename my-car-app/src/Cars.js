import { Component } from "react";
import './Car.css';
import CarItem from './CarItem'



class Cars extends Component {

    state =
    {
        cars: []

    }

componentDidMount() {
    fetch('http://localhost:8080/cars')
        .then(response => response.json())
        .then(cars => {
            this.setState({ cars })
        });
}




render() {
    if (this.state.cars.length === 0) {
        return (
            <div>
                No cars in database
            </div>
        )
    }
    return (
        <div className="ShowCars">
            <table cellPadding="25">
                <thead>
                    <li>
                        <th>Id</th>
                        <th>Mark</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Actions</th>
                    </li>
                </thead>
                <tbody>
                    <li>
                    {this.state.cars.map(car => <CarItem key={car.id} car={car}/>
                        )}
                    </li>
                </tbody>
            </table>
        </div>
    )
}
}

export default Cars


