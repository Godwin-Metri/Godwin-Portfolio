import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "120px", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"
    />
  );
}

export default SectionDivider;
