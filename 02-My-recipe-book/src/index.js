import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const foodArray = [
  {
    name: "Garlic-cheese loaf",
    ingredients: "Kolach, Parmesan, Cheddar, Butter, Garlic",
    level: 1,
    time: "6 hours",
    photo: "./pictures/garlic_bread.JPEG",
  },
  {
    name: "Duck liver patée",
    ingredients: "Duck liver, Heavy cream, Sugar, Gel",
    level: 1,
    time: "4 hours",
    photo: "./pictures/liver_pate.JPEG",
  },
  {
    name: "Shrimp noodles",
    ingredients: "Shrimp, Garlic, Lemon, White wine, Parsley, Chilli, Noodles",
    level: 1,
    time: "1 hours",
    photo: "./pictures/shrimp_noodles.jpg",
  },
  {
    name: "Egg muffin & salad",
    ingredients:
      "Eggs, Tomatoes, Spinach, Mixed salad, Avocado, Lemon, Garlic, Parmesan",
    level: 2,
    time: "2 hours",
    photo: "./pictures/super_salad.jpg",
  },
  {
    name: "Steak & pakchoi",
    ingredients: "Beef steak, Pakchoi, Honey, Mixed salald, Walnut, Rice",
    level: 2,
    time: "1 hours",
    photo: "./pictures/steak_rice.JPEG",
  },
  {
    name: "Chicken & rice",
    ingredients: "Chicken thigs, Rice, Carrots, Onions, Salad",
    level: 1,
    time: "4 hours",
    photo: "./pictures/chicken_rice.JPEG",
  },
  {
    name: "Slow-cooked ribs",
    ingredients: "Ribs, Potatoes, Salad-mix, Honey, Beer, Spices",
    level: 3,
    time: "12 hours",
    photo: "./pictures/ribs.JPEG",
  },
  {
    name: "Pancakes",
    ingredients: "Flour, Eggs, Biocarbonate, Berries, Honey, Walnuts",
    level: 1,
    time: "1 hour",
    photo: "./pictures/pancakes.jpg",
  },
  {
    name: "Oat-brownies",
    ingredients: "Oats, Flour, Cacaoo, Chocolate chips",
    level: 2,
    time: "2 hours",
    photo: "./pictures/oat_brownies.JPEG",
  },
  {
    name: "Sour-dough bread",
    ingredients: "Sour-dough starter, Flour, Water, Salt",
    level: 2,
    time: "12 hours",
    photo: "./pictures/bread.JPEG",
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <FoodList />
      <Footer />
    </div>
  );
};

const FoodList = () => {
  return (
    <div className="foodList">
      <h2>My Original Recipe book</h2>
      <div className="foods">
        {foodArray.map((food) => (
          <Food foodObject={food} key={food.name} />
        ))}
      </div>
    </div>
  );
};

const Food = ({ foodObject }) => {
  const lvl = "Level: ";
  return (
    <li className="food">
      <img src={foodObject.photo} alt={foodObject.name}></img>
      <div>
        <h3>{foodObject.name}</h3>
        <p>{foodObject.ingredients}</p>
        <p>{foodObject.level === 1 && `${lvl} Easy cooks`}</p>
        <p>{foodObject.level === 2 && `${lvl} Home cooks`}</p>
        <p>{foodObject.level === 3 && `${lvl} Pro Chefs`}</p>
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Daniel's Bistro & Pub</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>If you like them follow for the full recipes & videos!</p>
      <p>
        <Follow />
      </p>
    </footer>
  );
};

const Follow = () => {
  return (
    <div className="follow">
      <button className="btn">Follow</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
