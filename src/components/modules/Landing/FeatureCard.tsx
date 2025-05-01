import { IFeatureCardProps } from "@/types";
import { motion } from "framer-motion";

import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const FeatureCard = ({
  title,
  description,
  icon,
  href,
  index,
}: IFeatureCardProps) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href}>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:bg-slate-700 transition-all h-full">
          {icon}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
