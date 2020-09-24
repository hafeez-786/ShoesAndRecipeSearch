import React, { useState } from 'react'
import RecipeDetail from './RecipeDetails'

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div>
      <div className="recipe">
        <img src={image} alt={label} className="img-fluid" />
        <h2>{label}</h2>
        <div><a href={url} target="_blank">URL</a></div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShow(!show)}
          >ingredients
        </button>
        </div>
      </div>
      {show && <RecipeDetail ingredients={ingredients} />}
    </div>
  )
}

export default Recipe