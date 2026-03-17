"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

export default function SiteLogo({ size = 28 }: { size?: number }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <BookOpen size={size} />;
  }

  return (
    <img 
      src="/staff/shivay_logo.jpg" 
      alt="Shivay Publication Logo" 
      className="rounded-full object-cover bg-white"
      style={{ width: size, height: size }}
      onError={() => setHasError(true)} 
    />
  );
}
