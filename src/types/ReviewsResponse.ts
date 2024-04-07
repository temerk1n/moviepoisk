import { Review } from "./Review";

export type ReviewsResponse = {
  docs: Review[];
  total: number;
  page: number;
  limit: number;
  pages: number;
};
