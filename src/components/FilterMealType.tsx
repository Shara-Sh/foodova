import foods from "../data/foods.json";
import { Utensils } from "lucide-react";

function FilterMealType() {
  const allMealType = foods.flatMap((food) => food["mealType"]);

  const uniqueMealTypes = [...new Set(allMealType)].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className="bg-lightgray flex flex-col gap-3 rounded-xl p-4">
      <h1 className="flex items-center gap-3 px-2 text-2xl font-semibold">
        <Utensils />
        Meal Type
      </h1>
      <ul className="text-lighttext *:hover:bg-lightgray-200 font-semibold *:cursor-pointer *:rounded-xl *:px-2 *:py-1 *:hover:text-white">
        {uniqueMealTypes.map((mealType, index) => (
          <li key={index}>{mealType}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterMealType;
