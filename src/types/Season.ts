import { Episode } from "./Episode";

export type Season = {
  movieId: number;
  number: number;
  episodesCount: number;
  episodes: Episode[];
  description: string;
};
