import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="bg-darkbg h-screen text-white">
      <div className="mx-auto w-11/12 md:w-10/12">
        <Header />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
