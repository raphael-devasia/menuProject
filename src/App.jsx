import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];


const App = () => {
console.log(allCategories);
const [items,setItems]=useState(menu)
const [categories,setCategories]=useState(allCategories)

const filterCategory = (category) => {

if(category==="all"){setItems(menu)
return;}

  const newItems = menu.filter((item) => item.category === category);
  setItems(newItems);
};

  return (
    <main>
      <Title text={"menu"} />
      <Categories categories={categories} filterCategory={filterCategory} />
      <Menu items={items} />
    </main>
  );
    
};
export default App;
