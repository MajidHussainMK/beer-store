import { useEffect, useMemo, useState } from "react";
import { Beer } from "./types";
import { baseUrl, isNil } from "./_";

export const useBeers = () => {
  const [data, setData] = useState<Beer[]>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${baseUrl}/beers`);
      if (response.ok) {
        setData(await response.json());
      } else {
        setError(response.statusText || (await response.json()).message);
      }
    }
    fetchData();
  }, []);

  const isLoading = isNil(data) && error === "";

  return { data, error, isLoading };
};

export const useBeer = (id: number | string | undefined) => {
  const [data, setData] = useState<Beer>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/beers/${id}`);
        if (response.ok) {
          const result: Beer[] = await response.json();
          setData(result?.[0]);
        } else {
          setError(response.statusText || (await response.json()).message);
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (id) fetchData();
  }, [id]);

  const isLoading = isNil(data) && error === "";

  return { data, error, isLoading };
};

export const useFilteredBeers = (
  beers: Beer[] | undefined,
  search: string,
  filterByPH: boolean,
  filterByABV: boolean
): Beer[] | undefined => {
  return useMemo(() => {
    if (!beers) return undefined;
    return beers.filter((beer) => {
      let filterBeer = true;

      if (search) {
        filterBeer =
          beer.name.includes(search) ||
          beer.tagline.includes(search) ||
          beer.ph?.toString().includes(search);
      }

      if (filterBeer && filterByPH) {
        filterBeer = beer.ph > 4;
      }

      if (filterBeer && filterByABV) {
        filterBeer = beer.abv < 5;
      }

      return filterBeer;
    });
  }, [beers, search, filterByPH, filterByABV]);
};
