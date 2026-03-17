"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919372483733"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 group-hover:animate-pulse"
      >
        <path fillRule="evenodd" d="M12.031 2.007a9.982 9.982 0 0 1 8.528 15.114l1.455 4.358a.485.485 0 0 1-.611.611l-4.358-1.455a9.982 9.982 0 1 1-5.014-18.628Zm5.013 14.152a5.538 5.538 0 0 0-1.282-1.025c-.328-.198-.948-.47-1.127-.518-.18-.047-.327-.076-.474.148-.148.225-.568.747-.69.897-.123.15-.246.164-.468.053a4.706 4.706 0 0 1-1.393-.86 5.16 5.16 0 0 1-1.018-1.272c-.126-.208-.014-.319.096-.43.099-.1.222-.266.333-.4.112-.136.15-.226.223-.377.075-.15.038-.285-.018-.396-.057-.11-.475-1.144-.648-1.57-.168-.415-.337-.358-.466-.364l-.396-.006a.757.757 0 0 0-.547.254c-.187.205-.724.71-.724 1.733s.742 2.016.845 2.152c.105.138 1.442 2.25 3.553 3.12.502.207.894.332 1.202.427.502.157.962.136 1.326.082.41-.06 1.229-.504 1.4-1.006.173-.503.173-.935.121-1.025-.052-.09-.199-.144-.421-.257Z" clipRule="evenodd" />
      </svg>
    </motion.a>
  );
}
