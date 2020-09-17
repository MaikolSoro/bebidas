import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// create the context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state the provider

  const [idrecipe, saveIdRecipe] = useState(null);
  const [info, saveRecipe] = useState({});

  // once we have a recipe, call the api
  useEffect(() => {
    const getRecipe = async () => {
      if (!idrecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
      const result = await axios.get(url);
      // console.log(resultado.data.drinks[0]);
      saveRecipe(result.data.drinks[0]);
    };
    getRecipe();
  }, [idrecipe]);
  return (
    <ModalContext.Provider
      value={{
        info,
        saveIdRecipe,
        saveRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
