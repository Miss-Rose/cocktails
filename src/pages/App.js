import React, {useEffect} from 'react';
import {getFiltersCreators} from "../redux/actionCreators/actionCreators";
import {connect} from "react-redux";
import {selectFiltersName} from "../selectors/select";
import List from "../components/List/List";
import Category from "../components/Category/Category";


function App({filters, getFilters}) {

    useEffect(() => {
        getFilters()
    }, [])

    if(!filters.length){
        return <p>load ...</p>
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    <Category categories={filters} />
                </div>
                <div className='col-9'>
                    <List filters={filters} />
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    filters: selectFiltersName(state),
})
const mapDispatchToProps = (dispatch) => ({
    getFilters: () => dispatch(getFiltersCreators()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
