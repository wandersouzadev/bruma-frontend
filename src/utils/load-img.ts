export const imageFromHost = (imgPath: string): string =>
  process.env.NEXT_PUBLIC_STRAPI_URL + imgPath;

export const loadImg = (imgPath: string): string => imgPath;
// export const loadImg = (imgPath: string): string =>
//   process.env.NEXT_PUBLIC_STRAPI_URL + imgPath;
