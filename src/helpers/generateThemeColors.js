import chroma from 'chroma-js';

// Base color
const primaryColor = '#08182d'; // Dark Muted Blue

// Generate color variations
function generateColorPalette(baseColor) {
  const base = chroma(baseColor);
  const colors = {
    primary: baseColor,
    secondary: base.brighten(1.5).hex(), // Lighter version for secondary
    accent: chroma.mix(baseColor, '#ffa500', 0.5).hex(), // Mix with orange for accent
    dark: base.darken(3).hex(), // Much darker shade for dark themes
    positive: base.brighten(2).hex(), // Positive indicator, lighter green
    negative: chroma.mix(baseColor, '#ff0000', 0.5).hex(), // Mix with red for negative
    info: chroma.mix(baseColor, '#0000ff', 0.5).hex(), // Mix with blue for info
    warning: chroma.mix(baseColor, '#ffae1a', 0.5).hex(), // Mix with orange for warning
  };

  return colors;
}

// Usage
const colors = generateColorPalette(primaryColor);
console.log(colors);
