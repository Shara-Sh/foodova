import foods from "../data/foods.json";
import { CookingPot } from "lucide-react";

function FilterIngredient() {
  const allIngredient = foods.flatMap((food) => food.ingredients);

  const uniqueIngredients = [...new Set(allIngredient)].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className="bg-lightgray flex flex-col gap-3 rounded-xl p-4">
      <h1 className="flex items-center gap-3 px-2 text-2xl font-semibold">
        <CookingPot />
        Ingredient
      </h1>
      <ul className="text-lighttext *:hover:bg-lightgray-200 font-semibold *:cursor-pointer *:rounded-xl *:px-2 *:py-1 *:hover:text-white">
        {uniqueIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterIngredient;
