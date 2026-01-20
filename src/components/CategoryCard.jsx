import React from "react";

// Reusable Card Component
const CategoryCard = ({ title, items }) => {
  return (
    <div className="bg-zinc-800 shadow-md rounded-lg p-6 w-60">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <ul className="flex flex-wrap">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-black text-white text-center text-sm rounded-lg m-2 p-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CategoryCard;
