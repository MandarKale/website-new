"use client";

import Image from 'next/image';
import { ReactNode } from 'react';

interface AboutBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AboutBackground({
  children,
  className = ''
}: AboutBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/images/backgrounds/mountain-about.jpg?v=2"
          alt="Majestic mountain peaks at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        <div className={`absolute inset-0 bg-black/60`}></div>
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
} 