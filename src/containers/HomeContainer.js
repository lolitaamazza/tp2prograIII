'use client';

import { useState, useEffect } from 'react';
import CardsGrid from '@/components/CardsGrid';
import axios from 'axios';

const HomeContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleGetItems = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes?limit=0');
      const data = response.data.recipes;
      console.log(data);
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.log('Hubo un error', error);
      setError(true);
      setErrorMsg('Hubo un error');
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <div>
      <section className='bg-slate-900'>
        {!loading && <CardsGrid items={items} title='A lot on your plate?' />}
        {loading && <div>LOADING....</div>}
        {error !== '' && <div>{errorMsg}</div>}
      </section>
    </div>
  );
};

export default HomeContainer;
