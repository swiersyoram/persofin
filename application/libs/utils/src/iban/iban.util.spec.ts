import { cleanIBANString, validateIBAN } from './iban.util';

describe('iban util', () => {
  describe('validateIBAN', () => {
    it('should return false for undefined input', () => {
      expect(validateIBAN(undefined)).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(validateIBAN('')).toBe(false);
    });

    it('should return false for IBANs that are too short', () => {
      expect(validateIBAN('BE123456789012')).toBe(false);
    });

    it('should return false for IBANs that are too long', () => {
      expect(validateIBAN('BE1234567890123456789012345678901234567')).toBe(
        false
      );
    });

    it('should return false for IBANs with invalid characters', () => {
      expect(validateIBAN('BE12 3456 7890 1234 56$%')).toBe(false);
    });

    it('should return false for IBANs with invalid country code', () => {
      expect(validateIBAN('12BE 3456 7890 1234 5678')).toBe(false);
    });

    it('should return false for IBANs with invalid checksum', () => {
      expect(validateIBAN('BE12 3456 7890 1234 5678')).toBe(false);
    });

    it('should return true for valid Belgian IBAN', () => {
      expect(validateIBAN('BE68 5390 0754 7034')).toBe(true);
    });

    it('should return true for valid German IBAN', () => {
      expect(validateIBAN('DE89 3704 0044 0532 0130 00')).toBe(true);
    });

    it('should return true for valid UK IBAN', () => {
      expect(validateIBAN('GB29 NWBK 6016 1331 9268 19')).toBe(true);
    });

    it('should handle IBANs with or without spaces', () => {
      const validIBAN = 'NL91ABNA0417164300';
      expect(validateIBAN(validIBAN)).toBe(true);
      expect(validateIBAN('NL91 ABNA 0417 1643 00')).toBe(true);
    });
  });

  describe('formatIBAN', () => {
    it('should format IBAN with spaces every 4 characters', () => {
      expect(cleanIBANString('BE685390075470341')).toBe(
        'BE68 5390 0754 7034 1'
      );
    });

    it('should remove existing spaces and reformat', () => {
      expect(cleanIBANString('BE68 539 00 75470 341')).toBe(
        'BE68 5390 0754 7034 1'
      );
    });

    it('should convert to uppercase', () => {
      expect(cleanIBANString('be685390075470341')).toBe(
        'BE68 5390 0754 7034 1'
      );
    });

    it('should handle empty string', () => {
      expect(cleanIBANString('')).toBe('');
    });
  });
});
