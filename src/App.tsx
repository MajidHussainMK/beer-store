import { useState } from "react";
import { useBeers } from "./api/beer";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { BeersList } from "./components/Beers/BeersList";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { BeerInfo } from "./components/Beers/BeerInfo";

function App() {
  const { data } = useBeers();
  const [search, setSearch] = useState("");

  const filteredBeers =
    data &&
    data.filter((beer) => {
      return (
        beer.name.includes(search) ||
        beer.tagline.includes(search) ||
        beer.ph?.toString().includes(search)
      );
    });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav title="All About Beers!" />
              <Header title="Get Your Special Beer Here" />
              <Search
                value={search}
                setValue={setSearch}
                placeholder="Search by name, tagline or PH value..."
              />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<BeersList beers={filteredBeers} />} />
          <Route path="/:beerId" element={<BeerInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
