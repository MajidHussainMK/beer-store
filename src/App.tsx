import { useState } from "react";
import { useBeers, useFilteredBeers } from "./api/beer";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { BeersList } from "./components/Beers/BeersList";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { BeerInfo } from "./components/Beers/BeerInfo";
import { Filters } from "./components/Filters";
import "./App.css";

function App() {
  const { data, isLoading } = useBeers();
  const [search, setSearch] = useState("");
  const [filterByPH, setFilterByPH] = useState(false);
  const [filterByABV, setFilterByABV] = useState(false);

  const filteredBeers = useFilteredBeers(data, search, filterByABV, filterByPH);

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
              <Filters
                onAction={{
                  filterByABV: setFilterByABV,
                  filterByPH: setFilterByPH,
                }}
              />
              <Outlet />
            </>
          }
        >
          <Route
            path="/"
            element={<BeersList beers={filteredBeers} isLoading={isLoading} />}
          />
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
