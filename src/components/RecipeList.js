import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RecipeForm from './RecipeForm';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipes, setNewRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showAuthmodal, setShowAuthModal] = useState(false);

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);
  const validAuthModal = () => setShowAuthModal(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/search.php?s='
        );
        setRecipes(response.data.meals);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const storedNewRecipes = JSON.parse(localStorage.getItem('newRecipes'));
    if (storedNewRecipes) {
      setNewRecipes(storedNewRecipes);
    }

    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const handleRecipeSubmit = (newRecipe) => {
    const updatedNewRecipes = [...newRecipes, newRecipe];
    setNewRecipes(updatedNewRecipes);

    localStorage.setItem('newRecipes', JSON.stringify(updatedNewRecipes));
  };

  const isFavoriteRecipe = (recipeId) => {
    return favorites.some((favRecipe) => favRecipe.idMeal === recipeId);
  };
  
  const [email, setEmail] = useState('');
  const isEmailFilled = /^[^\s@]+@[^\s@]+[.]+[^\s@]+$/.test(email);

  const [password, setPassword] = useState('');
  const isPasswordFilled = /^(?=.*[A-Z])(?=.*\d).{12,}$/.test(password);

  const isFormValid = isEmailFilled && isPasswordFilled;

  return (
    <div className="blog">
      <div className="header">
        <h1>Le blog de Cuisine</h1>
        <button className="button" onClick={openAuthModal}>S'identifier</button>
      </div>
      {showAuthmodal && (
        <div className='recipe-form'>
          <h1>Authentification</h1>
          <button className='button' onClick={closeAuthModal}>Fermer</button>
          <form onSubmit={validAuthModal}>
            <div>
              <label>Nom</label>
              <input type="text" name="name" required/>
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
              <label>Mot de passe (doit contenir majuscule, chiffre et 12 caractères au moins)</label>
              <input type="password" id ="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button className='' type="submit" disabled={!isFormValid} >S'enregistrer</button>
          </form>
        </div>
      )}
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
            {isFavoriteRecipe(recipe.idMeal) && (
              <span className="star-icon">★</span>
            )}
          </div>
        ))}
        {newRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} />
            <Link to={`/recipe/${recipe.name}`}>{recipe.name}</Link>
            {isFavoriteRecipe(recipe.name) && (
              <span className="star-icon">★</span>
            )}
          </div>
        ))}
      </div>
      <RecipeForm onRecipeSubmit={handleRecipeSubmit} />
    </div>
  );
};

export default RecipeList;