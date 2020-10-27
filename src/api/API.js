import axios from 'axios';


export const getAllFilters = () => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(res => res.data)
        .catch(err => err);

};
export const getDrinks = (name) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`)
        .then(res => res.data)
        .catch(err => err);

};
