import React, {useEffect} from 'react';
import {getDrinksCreators} from "../../redux/actionCreators/actionCreators";
import {connect} from "react-redux";
import {selectDrinks} from './select';

const Item = ({name, selected, getDrinks, drinks}) => {

    useEffect(() => {
        getDrinks(name)
    }, [])

    if (!drinks) {
        return <p>load ...</p>
    }

    console.log('drinks', drinks);
    return (
        <div>
            {
                selected ?
                    <>
                        <h1>{name}</h1>
                        {
                            drinks.map(item => {
                                return (
                                    <div key={item.idDrink}>
                                        <span>name: {item.strDrink}</span>
                                        <img src={item.strDrinkThumb} height={50} width={50} alt={item.strDrink}/>
                                    </div>
                                )
                            })
                        }
                    </> : null
            }
        </div>

    );
}

const mapStateToProps = (state) => ({
    drinks: selectDrinks(state),
})
const mapDispatchToProps = (dispatch) => ({
    getDrinks: (name) => dispatch(getDrinksCreators(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);