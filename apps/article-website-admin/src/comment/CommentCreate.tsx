import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ArticleTitle } from "../article/ArticleTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
