import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description, center }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      <div className={`flex items-center gap-4 mb-4 ${center ? "justify-center" : ""}`}>
        <div className="h-px w-12 bg-primary" />
        <span className="text-xs tracking-[0.5em] uppercase text-primary">{eyebrow}</span>
        {center && <div className="h-px w-12 bg-primary" />}
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05]">{title}</h2>
      {description && <p className="mt-6 text-foreground/70 leading-relaxed">{description}</p>}
    </motion.div>
  );
}
