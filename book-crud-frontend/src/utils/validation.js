import * as yup from "yup";

export const bookSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  price: yup.number().required("Price is required").positive("Price must be positive"),
});
