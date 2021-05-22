import { Component } from "react";


class Car extends Component {


    state = {
        car: {}
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        if (isNaN(parseInt(id, 10))) {
            this.setState({
                car: {}
            });
        }
        else {
            fetch('http://localhost:8080/cars/' + id)
                .then(result => result.text())
                .then(text => {
                    if (text) {
                        let car = JSON.parse(text);

                        this.setState({ car });
                    } else {
                        let car = {};

                        this.setState({ car });
                    }
                });
        }
    }

    render() {
        if (!this.state.car.id) {
            return (
                <div>
                    Undefined Car
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
                            
                        </li>
                    </thead>
                    <tbody>
                        <li>

                            <td>{this.state.car.id}</td>
                            <td>{this.state.car.mark}</td>
                            <td>{this.state.car.model}</td>
                            <td>{this.state.car.color}</td>
                            
                        </li>
                    </tbody>
                </table>
            </div>
        )

    }
}

export default Car;