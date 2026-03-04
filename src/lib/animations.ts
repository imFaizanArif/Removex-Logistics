export const defaultEase = [0.25, 0.4, 0.25, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: defaultEase },
};

export const fadeUpFast = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20px" },
  transition: { duration: 0.35, ease: defaultEase },
};

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  viewport: { once: true, margin: "-40px" },
};

export const staggerContainerSlow = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  viewport: { once: true, margin: "-40px" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, ease: defaultEase },
};

export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.15 },
};

export const cardHover = {
  y: -4,
  transition: { duration: 0.25, ease: defaultEase },
};
