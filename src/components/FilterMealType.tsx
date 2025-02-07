import foods from "../data/foods.json";

function FilterMealType() {
  const allMealType = foods.flatMap((food) => food["Meal Type"]);

  const uniqueIngredients = [...new Set(allMealType)].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className="bg-lightgray flex flex-col gap-3 rounded-xl p-4">
      <h1 className="px-2 text-2xl font-semibold">Meal Type</h1>
      <ul className="text-lighttext *:hover:bg-lightgray-200 font-semibold *:cursor-pointer *:rounded-xl *:px-2 *:py-1 *:hover:text-white">
        {uniqueIngredients.map((Ingredient, index) => (
          <li key={index}>{Ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterMealType;
