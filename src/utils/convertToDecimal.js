// convert delivery price into a decimal value -> 390 => 3.90
export const convertToDecimal = num => {
  return (num / 100).toFixed(2);
};
