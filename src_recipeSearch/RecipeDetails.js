import React from 'react'

const RecipeDetail = ({ ingredients }) => {
  return (
    <div className="ingredientList-block">
      {
        ingredients.map((ingredient, index) => {
          return (
            <div>
              <ul key={index} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight - {ingredient.weight}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}
export default RecipeDetail