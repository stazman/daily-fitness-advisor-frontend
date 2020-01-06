const size = {
  mobileXS: "<320px",
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "410px",
  tabletS: "500px",
  tabletL: "768px",
  laptop: "1024px",
  custLaptopPos1: "1200px",
  custLaptopPos2: "1328px",
  laptopL: "1440px",
  custLaptopPos3: "1600px",
  desktop: "2560px"
};

export const device = {
  mobileXS: `(min-width: ${size.mobileXS})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  custLaptopPos1: `(min-width: ${size.custLaptopPos1})`,
  custLaptopPos2: `(min-width: ${size.custLaptopPos2})`,
  laptopL: `(min-width: ${size.laptopL})`,
  custLaptopPos3: `(min-width: ${size.custLaptopPos3})`,
  desktop: `(min-width: ${size.desktop})`
};
