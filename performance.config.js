// Performance optimization configuration for mobile devices
module.exports = {
  // Reduce motion for users who prefer it
  reducedMotion: {
    '@media (prefers-reduced-motion: reduce)': {
      '*': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important',
        scrollBehavior: 'auto !important',
      },
    },
  },

  // Mobile-first optimizations
  mobile: {
    // Disable complex animations on mobile
    maxWidth: 768,
    simplifyAnimations: true,
    reduceBlur: true,
    limitTransforms: true,
  },

  // Performance recommendations implemented:
  recommendations: [
    '✅ Reduced animation durations from 0.6-1.0s to 0.2-0.4s',
    '✅ Removed complex spring animations and replaced with easeOut',
    '✅ Eliminated excessive animation delays',
    '✅ Converted framer-motion elements to regular elements where possible',
    '✅ Added "once: true" to viewport triggers to prevent re-animations',
    '✅ Reduced blur effects and complex transforms',
    '✅ Simplified hover states to basic scale/color transitions',
    '✅ Removed rotateY/rotateX 3D transforms that are heavy on mobile GPUs',
    '✅ Consolidated multiple animation triggers into single elements',
    '✅ Reduced particle animations and complex background effects',
  ],
};