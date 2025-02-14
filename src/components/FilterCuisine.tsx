import foods from "../data/foods.json";
import { Soup } from "lucide-react";

type FilterCuisineProps = {
  onCuisineSelect: (ingredient: string | null) => void;
  selectedCuisine: string | null;
};

function FilterCuisine({
  onCuisineSelect,
  selectedCuisine,
}: FilterCuisineProps) {
  const allCuisine = foods.flatMap((food) => food.cuisine);

  const uniqueCuisines = [...new Set(allCuisine)].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className="bg-lightgray flex flex-col gap-3 rounded-xl p-4">
      <h1 className="flex items-center gap-3 px-2 text-2xl font-semibold">
        <Soup />
        Cuisine
      </h1>
      <ul className="text-lighttext *:hover:bg-lightgray-200 space-y-1 font-semibold *:cursor-pointer *:rounded-xl *:px-2 *:py-1 *:hover:text-white">
        {uniqueCuisines.map((cuisine, index) => (
          <li
            key={index}
            onClick={() =>
              onCuisineSelect(selectedCuisine === cuisine ? null : cuisine)
            }
            className={`${selectedCuisine === cuisine ? "bg-white" : ""}`}
          >
            {cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterCuisine;
