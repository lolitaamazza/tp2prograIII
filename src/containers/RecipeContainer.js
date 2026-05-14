'use client'; /*significa que se puede usar hooks de estado y efectos*/

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'; 
import RecipeHero from '../components/RecipeHero';
import RecipeDetails from '../components/RecipeDetails';

const RecipeContainer = ({ id }) => { /*se encarga de mostrar una receta en particular. recibe el id como una prop.*/
  const [item, setItem] = useState({}); /*estado para almacenar la receta*/
  const [loading, setLoading] = useState(true); /*estado para manejar la carga*/
  const [notFound, setNotFound] = useState(false); /*estado para manejar el no encontrado*/

 const handleGetRecipe = async () => { /*función async que usa axios para llamar a la API de dummyjson. pide la receta con el id que recibimos como prop*/
    try {
      console.log("Buscando receta con ID:", id); //dirá si el ID llega bien

      const response = await axios.get(`https://dummyjson.com/recipes/${id}`); //realizo la petición

      console.log("Respuesta de la API:", response.data); //muestro la respuesta de la API

      if (response.data && response.data.id) { /*si la respuesta tiene datos y el id existe*/
        setItem(response.data); /*almaceno la receta en item*/
        setLoading(false); /*indico que la carga terminó*/
      } else {
        setNotFound(true); /*indico que no se encontró la receta*/
        setLoading(false); /*indico que la carga terminó*/
      }
    } catch (error) { /*si hay un error*/
      console.error("Error en la petición:", error);
      setNotFound(true); /*indico que no se encontró la receta*/
      setLoading(false); /*indico que la carga terminó*/
    }
  };

  useEffect(() => { /*el useEffect aca tiene a [id] en su array de dependencias. esto significa que si el usuario navega de la receta 5 a la receta 10, el componente se da cuenta y vuelve a buscar los datos automáticamente.*/
    handleGetRecipe();
  }, [id]);

  if (notFound) { /*si no se encontró la receta*/
    return (
      <div className="main-intro"> 
        <h2>404 - NOT FOUND</h2>
        <Link href="/" className="back-link">← Go back to home</Link>
      </div>
    );
  }

  if (loading) return <div className="main-intro"><h2>Cargando receta...</h2></div>; /*si estoy cargando, muestro el mensaje de carga*/

  return ( /*si la receta fue encontrada y no estoy cargando, muestro los detalles de la receta*/
    <div className="detail-body">
      <nav className="navbar detail-nav">
        <div className="nav-left">
          <Link href="/" className="back-link">← Back</Link>
        </div>
      </nav>

      {/* Componente que abstrae la sección del Hero (la parte naranja y la imagen) */}
      <RecipeHero item={item} />

      {/* Componente que abstrae la sección de detalles (Ingredientes y Pasos) */}
      <RecipeDetails 
        ingredients={item.ingredients} 
        instructions={item.instructions} 
      />
    </div>
  );
};

export default RecipeContainer;