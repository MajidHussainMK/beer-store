import { useState } from "react";
import { useBeers } from "./api/beer";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { BeersList } from "./components/Beers/BeersList";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { BeerInfo } from "./components/Beers/BeerInfo";
import "./App.css";

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
              <Nav title={navTitle} />
              <Header title={headerTitle} />
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

export const navTitle = "All About Beers!";
export const headerTitle = "Get Your Special Beer Here";
