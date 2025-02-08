import { CookingPot } from "lucide-react";
import { Utensils } from "lucide-react";
import { Soup } from "lucide-react";

type FoodCardProps = {
  name: string;
  description: string;
  image: number;
  ingredientTags: string[];
  mealTypeTags: string[];
  cuisineTags: string[];
};

function FoodCard({
  name,
  description,
  image,
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
    <div className="bg-lightgray flex h-[336] flex-col gap-3 rounded-xl p-4">
      <div className="flex gap-3">
        <img
          src={`../assets/foods/${image}.png`}
          alt={name}
          className="aspect-square w-28 rounded-xl"
        />
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-lighttext">{description}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <CookingPot size={20} />
          <ul className="flex flex-wrap gap-3">
            {uniqueIngredientTags.map((tag, index) => (
              <li key={index} className="bg-darkgray rounded-md px-1.5 py-1">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Utensils size={20} />
          <ul className="flex flex-wrap gap-3">
            {uniqueMealTypeTags.map((tag, index) => (
              <li key={index} className="bg-darkgray rounded-md px-1.5 py-1">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Soup size={20} />
          <ul className="flex flex-wrap gap-3">
            {uniqueCuisineTags.map((tag, index) => (
              <li key={index} className="bg-darkgray rounded-md px-1.5 py-1">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
