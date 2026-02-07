import React from "react";

// Reusable Card Component
const CategoryCard = ({ title, items }) => {
  return (
    <div className=" shadow-md border border-accent rounded-lg p-6  bg-secondary">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <ul className="flex flex-wrap">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-accent border border-zinc-800 text-white text-center text-sm rounded-lg m-2 p-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CategoryCard;
