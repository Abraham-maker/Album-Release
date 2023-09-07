const size = {
  desktopLg: "1184px",
  desktop: "1920px",
  laptop: "992px",
  tablet: "768px",
  mobile: "532px",
};

export const device = {
  laptop: `(min-width: ${size.laptop})`,
  tablet: `(min-width: ${size.tablet})`,
  mobile: `(min-width: ${size.mobile})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopLg: `(max-width: ${size.desktopLg})`,
};
