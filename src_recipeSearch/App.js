import React, { useState } from 'react';
import './Main.css';
import Header from './Header';
import Footer from './Footer';
import Axios from 'axios';
import Recipe from './Recipe';
import Alert from './Alert'

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "1544b584";
  const APP_KEY = "693cb97f0dc8ba7bb1b4f3465c601abf";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if(!result.data.more) {
        return setAlert("No food with such name")
      }
      setRecipes(result.data.hits)
      console.log(result)
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  }

  const onChangeInput = (e) => {
    setQuery(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mg-top-bottom">
            <h1 onClick={getData} className="Recipe-heading">Food searching recipe</h1>
            <div className="search-form form-group">
              <form onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert} />}
                <input
                  type="text"
                  placeholder="Search food here..."
                  autoComplete="off"
                  onChange={onChangeInput}
                  value={query}
                  className="form-control"
                />
                <input type="submit" value="Search" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="recipes-block">
            {recipes !== [] && recipes.map((recipe, index) =>
              <Recipe key={index} recipe={recipe} />
            )}
          </div>
        </div>
      </div>
      <Footer />
      <div className="marginCommon"></div>
    </div >
  )
}

export default App