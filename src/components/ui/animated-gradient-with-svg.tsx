'use client';

import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

const randomInt = (min: number, max: number, seed: number) => {
  // Simple deterministic random number generator based on seed
  const x = Math.sin(seed) * 10000;
  return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
};

const randomFloat = (seed: number) => {
  // Simple deterministic random number generator based on seed
  const x = Math.sin(seed) * 10000;
  return (x - Math.floor(x));
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
      ? "blur-3xl"
      : "blur-[100px]";

  const circleMemoized = useMemo(() => {
    return colors.map((color, index) => {
      const seed = index * 1000;
      return {
        top: `${randomFloat(seed + 1) * 50}%`,
        left: `${randomFloat(seed + 2) * 50}%`,
        tx1: randomFloat(seed + 3) - 0.5,
        ty1: randomFloat(seed + 4) - 0.5,
        tx2: randomFloat(seed + 5) - 0.5,
        ty2: randomFloat(seed + 6) - 0.5,
        tx3: randomFloat(seed + 7) - 0.5,
        ty3: randomFloat(seed + 8) - 0.5,
        tx4: randomFloat(seed + 9) - 0.5,
        ty4: randomFloat(seed + 10) - 0.5,
        width: circleSize * randomInt(0.5, 1.5, seed + 11),
        height: circleSize * randomInt(0.5, 1.5, seed + 12),
      };
    });
  }, [colors, circleSize]);

  // Don't render anything on the server, only client-side
  if (!isMounted) {
    return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {circleMemoized.map((circle, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
            style={{
              top: circle.top,
              left: circle.left,
              "--background-gradient-speed": `${1 / speed}s`,
              "--tx-1": circle.tx1,
              "--ty-1": circle.ty1,
              "--tx-2": circle.tx2,
              "--ty-2": circle.ty2,
              "--tx-3": circle.tx3,
              "--ty-3": circle.ty3,
              "--tx-4": circle.tx4,
              "--ty-4": circle.ty4,
            } as React.CSSProperties}
            width={circle.width}
            height={circle.height}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill={colors[index]}
              className="opacity-30 dark:opacity-[0.15]"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export { AnimatedGradient }; 