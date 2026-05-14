'use client' //para usar hooks
import Image from 'next/image';
import Link from 'next/link';

// recibimos las "props" básicas
const Card = ({ id, name, cuisine, calories, image, time, difficulty }) => {
  return (
    <article className="recipe-card">
      {/* usamos Link para que al hacer clic nos lleve a la receta */}
      <Link href={`/recipe/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        
        <div className="img-container">
          <Image 
            src={image} 
            alt={name} 
            width={300} 
            height={300} 
          />
        </div>

        <div className="card-content">
          <h3>{name}</h3>
          <p>Cocina: <span>{cuisine}</span></p>
          <p>Calorías: <span>{calories}</span> kcal</p>
        </div>

        <div className="card-footer">
          <button className="add-btn">Add to cart</button>
          <div className="meta">
            <span>{time}</span>
            <span>{difficulty}</span>
          </div>
        </div>

      </Link>
    </article>
  );
};

export default Card;
