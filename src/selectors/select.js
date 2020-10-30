export const selectFilters = (state) => state.filterReducer.categories;
export const selectDrinks = (state) => {
   // console.log(state.drinkReducer.drinks);
   return state.drinkReducer.drinks
};

export const selectFiltersName = (state) => {
    return selectFilters(state).map(({name}) => name);
}


