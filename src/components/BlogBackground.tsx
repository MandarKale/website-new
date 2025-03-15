"use client";

import Image from 'next/image';
import { ReactNode } from 'react';

interface BlogBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function BlogBackground({
  children,
  className = ''
}: BlogBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/images/backgrounds/mountain-blog.jpg?v=2"
          alt="Misty mountain valley landscape"
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