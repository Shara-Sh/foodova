import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="bg-lightgray flex items-center gap-3 rounded-xl p-4">
      <Search />
      <input
        type="text"
        className="text-lighttext placeholder:text-lighttext flex w-full outline-none"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
