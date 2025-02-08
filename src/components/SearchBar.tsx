import { Search } from "lucide-react";

type SearchBarProps = {
  searchQuery: string;
  onSearch: (query: string) => void;
};

function SearchBar({ searchQuery, onSearch }: SearchBarProps) {
  return (
    <div className="bg-lightgray flex items-center gap-3 rounded-xl p-4">
      <Search />
      <input
        type="text"
        className="text-lighttext placeholder:text-lighttext flex w-full outline-none"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
