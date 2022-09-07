import {RECIPE_KEY} from '@env';
import axios from 'axios';


export const getRecipe = async () => {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=cherry&apiKey=${RECIPE_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
       throw new Error(error);
    }
};

