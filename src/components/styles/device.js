const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "410px",
  tabletS: "500px",
  tabletL: "768px",
  laptop: "1024px",
  custPos: "1200px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  custPos: `(min-width: ${size.custPos})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};
