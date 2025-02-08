import { useState } from "react";
import FilterCuisine from "./components/FilterCuisine";
import FilterIngredient from "./components/FilterIngredient";
import FilterMealType from "./components/FilterMealType";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FoodCard from "./components/FoodCard";
import foods from "./data/foods.json";
import { Filter } from "lucide-react";

function App() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isFilter, setIsFilter] = useState(window.innerWidth >= 1024);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);

  //     // Always true for laptops, false for mobile
  //     if (window.innerWidth >= 1024) {
  //       setIsFilter(true);
  //     } else {
  //       setIsFilter(false);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="mb-4 text-white">
      <div className="mx-auto w-11/12 md:w-10/12">
        <Header />
        <div className="flex flex-col gap-4 md:flex-row-reverse">
          <div className="flex-1 space-y-4">
            <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
            <button
              className={`bg-lightgray text-lighttext hover:bg-lightgray-200 flex w-fit cursor-pointer items-center gap-2 rounded-xl px-4 py-2 hover:text-white md:hidden ${isFilter ? "bg-white" : null}`}
              onClick={() => setIsFilter(!isFilter)}
            >
              <Filter size={20} />
              Filter
            </button>
            {isFilter ? (
              <div className="space-y-4 md:hidden">
                <FilterIngredient />
                <FilterMealType />
                <FilterCuisine />
              </div>
            ) : null}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFoods.length > 0 ? (
                [...filteredFoods]
                  .sort((a, b) => b.id - a.id)
                  .map((food, index) => (
                    <FoodCard
                      key={index}
                      name={food.name}
                      description={food.description}
                      ingredientTags={food.ingredients}
                      mealTypeTags={food["mealType"]}
                      cuisineTags={food.cuisine}
                    />
                  ))
              ) : (
                <p className="text-lightgray-200 text-center font-semibold md:text-left">
                  No results found.
                </p>
              )}
            </div>
          </div>
          <div className="hidden space-y-4 md:w-1/4">
            <FilterIngredient />
            <FilterMealType />
            <FilterCuisine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
