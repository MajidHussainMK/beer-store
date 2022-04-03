# PUNK API

![](https://github.com/MajidHussainMK/beer-store/main/Homepage.png)

## The Project :large_golden_star:
A React JS app where users can browse the entire BrewDog beers catalogue.
[Check out the Live Demo Here](https://majidhussainmk.github.io/beer-store/)

The app was created by fetching Brewdog's Punk API and storing the object returned in a State. Users are able to search their favourite beers by name, tagline or PH value.

```
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
```
