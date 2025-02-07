import foods from "../data/foods.json";

function FilterCuisine() {
  const allCuisine = foods.flatMap((food) => food.Cuisine);

  const uniqueCuisines = [...new Set(allCuisine)].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className="bg-lightgray flex flex-col gap-3 rounded-xl p-4">
      <h1 className="px-2 text-2xl font-semibold">Cuisine</h1>
      <ul className="text-lighttext *:hover:bg-lightgray-200 font-semibold *:cursor-pointer *:rounded-xl *:px-2 *:py-1 *:hover:text-white">
        {uniqueCuisines.map((cuisine, index) => (
          <li key={index}>{cuisine}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterCuisine;
