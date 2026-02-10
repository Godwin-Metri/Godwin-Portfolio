import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

export default Section;
