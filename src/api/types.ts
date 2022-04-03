export interface Beer {
  abv: number;
  attenuation_level: number;
  boil_volume: Record<string, number | string>;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: number;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: Record<string, unknown>;
  method: Record<string, unknown>;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: Record<string, string | number>;
}
