import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "../utils/validation";

export default function BookForm({ initialValues, onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(bookSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input {...register("title")} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div>
        <label>Author</label>
        <input {...register("author")} />
        {errors.author && <span>{errors.author.message}</span>}
      </div>
      <div>
        <label>Price</label>
        <input type="number" {...register("price")} />
        {errors.price && <span>{errors.price.message}</span>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
