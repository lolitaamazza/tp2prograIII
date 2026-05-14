const RecipeHero = ({ item }) => { /* componente que muestra la sección hero de la receta */
  return (
    <section className="hero-split">
      <div className="hero-text-block">
        <span className="recipe-badge">{item.cuisine} Classic</span>
        <h1 className="main-title">{item.name}</h1>
        <p className="recipe-subtitle">SIMPLE • FRESH • ICONIC</p>
        
        <div className="action-bar">
          <button className="add-cart-btn">Add to Cart</button>
          <div className="meta-pills">
            <span>{item.rating} ★</span>
            <span>{item.caloriesPerServing} kcal</span>
            <span>{item.prepTimeMinutes} min</span>
          </div>
        </div>
      </div>

      <div className="hero-visual-block">
        <div className="image-bleed">
          <img src={item.image} alt={item.name} /> {/* imagen y nombre de la receta */}
        </div>
      </div>
    </section>
  );
};

export default RecipeHero;