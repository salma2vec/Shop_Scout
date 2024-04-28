
/*
 * Generates a random token of 6 digits
 *
 */
export const generateEmailToken = () => {
  const token = Math.floor(100000 + Math.random() * 900000);
  return token.toString();
}