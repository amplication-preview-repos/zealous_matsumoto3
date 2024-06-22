import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";

export type Article = {
  author: string | null;
  category?: Category | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
