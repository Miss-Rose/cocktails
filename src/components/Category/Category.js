import React, {useEffect, useState} from 'react';
import Checkbox from "../Checkbox/Checkbox";
import {selectCategories} from "./select";
import {getFiltersCreators} from "../../redux/actionCreators/actionCreators";
import {connect} from "react-redux";


const Category = ({categories, getCategories, setFilters}) => {

    useEffect(() => {
        getCategories();
    }, []);

    const [selected, setSelected] = useState({});

    if (!categories) {
        return <p>load ...</p>
    }

    const handle = (e) => {
        setSelected({...selected, [e.target.value]: e.target.checked})
        setFilters({...selected, [e.target.value]: e.target.checked});
    }


    return (
        <div>
            {
                categories.map(({name, id}) => {
                    return (
                        <div key={id}>
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

const mapStateToProps = (state) => ({
    categories: selectCategories(state),
})
const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getFiltersCreators()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);
