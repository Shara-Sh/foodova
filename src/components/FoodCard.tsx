type FoodCardProps = {
  name: string;
  description: string;
  ingredientTags: string[];
  mealTypeTags: string[];
  cuisineTags: string[];
};

function FoodCard({
  name,
  description,
  ingredientTags,
  mealTypeTags,
  cuisineTags,
}: FoodCardProps) {
  const uniqueIngredientTags = [...new Set(ingredientTags)].sort((a, b) =>
    a.localeCompare(b),
  );

  const uniqueMealTypeTags = [...new Set(mealTypeTags)].sort((a, b) =>
    a.localeCompare(b),
  );

  const uniqueCuisineTags = [...new Set(cuisineTags)].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className="bg-lightgray flex h-96 flex-col gap-3 rounded-xl p-4">
      <div className="flex gap-3">
        <img
          src="https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251_1280.jpg"
          alt={name}
          className="aspect-square w-28 rounded-xl"
        />
        <h1 className="text-xl font-semibold">{name}</h1>
      </div>
      <div className="text-lighttext flex-1">
        <p>{description}</p>
      </div>
      <div className="space-y-1">
        <ul className="flex flex-wrap gap-3">
          {uniqueIngredientTags.map((tag, index) => (
            <li key={index} className="bg-darkgray rounded-md px-2 py-1.5">
              {tag}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3">
          {uniqueMealTypeTags.map((tag, index) => (
            <li key={index} className="bg-darkgray rounded-md px-2 py-1.5">
              {tag}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3">
          {uniqueCuisineTags.map((tag, index) => (
            <li key={index} className="bg-darkgray rounded-md px-2 py-1.5">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FoodCard;
