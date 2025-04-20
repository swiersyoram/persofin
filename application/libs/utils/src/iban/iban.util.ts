/**
 * Validates an International Bank Account Number (IBAN)
 * @param iban - The IBAN to validate
 * @returns boolean indicating whether the IBAN is valid
 */
export const validateIBAN = (iban?: string): boolean => {
  if (!iban) return false;

  // Remove spaces and convert to uppercase
  const cleanedIBAN = iban.replace(/\s/g, '').toUpperCase();

  // Basic format check (length between 15-34 characters, alphanumeric only)
  const formatRegex = /^[A-Z0-9]{15,34}$/;
  if (!formatRegex.test(cleanedIBAN)) {
    return false;
  }

  // Check country code (first two characters should be letters)
  const countryCodeRegex = /^[A-Z]{2}/;
  if (!countryCodeRegex.test(cleanedIBAN)) {
    return false;
  }

  // IBAN checksum validation
  // Move the first 4 characters to the end
  const rearranged = cleanedIBAN.substring(4) + cleanedIBAN.substring(0, 4);

  // Convert letters to numbers (A=10, B=11, ..., Z=35)
  const expanded = rearranged
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return (code - 55).toString();
      }
      return char;
    })
    .join('');

  let remainder = 0;
  for (let i = 0; i < expanded.length; i++) {
    remainder = (remainder * 10 + parseInt(expanded[i], 10)) % 97;
  }

  // If the remainder is 1, the IBAN is valid
  return remainder === 1;
};

/**
 * Formats an IBAN with spaces for readability
 * @param iban - The IBAN to format
 * @returns Formatted IBAN with spaces every 4 characters
 */
export const cleanIBANString = (iban: string): string => {
  const cleanedIBAN = iban.replace(/\s/g, '').toUpperCase();
  return cleanedIBAN.replace(/(.{4})/g, '$1 ').trim();
};

/**
 * Formats a string into an IBAN pattern
 * @param input - The string to format
 * @returns The formatted IBAN
 */
export const formatIBANString = (input: string): string => {
  const cleanedInput = input.replace(/\s/g, '');
  const regex = new RegExp(`(.{4})`, 'g');
  return cleanedInput.replace(regex, `$1 `).trim();
};
