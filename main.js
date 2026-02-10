import { calculateTax } from './calculations.js';
import { updateUI } from './ui.js';
import { storeData } from './data.js';

const form = document.getElementById('tax-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const tax = calculateTax(income, deductions);
    updateUI(tax);
    storeData(income, deductions, tax);
});