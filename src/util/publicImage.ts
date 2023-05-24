export const PublicImage = (imageName: string) => {
  return process.env.PUBLIC_URL + `/images/${imageName}.png`;
};
