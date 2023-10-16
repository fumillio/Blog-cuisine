import React, { useState } from 'react';

const RecipeForm = ({ onRecipeSubmit }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name, image, description };
    onRecipeSubmit(newRecipe);
    setName('');
    setImage('');
    setDescription('');
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la recette"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de l'image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        placeholder="Description de la recette"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="styled-button">Ajouter la recette</button>
    </form>
  );
};

export default RecipeForm;