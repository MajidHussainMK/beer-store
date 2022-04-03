export const baseUrl = "https://api.punkapi.com/v2";

export const isNil = (value: any): value is null | undefined =>
  value === null || value === undefined;
