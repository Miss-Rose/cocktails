import React from 'react';
import Checkbox from "../Checkbox/Checkbox";

const Category = ({categories}) => {

    // console.log('in categories', categories);
    // useEffect(() => {
    //     getCategories();
    // }, []);
    //
    // const [selected, setSelected] = useState({});
    //
    // if (!categories) {
    //     return <p>load ...</p>
    // }
    //
    // const handle = (e) => {
    //     setSelected({...selected, [e.target.value]: e.target.checked})
    //     setFilters({...selected, [e.target.value]: e.target.checked});
    // }


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
                                // checked={selected[name] ? selected[name] : false}
                                // onChange={handle}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     categories: selectCategories(state),
// })
// const mapDispatchToProps = (dispatch) => ({
//     getCategories: () => dispatch(getFiltersCreators()),
// })

export default Category;
