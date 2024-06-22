import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type CommentCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  author?: string | null;
  content?: string | null;
};
