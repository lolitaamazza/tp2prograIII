'use client' //para usar hooks
import Card from './Card';

const CardsGrid = ({ items, title }) => {
  return (
    <section className="main-intro">
      <h2>{title}</h2>
      <p>Let us handle dinner.</p>
      
      <div className="grid-container">
        {items.map((recipe) => (
          <Card 
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            cuisine={recipe.cuisine}
            calories={recipe.caloriesPerServing} // nombre según el JSON de dummyjson
            time={`${recipe.prepTimeMinutes} min`}
            difficulty={recipe.difficulty}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsGrid;
