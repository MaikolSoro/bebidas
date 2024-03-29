import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, saveRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: "",
    category: "",
  }); // git
  const [consult, saveConsult] = useState(false);

  const { name, category } = search;

  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        const result = await axios.get(url);
        //  console.log(result.data.drinks);
        saveRecipes(result.data.drinks);
      };

      getRecipes();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        searchRecipes,
        saveConsult,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
