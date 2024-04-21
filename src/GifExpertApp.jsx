import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;
    setCategories([ newValue, ...categories]);
  };

  const [categories, setCategories] = useState(["croquetas"]);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid 
          key={category} 
          category={category} />
      ))}

    </>
  );
};
export default GifExpertApp;
