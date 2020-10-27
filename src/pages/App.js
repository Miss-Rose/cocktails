import React, {useState} from 'react';
import Category from "../components/Category/Category";
import List from "../components/List/List";


function App() {

    const [filters, setFilters] = useState([]);
    const handle = (allFilter) => setFilters(allFilter);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-4 col-lg-3 col-xl-2 mt-3'>
                    <Category setFilters={handle} />
                </div>
                <div className='col-sm-12 col-md-6 col-lg-9 col-xl-10 mt-3'>
                    <List filters={filters} />
                </div>
            </div>
        </div>

    );
}

export default App;