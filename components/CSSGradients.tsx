export const variants = {
  clearSky: `
    background: #005c97;
    background: -webkit-linear-gradient(to right, #363795, #005c97);
    background: linear-gradient(to right, #363795, #005c97);
    color: #FFF;
  `,
  piggyPink: `
    background: #ee9ca7;
    background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);
    background: linear-gradient(to right, #ffdde1, #ee9ca7);
    color: #FFF;
  `,
  sunkist: `
    background: #F2994A;
    background: -webkit-linear-gradient(to right, #F2C94C, #F2994A);
    background: linear-gradient(to right, #F2C94C, #F2994A);
    color: #FFF;
  `,
  redSunset: `
    background: #355C7D;
    background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
    background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
    color: #FFF;
  `,
};

export type AvailableGradients = keyof typeof variants;
