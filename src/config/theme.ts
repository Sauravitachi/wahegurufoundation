export const theme = {
  colors: {
    navy: {
      900: "#0F1E33",
      800: "#162F52",
      700: "#1F416F",
      600: "#2A5A8A",
      100: "#E6EDF5",
    },
    gold: {
      300: "#EED181",
      500: "#D0AC60",
      600: "#B08A45",
      100: "#F8F0DC",
    },
    neutrals: {
      bg: "#FFFDF8",
      surface: "#F8F3E8",
      border: "#E7DFCB",
      text: "#0F1E33",
      textMuted: "#4B5B73",
    },
  },
  animation: {
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    viewportOnce: { once: true, margin: "-50px" },
  },
} as const;
