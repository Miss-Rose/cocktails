import React from 'react';
import Item from "../Item/Item";
import {selectFilteredDrinks} from "../../selectors/select";
import {connect} from "react-redux";

const List = ({drinks}) => {

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
const mapStateToProps = (state, filters) => ({
    drinks: selectFilteredDrinks(state, filters)
})

export default connect(mapStateToProps)(List);


