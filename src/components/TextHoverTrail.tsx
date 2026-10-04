"use client";

/**
 * TextHoverTrail
 *
 * Splits a piece of text into words and plays a short "pop" animation on each
 * word the pointer passes over, leaving a trail behind the cursor.
 *
 * Self-contained: no CSS file, no dependencies besides React. Copy this file
 * into your project and use it like:
 *
 *   <TextHoverTrail hoverColor="#2c72e3">Some text to animate</TextHoverTrail>
 *
 * The animation uses the Web Animations API, so it never leaves a word stuck
 * in its hover state, needs no listener cleanup, and causes no re-renders.
 */

import React, { useMemo } from "react";

export interface TextHoverTrailProps {
  /** The text to animate. Whitespace (including newlines) separates words. */
  children: string;
  /** Element rendered as the wrapper. Defaults to "p". */
  as?: React.ElementType;
  /** Color a word takes while highlighted. Defaults to "#2c72e3". */
  hoverColor?: string;
  /** CSS transform applied while highlighted. */
  hoverTransform?: string;
  /** Time in ms for a word to reach its highlighted state. Defaults to 300. */
  enterDuration?: number;
  /** Time in ms for a word to return to normal. Defaults to 1500. */
  leaveDuration?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Class name applied to every word span. */
  wordClassName?: string;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function TextHoverTrail({
  children,
  as: Component = "p",
  hoverColor = "#2c72e3",
  hoverTransform = "scaleX(1.1) skewX(-10deg)",
  enterDuration = 300,
  leaveDuration = 1500,
  className,
  style,
  wordClassName,
}: TextHoverTrailProps) {
  const words = useMemo(
    () => String(children).split(/\s+/).filter(Boolean),
    [children]
  );

  const handlePointerEnter = (event: React.PointerEvent<HTMLSpanElement>) => {
    const el = event.currentTarget;
    // Older browsers without the Web Animations API simply skip the effect.
    if (typeof el.animate !== "function") return;

    const total = Math.max(enterDuration + leaveDuration, 1);
    const peak: Keyframe = {
      offset: enterDuration / total,
      color: hoverColor,
      easing: "ease-out",
    };
    if (!prefersReducedMotion()) peak.transform = hoverTransform;

    // Start and end keyframes are omitted on purpose: the browser animates
    // from and back to the word's own styles, so the text keeps whatever
    // color it inherits instead of a hard-coded one.
    el.animate([peak], { duration: total, easing: "ease-in-out" });
  };

  return (
    <Component className={className} style={style}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {index > 0 && " "}
          <span
            className={wordClassName}
            style={{ display: "inline-block" }}
            onPointerEnter={handlePointerEnter}
          >
            {word}
          </span>
        </React.Fragment>
      ))}
    </Component>
  );
}
