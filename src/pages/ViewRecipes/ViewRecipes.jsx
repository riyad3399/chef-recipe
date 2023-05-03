import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ViewRecipes = () => {

    const allRecipes = useLoaderData()
    console.log(allRecipes.recipes);

    return (
        <div>
           <Recipe allRecipes={allRecipes}></Recipe>
        </div>
    );
};

export default ViewRecipes;