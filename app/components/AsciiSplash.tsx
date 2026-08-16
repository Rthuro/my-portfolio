"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const ASCII_ART = `


╔═════════════════════════════════════════════════════════════════════════╗
║                                                                         ║ 
║  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗  ███╗   ║ 
║  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝  ███║   ║
║  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗    ███║   ║
║  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝    ╚══╝   ║
║  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗  ███╗   ║
║   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝  ╚══╝   ║
╚═════════════════════════════════════════════════════════════════════════╝
 
                                                                     
`;

export default function AsciiSplash() {
  const [visible, setVisible] = useState(true);
  const [chars, setChars] = useState<
    { char: string; opacity: number; key: number }[]
  >([]);

  // Parse the ASCII art into individual characters
  useEffect(() => {
    const parsed = ASCII_ART.split("").map((char, i) => ({
      char,
      opacity: 1,
      key: i,
    }));
    setChars(parsed);
  }, []);

  // Dissolve characters randomly, then fade the overlay
  useEffect(() => {
    if (chars.length === 0) return;

    // After a brief pause, start dissolving characters
    const dissolveDelay = setTimeout(() => {
      const totalChars = chars.filter(
        (c) => c.char !== " " && c.char !== "\n"
      ).length;
      const indices = chars
        .map((c, i) => (c.char !== " " && c.char !== "\n" ? i : -1))
        .filter((i) => i !== -1);

      // Shuffle indices for random dissolve
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      // Dissolve in batches
      const batchSize = Math.ceil(totalChars / 12);
      let batch = 0;

      const interval = setInterval(() => {
        const start = batch * batchSize;
        const end = start + batchSize;
        const batchIndices = new Set(indices.slice(start, end));

        if (start >= indices.length) {
          clearInterval(interval);
          // After dissolve completes, fade out the entire overlay
          setTimeout(() => setVisible(false), 200);
          return;
        }

        setChars((prev) =>
          prev.map((c, i) =>
            batchIndices.has(i) ? { ...c, opacity: 0 } : c
          )
        );
        batch++;
      }, 80);

      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(dissolveDelay);
  }, [chars.length]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="ascii-splash"
        >
          <pre className="ascii-art" aria-hidden="true">
            {chars.map((c) => (
              <span
                key={c.key}
                style={{
                  opacity: c.opacity,
                  transition: "opacity 0.3s ease-out",
                }}
              >
                {c.char}
              </span>
            ))}
          </pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
