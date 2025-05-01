"use client";

import { featureCards } from "@/utils/constants";

import FeatureCard from "./FeatureCard";

const FeatureCards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-16">
      {featureCards.map((card, i) => (
        <FeatureCard key={card.title} index={i} {...card} />
      ))}
    </section>
  );
};

export default FeatureCards;
