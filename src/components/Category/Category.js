import React, {useEffect, useState} from 'react';
import Checkbox from "../Checkbox/Checkbox";
import {selectDrinks} from "../../selectors/select";
import {addDrinksCreators} from "../../redux/actionCreators/actionCreators";
import {connect} from "react-redux";

const Category = ({categories, addDrink, setFilters}) => {

    const [selected, setSelected] = useState({});

    useEffect(() => {
        categories.map(name =>
            addDrink(name)
        )
    }, [])

    const handle = (e) => {
        setSelected({...selected, [e.target.value]: e.target.checked})
        setFilters({...selected, [e.target.value]: e.target.checked});
    }

    return (
        <div>
            {
                categories.map((name, index) => {
                    return (
                        <div key={index}>
                            <Checkbox
                                type="checkbox"
                                name={name}
                                value={name}
                                checked={selected[name] ? selected[name] : false}
                                onChange={handle}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addDrink: (name) => dispatch(addDrinksCreators(name)),
})
export default connect(null, mapDispatchToProps)(Category);
