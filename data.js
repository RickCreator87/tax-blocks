function storeData(income, deductions, tax) {
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
}

function getData() {
    const storedData = localStorage.getItem('tax-data');
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        return [];
    }
}

export { storeData, getData };