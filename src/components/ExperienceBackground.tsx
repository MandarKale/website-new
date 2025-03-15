"use client";

import Image from 'next/image';
import { ReactNode } from 'react';

interface ExperienceBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function ExperienceBackground({
  children,
  className = ''
}: ExperienceBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/images/backgrounds/mountain-experience.jpg?v=2"
          alt="Breathtaking mountain range vista"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        <div className={`absolute inset-0 bg-black/50`}></div>
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
} 