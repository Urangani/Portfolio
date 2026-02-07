// src/components/Skills.jsx
import React from "react";
import CategoryCard from "./CategoryCard";
import skills from "../data/skills.json"; // adjust path as needed

export default function Skills() {
  return (
    <section className="flex flex-col py-16 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold mb-10 text-center">Skills</h2>

      <div className="flex flex-wrap gap-4 scrollbar-hide justify-center">
        {skills.categories.map((cat) => (
          <CategoryCard key={cat.id} title={cat.title} items={cat.items} />
        ))}
      </div>
    </section>
  );
}
