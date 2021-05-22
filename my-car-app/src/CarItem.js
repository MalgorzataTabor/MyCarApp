import { Component } from "react";
import ButtonDeleted from './ButtonDeleted';
import { Link } from 'react-router-dom';




class CarItem extends Component {



    render() {

        return (


            <tr>
                <td>{this.props.car.id}</td>
                <td>{this.props.car.mark}</td>
                <td>{this.props.car.model}</td>
                <td>{this.props.car.color}</td>
                <td>
                <Link className="btn" to={`/cars/edit/${this.props.car.id}`}> Edit</Link>

                <ButtonDeleted id={this.props.car.id} className="btn red right"/>

                    
                 


                </td>

            </tr>
        )
    }

}
    


export default CarItem; 