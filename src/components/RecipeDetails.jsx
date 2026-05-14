const RecipeDetails = ({ ingredients, instructions }) => { /* componente que muestra los detalles de la receta */
  return (
    <main className="recipe-details-container"> 
      <section className="recipe-details-grid">
        <div className="ingredients-panel">
          <div className="panel-header">
            <h2>INGREDIENTS</h2>
            <span className="decoration-line"></span>
          </div>
          <ul className="clean-list ingredients-list">
            {ingredients?.map((ing, i) => <li key={i}>{ing}</li>)} {/* mapeo de ingredientes. ? significa que si ingredients es undefined, no se rompe el código. ing e i son el valor y el índice respectivamente. li key={i} es la clave única para cada elemento de la lista */}
          </ul>
        </div>

        <div className="instructions-panel">
          <div className="panel-header">
            <h2>STEPS</h2>
            <span className="decoration-line"></span>
          </div>
          <ol className="clean-list instructions-steps">
            {instructions?.map((paso, i) => ( 
              <li key={i}> 
                <h3>{i === 0 ? "Prepare" : `Step ${i + 1}`}</h3> {/* Título de cada paso . i + 1 para mostrar el número de paso */}
                <p>{paso}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default RecipeDetails;