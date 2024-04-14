import { Season } from "./Season";

export type SeasonsResponse = {
  docs: Season[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};