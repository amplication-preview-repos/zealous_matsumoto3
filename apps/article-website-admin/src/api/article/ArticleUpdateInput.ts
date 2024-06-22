import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutArticlesInput } from "./CommentUpdateManyWithoutArticlesInput";

export type ArticleUpdateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutArticlesInput;
  content?: string | null;
  title?: string | null;
};
