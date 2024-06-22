import { Article } from "../article/Article";

export type Comment = {
  article?: Article | null;
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
