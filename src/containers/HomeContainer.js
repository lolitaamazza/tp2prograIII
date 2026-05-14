/*este contenedor se encarga de mostrar todas las recetas cuando entro a la página*/

'use client';

import { useState, useEffect } from 'react'; 
import CardsGrid from '@/components/CardsGrid';
import Hero from '@/components/Hero'; 
import axios from 'axios';

const HomeContainer = () => {
  const [items, setItems] = useState([]); /*estado para almacenar las recetas*/
  const [loading, setLoading] = useState(true); /*estado para manejar la carga*/
  const [error, setError] = useState(false); /*estado para manejar errores*/

  const handleGetItems = async () => { /*función async que usa axios para llamar a la API de dummyjson. pide todas las recetas*/
    try { /*intento obtener las recetas*/
      const response = await axios.get('https://dummyjson.com/recipes?limit=0'); /*realizo la petición*/
      setItems(response.data.recipes); /*almaceno las recetas en items*/
      setLoading(false); /*indico que la carga termino*/
    } catch (error) { /*si hay un error*/
      setError(true); /*indico que hubo un error*/
      setLoading(false); /*indico que la carga termino*/
    }
  };

  useEffect(() => { /*este hook le dice a react: "en cuanto este componente aparezca en pantalla por primera vez, ejecuta handleGetItems"*/
    handleGetItems();
  }, []); /*dependencias vacías significa que solo se ejecuta una vez al montar el componente*/

  return ( /*renderizado condicional*/
    <>
      <Hero /> 
      <main> 
        {!loading && ( /*si no estoy cargando, muestro las recetas. si estoy cargando, muestro el mensaje de carga. si hay error, muestro el mensaje de error.*/
          <CardsGrid items={items} title='A lot on your plate?' />
        )}
        {loading && <div className="loading-state">LOADING....</div>}
        {error && <div className="error-state">Hubo un error</div>}
      </main>
    </>
  );
};

export default HomeContainer;
