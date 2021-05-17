import { Component } from "react";
import ButtonDeleted from './ButtonDeleted';
import ButtonEdit from './ButtonEdit'


class CarItem extends Component {

    render() {

        return (


            <tr>
                <td>{this.props.car.id}</td>
                <td>{this.props.car.mark}</td>
                <td>{this.props.car.model}</td>
                <td>{this.props.car.color}</td>
                <td>
                <ButtonEdit car={this.props.car}/>
                <ButtonDeleted id={this.props.car.id}/>

                    
                 


                </td>

            </tr>
        )
    }

}

export default CarItem; 