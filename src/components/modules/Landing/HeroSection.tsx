"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-24 px-6 max-w-3xl mx-auto"
    >
      <h1 className="text-5xl font-extrabold leading-tight mb-4 tracking-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Your Ultimate Football Hub ⚽
      </h1>
      <p className="text-lg text-muted-foreground mb-6">
        Explore live matches, predictions, team stats & betting odds — all in
        one dashboard.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-green-500 hover:bg-green-600 transition text-white font-semibold rounded-xl px-6 py-4"
      >
        <Link href="/leagues">Start Exploring</Link>
      </Button>
    </motion.section>
  );
};

export default HeroSection;
