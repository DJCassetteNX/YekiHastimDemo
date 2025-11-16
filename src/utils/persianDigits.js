/**
 * Convert English digits to Persian digits
 * @param {string|number} input - The input string or number to convert
 * @returns {string} - String with Persian digits
 */
export const digitsEnToFa = (input) => {
  if (input === null || input === undefined) {
    return "";
  }

  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let result = String(input);

  for (let i = 0; i < englishDigits.length; i++) {
    result = result.replace(
      new RegExp(englishDigits[i], "g"),
      persianDigits[i]
    );
  }

  return result;
};

/**
 * Convert Persian digits to English digits
 * @param {string} input - The input string with Persian digits
 * @returns {string} - String with English digits
 */
export const digitsFaToEn = (input) => {
  if (input === null || input === undefined) {
    return "";
  }

  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let result = String(input);

  for (let i = 0; i < persianDigits.length; i++) {
    result = result.replace(
      new RegExp(persianDigits[i], "g"),
      englishDigits[i]
    );
  }

  return result;
};

/**
 * Add commas to numbers (thousands separator)
 * @param {string|number} input - The input number
 * @returns {string} - Number with commas
 */
export const addCommas = (input) => {
  if (input === null || input === undefined) {
    return "";
  }

  const number = String(input);
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Remove commas from numbers
 * @param {string} input - The input string with commas
 * @returns {string} - Number without commas
 */
export const removeCommas = (input) => {
  if (input === null || input === undefined) {
    return "";
  }

  return String(input).replace(/,/g, "");
};
