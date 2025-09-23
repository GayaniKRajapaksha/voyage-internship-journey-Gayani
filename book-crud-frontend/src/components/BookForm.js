import React, { useState } from "react";

export default function BookForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    if (!formData.price) newErrors.price = "Price is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <p>{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && <p>{errors.author}</p>}
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <p>{errors.price}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
