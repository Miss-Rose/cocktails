import React, {useEffect} from 'react';
import Item from "../Item/Item";
import {selectDrinks} from "../../selectors/select";
import {addDrinksCreators} from "../../redux/actionCreators/actionCreators";
import {connect} from "react-redux";

const List = ({filters, addDrink, drinks}) => {

    useEffect(() => {
        filters.map(name =>
            addDrink(name)
        )
    }, [])

    return (
        <div className='d-block'>
            {
                drinks.map((item, index) => {
                    return <Item
                        key={index}
                        drink={item}
                    />
                })

            }
        </div>

    );
}
const mapStateToProps = (state) => ({
    drinks: selectDrinks(state)

})
const mapDispatchToProps = (dispatch) => ({
    addDrink: (name) => dispatch(addDrinksCreators(name)),
})
export default connect(mapStateToProps, mapDispatchToProps)(List);