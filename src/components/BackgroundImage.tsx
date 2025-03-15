"use client";

import Image from 'next/image';
import { ReactNode } from 'react';

interface BackgroundImageProps {
  children?: ReactNode;
  imgSrc: string;
  imgAlt: string;
  overlay?: boolean;
  overlayOpacity?: string;
  position?: string;
  className?: string;
}

export default function BackgroundImage({
  children,
  imgSrc,
  imgAlt,
  overlay = true,
  overlayOpacity = 'bg-black/40',
  position = 'center',
  className = ''
}: BackgroundImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-${position}`}
          quality={90}
        />
        {overlay && <div className={`absolute inset-0 ${overlayOpacity}`}></div>}
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
} 