import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type CommentUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  author?: string | null;
  content?: string | null;
};
