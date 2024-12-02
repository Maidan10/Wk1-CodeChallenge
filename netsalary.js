function calculateNetSalary(basicSalary, benefits) {
    
    const taxBrackets = [
        { upper: 24000, rate: 0.1 },
        { upper: 32333, rate: 0.25 },
        { upper: Infinity, rate: 0.3 } 
    ];
    const nhifRates = [
        { upper: 5999, deduction: 150 },
        { upper: 7999, deduction: 300 },
        { upper: 11999, deduction: 400 },
        { upper: 14999, deduction: 500 },
        { upper: 19999, deduction: 600 },
        { upper: 24999, deduction: 750 },
        { upper: 29999, deduction: 850 },
        { upper: 34999, deduction: 900 },
        { upper: 39999, deduction: 950 },
        { upper: 44999, deduction: 1000 },
        { upper: 49999, deduction: 1100 },
        { upper: 59999, deduction: 1200 },
        { upper: 69999, deduction: 1300 },
        { upper: 79999, deduction: 1400 },
        { upper: 89999, deduction: 1500 },
        { upper: 99999, deduction: 1600 },
        { upper: Infinity, deduction: 1700 }
    ];
    const nssfRate = 0.06;

    const grossSalary = basicSalary + benefits;

    let taxableIncome = grossSalary;
    let payee = 0;
    for (let bracket of taxBrackets) {
        if (taxableIncome <= 0) break;
        const taxableAmount = Math.min(taxableIncome, bracket.upper);
        payee += taxableAmount * bracket.rate;
        taxableIncome -= taxableAmount;
    }

    let nhifDeduction = 0;
    for (let rate of nhifRates) {
        if (grossSalary <= rate.upper) {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    const nssfDeduction = grossSalary * nssfRate;

    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

    return {
        grossSalary,
        payee,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
}

const basicSalary = 50000;
const benefits = 10000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
console.log("Net Salary:", salaryDetails.netSalary);
