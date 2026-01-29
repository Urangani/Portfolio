// src/components/Skills.jsx
import React from "react";
import CategoryCard from "./CategoryCard";
import skills from "../data/skills.json"; // adjust path as needed

export default function Skills() {
  return (
    <section className="py-16 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold mb-10">Skills</h2>

      <div className="flex flex-nowrap gap-4 overflow-x-auto md:flex-wrap scrollbar-hide">
        {skills.categories.map((cat) => (
          <CategoryCard key={cat.id} title={cat.title} items={cat.items} />
        ))}
      </div>
    </section>
  );
}
