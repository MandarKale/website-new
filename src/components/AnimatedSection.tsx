"use client";

import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0 // Keep parameter for backward compatibility
}: AnimatedSectionProps) {
  return (
    <section className={className}>
      {children}
    </section>
  );
} 