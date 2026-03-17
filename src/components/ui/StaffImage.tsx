"use client";

import Image from "next/image";
import { useState } from "react";

interface StaffImageProps {
  src: string;
  name: string;
}

export default function StaffImage({ src, name }: StaffImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image 
      src={imgSrc} 
      alt={name} 
      fill
      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      onError={() => { 
        setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0a192f&color=d4af37&size=600`);
      }}
    />
  );
}
