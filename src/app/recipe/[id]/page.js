import RecipeContainer from '@/containers/RecipeContainer';

export default async function RecipePage({ params }) {
  // agrego "await" para esperar a que los parámetros carguen
  const { id } = await params; 
  
  return <RecipeContainer id={id} />;
}