import axios from 'axios';


export const getAllFilters = async () => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(res => res.data)
        .catch(err => err);

};
export const getDrinks = async (name) => {
    const prevName = name;
    const regex = new RegExp('/ ');
    if (!regex.test(name)) {
        name = name.replace(" ", "_");
    }

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`)
        .then(res => res.data.drinks)
        .catch(err => err);

    return {
        data: response,
        name: prevName,
    }

};
