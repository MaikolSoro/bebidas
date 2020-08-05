import React, { createContext, useState } from 'react';

export const RecetasContest = createContext ();


const RecetasProvider = (props) => {

	const [recetas, guardarRecetas] = useState([]);
	const [busqueda, buscarRecetas] = useState({
		nombre: '',
		categoria: ''
	})
	return (  
		<RecetasContest.Provider
			value={{
				buscarRecetas
			}}
		>
			{ props.children }
		</RecetasContest.Provider>
	);
}
 
export default RecetasProvider; 