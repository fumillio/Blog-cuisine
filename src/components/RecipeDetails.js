import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from './Button';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [newRecipes, setNewRecipes] = useState(JSON.parse(localStorage.getItem('newRecipes')) || []);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe details: ', error);
      }
    };

    fetchRecipe();
  }, [id]);

  const toggleFavorite = () => {
    if (recipe) {
      const isCurrentlyFavorite = favorites.some((favRecipe) => favRecipe.idMeal === recipe.idMeal);
      if (isCurrentlyFavorite) {
        const updatedFavorites = favorites.filter((favRecipe) => favRecipe.idMeal !== recipe.idMeal);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      } else {
        const updatedFavorites = [...favorites, recipe];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }
    }
  };

  const isFavorite = recipe && favorites.some((favRecipe) => favRecipe.idMeal === recipe.idMeal);

  if (!recipe) {
    const newRecipe = newRecipes.find((newRecipe) => newRecipe.name === id);
    if (newRecipe) {
      return (
        <div className="recipe-detail-container">
          <h2>{newRecipe.name}</h2>
          <img src={newRecipe.image} alt={newRecipe.name} />
          <p>{newRecipe.description}</p>
          {isFavorite ? (
            <p>Cette recette est dans vos favoris!</p>
          ) : (
            <button className='Favbutton' onClick={toggleFavorite}>Ajouter aux favoris</button>
          )}
          <Button to="/" />
        </div>
      );
    } else {
      return <div>Chargement...</div>;
    }
  }

  return (
    <div className="recipe-detail-container">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <button className='Favbutton' onClick={toggleFavorite}>
        {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      </button>
      <Button to="/" />
    </div>
  );
};

export default RecipeDetail;