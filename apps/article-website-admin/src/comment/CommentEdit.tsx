import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ArticleTitle } from "../article/ArticleTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="article.id" reference="Article" label="article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
