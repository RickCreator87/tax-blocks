import { calculateTax } from './calculations.js';
import { updateUI } from './ui.js';
import { storeData } from './data.js';

const form = document.getElementById('tax-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    if (isNaN(income) || isNaN(deductions)) {
        alert('Please enter valid numbers for income and deductions.');
        return;
    }

    if (income < 0 || deductions < 0) {
        alert('Income and deductions cannot be negative.');
        return;
    }

    try {
        const tax = calculateTax(income, deductions);
        updateUI(tax);
        storeData(income, deductions, tax);
    } catch (error) {
        alert('An error occurred during calculation or data storage.');
        console.error(error);
    }
});