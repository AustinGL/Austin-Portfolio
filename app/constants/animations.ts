// Animation constants for consistent timing across the portfolio

export const ANIMATION_TIMINGS = {
    // Duration
    fast: 0.3,
    base: 0.6,
    slow: 0.8,

    // Delays
    delayShort: 0.2,
    delayMedium: 0.3,
    delayLong: 0.6,
    delayXLong: 0.9,

    // Viewport margin for intersection observer
    viewportMargin: "-50px",
    viewportMarginLarge: "-100px",
} as const;

export const FADE_IN_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

export const FADE_IN = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

export const SCALE_IN = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
};
