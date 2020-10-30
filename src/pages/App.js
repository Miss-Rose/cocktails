import React, {useEffect, useState} from 'react';
import {getFiltersCreators} from "../redux/actionCreators/actionCreators";
import {connect} from "react-redux";
import {selectFiltersName} from "../selectors/select";
import List from "../components/List/List";
import Category from "../components/Category/Category";


function App({categories, getCategories}) {

    const [filters, setFilters] = useState([]);

    useEffect(() => {
        getCategories()
    }, [])

    if(!categories.length){
        return <p>load ...</p>
    }

    const handle = (allFilter) => setFilters(allFilter);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    <Category categories={categories} setFilters={handle}/>
                </div>
                <div className='col-9'>
                    <List filters={filters} />
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    categories: selectFiltersName(state),
})
const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getFiltersCreators()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
