import React, {Component} from "react";
import Auxilary from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[Order Summary] will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}: {this.props.ingredients[igKey]}
                    </span>
                    </li>);
            });

        return (
            <Auxilary>
                <h3>Your Order</h3>
                <p>A Delicious Burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxilary>
        );
    }
};
export default OrderSummary;