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
  const [isFilter, setIsFilter] = useState(window.innerWidth >= 1024);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedMealType, setSelectedMealType] = useState<string | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const filteredFoods = foods
    .filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((food) =>
      selectedIngredients.length === 0
        ? true // If no ingredients are selected, show all
        : selectedIngredients.every((ingredient) =>
            food.ingredients.includes(ingredient),
          ),
    )
    .filter((food) =>
      selectedMealType === null
        ? true
        : food.mealType.includes(selectedMealType),
    )
    .filter((food) =>
      selectedCuisine === null ? true : food.cuisine.includes(selectedCuisine),
    )
    .sort((a, b) => b.id - a.id); // Sort by ID (newest first)

  const handleIngredientSelect = (ingredient: string | null) => {
    if (ingredient === null) {
      // Handle clearing all selected ingredients
      setSelectedIngredients([]);
    } else {
      setSelectedIngredients(
        (prevSelected) =>
          prevSelected.includes(ingredient)
            ? prevSelected.filter((item) => item !== ingredient) // Deselect if already selected
            : [...prevSelected, ingredient], // Add if not selected
      );
    }
  };

  const handleMealTypeSelect = (mealType: string | null) => {
    setSelectedMealType(mealType);
  };

  const handleCuisineSelect = (cuisine: string | null) => {
    setSelectedCuisine(cuisine);
  };

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
                <FilterIngredient
                  onIngredientSelect={handleIngredientSelect}
                  selectedIngredients={selectedIngredients}
                />
                <FilterMealType
                  onMealTypeSelect={handleMealTypeSelect}
                  selectedMealType={selectedMealType}
                />
                <FilterCuisine
                  onCuisineSelect={handleCuisineSelect}
                  selectedCuisine={selectedCuisine}
                />
              </div>
            ) : null}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {filteredFoods.length > 0 ? (
                [...filteredFoods]
                  .sort((a, b) => b.id - a.id)
                  .map((food, index) => (
                    <FoodCard
                      key={index}
                      name={food.name}
                      description={food.description}
                      image={food.id}
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
          <div className="hidden space-y-4 md:block md:w-1/4">
            <FilterIngredient
              onIngredientSelect={handleIngredientSelect}
              selectedIngredients={selectedIngredients}
            />
            <FilterMealType
              onMealTypeSelect={handleMealTypeSelect}
              selectedMealType={selectedMealType}
            />
            <FilterCuisine
              onCuisineSelect={handleCuisineSelect}
              selectedCuisine={selectedCuisine}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
