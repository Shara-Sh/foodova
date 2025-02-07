import { useEffect, useState } from "react";
import FilterCuisine from "./components/FilterCuisine";
import FilterIngredient from "./components/FilterIngredient";
import FilterMealType from "./components/FilterMealType";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FoodCard from "./components/FoodCard";
import foods from "./data/foods.json";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isFilter, setIsFilter] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);

      // Always true for laptops, false for mobile
      if (window.innerWidth >= 1024) {
        setIsFilter(true);
      } else {
        setIsFilter(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-4 text-white">
      <div className="mx-auto w-11/12 md:w-10/12">
        <Header />
        <div className="flex flex-col gap-4 md:flex-row-reverse">
          <div className="flex-1 space-y-4">
            <SearchBar />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {foods.map((food, index) => (
                <FoodCard
                  key={index}
                  name={food.name}
                  description={food.description}
                  ingredientTags={food.ingredients}
                  mealTypeTags={food["mealType"]}
                  cuisineTags={food.cuisine}
                />
              ))}
            </div>
          </div>
          <button
            className="bg-lightgray text-lighttext hover:bg-lightgray-200 w-fit cursor-pointer rounded-xl px-4 py-2 hover:text-white md:hidden"
            onClick={() => setIsFilter(!isFilter)}
          >
            Filter
          </button>
          {isFilter ? (
            <div className="space-y-4 md:w-1/4">
              <FilterIngredient />
              <FilterMealType />
              <FilterCuisine />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
