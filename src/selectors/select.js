export const selectFilters = (state) => state.filterReducer.categories;
export const selectDrinks = (state) => state.drinkReducer.drinks;

export const selectFilteredDrinks = (state, {filters}) => {
    const allDrinks = selectDrinks(state);
    let trueFilters = [], key;
    for (key in filters) {
        if(filters.hasOwnProperty(key)){
            if(filters[key]===true){
                trueFilters.push(key);
            }
        }
    }
    const newArr = [];
    trueFilters.map(name => {
        allDrinks.map(drink => {
            if (drink.name === name){
                newArr.push(drink);
            }
            return newArr;
        })
    })
    return trueFilters.length ? newArr : allDrinks;
};

export const selectFiltersName = (state) => {
    return selectFilters(state).map(({name}) => name);
}


