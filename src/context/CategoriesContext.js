import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the Context
export const CategoriesContext = createContext();

// Provider is where the functions and state are located
const CategoriesProvider = (props) => {
  // create the state of the Context
  const [categories, saveCategories] = useState([]);

  // execute the call to the api
  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categories = await axios.get(url);

      saveCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesProvider;
