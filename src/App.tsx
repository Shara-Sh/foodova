import FilterIngredient from "./components/FilterIngredient";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="bg-darkbg h-screen text-white">
      <div className="mx-auto w-11/12 md:w-10/12">
        <Header />
        <div className="flex flex-col gap-4 md:flex-row-reverse">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="md:w-1/4">
            <FilterIngredient />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
