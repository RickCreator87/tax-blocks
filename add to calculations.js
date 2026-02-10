// calculations.test.js
import { calculateTax } from './calculations.js';

describe('calculateTax', () => {
    it('should calculate tax correctly', () => {
        const income = 10000;
        const deductions = 2000;
        const expectedTax = 1600;
        expect(calculateTax(income, deductions)).toBeCloseTo(expectedTax);
    });

    it('should handle negative income', () => {
        const income = -10000;
        const deductions = 2000;
        expect(() => calculateTax(income, deductions)).toThrowError();
    });

    it('should handle negative deductions', () => {
        const income = 10000;
        const deductions = -2000;
        expect(() => calculateTax(income, deductions)).toThrowError();
    });
});