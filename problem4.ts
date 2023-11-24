/** @format */
function romanNumerals(value: number): string {
  const numConverensi: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let result = "";

  // Membuat array dari kunci-kunci map dan mengurutkannya secara descending
  const keys = Object.keys(numConverensi)
    .map(Number)
    .sort((a, b) => b - a);

  // Konversi nilai ke angka Romawi
  for (const key of keys) {
    while (value >= key) {
      result += numConverensi[key];
      value -= key;
    }
  }

  return result;
}

console.log(romanNumerals(4)); // VI
console.log(romanNumerals(9)); // IX
console.log(romanNumerals(23)); // XXIII
console.log(romanNumerals(2021)); // MMXXI
console.log(romanNumerals(1646)); // MDCXLVI
