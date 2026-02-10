function storeData(income, deductions, tax) {
    try {
        const data = {
            income,
            deductions,
            tax,
            timestamp: new Date().toISOString(),
        };

        const storedData = localStorage.getItem('tax-data');
        if (storedData) {
            const dataArray = JSON.parse(storedData);
            dataArray.push(data);
            localStorage.setItem('tax-data', JSON.stringify(dataArray));
        } else {
            localStorage.setItem('tax-data', JSON.stringify([data]));
        }
    } catch (error) {
        throw new Error('Error storing data.');
    }
}