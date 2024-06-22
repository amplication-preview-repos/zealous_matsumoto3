import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutArticlesInput } from "./CommentCreateNestedManyWithoutArticlesInput";

export type ArticleCreateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutArticlesInput;
  content?: string | null;
  title?: string | null;
};
