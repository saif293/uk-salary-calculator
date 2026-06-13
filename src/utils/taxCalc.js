// UK 2026/27 tax thresholds

export function calculateTakeHome({
  grossSalary,
  country = 'england',
  pensionPercent = 0,
  pensionPreTax = true,
  studentLoan = 'none',
  overtimeAnnual = 0,
  bonusAnnual = 0,
}) {
  const totalGross = grossSalary + overtimeAnnual + bonusAnnual;

  // Pension deduction
  const pensionAmount = pensionPreTax ? (totalGross * pensionPercent) / 100 : 0;
  const taxableIncome = totalGross - pensionAmount;

  // Personal Allowance taper
  let personalAllowance = 12570;
  if (taxableIncome > 100000) {
    personalAllowance = Math.max(0, 12570 - Math.floor((taxableIncome - 100000) / 2));
  }

  // Income Tax
  let incomeTax = 0;
  if (country === 'scotland') {
    incomeTax = calcScottishTax(taxableIncome, personalAllowance);
  } else {
    incomeTax = calcEnglandTax(taxableIncome, personalAllowance);
  }

  // National Insurance (same across all UK)
  const ni = calcNI(totalGross);

  // Student Loan
  const studentLoanDeduction = calcStudentLoan(totalGross, studentLoan);

  // Post-tax pension
  const postTaxPension = pensionPreTax ? 0 : (totalGross * pensionPercent) / 100;

  const totalDeductions = incomeTax + ni + studentLoanDeduction + pensionAmount + postTaxPension;
  const takeHome = totalGross - totalDeductions;
  const effectiveTaxRate = totalGross > 0 ? ((incomeTax + ni) / totalGross) * 100 : 0;

  return {
    grossAnnual: totalGross,
    grossMonthly: totalGross / 12,
    grossWeekly: totalGross / 52,
    takeHomeAnnual: takeHome,
    takeHomeMonthly: takeHome / 12,
    takeHomeWeekly: takeHome / 52,
    incomeTax,
    ni,
    studentLoanDeduction,
    pensionAmount: pensionAmount + postTaxPension,
    effectiveTaxRate,
  };
}

function calcEnglandTax(income, pa) {
  const taxable = Math.max(0, income - pa);
  let tax = 0;
  // Basic 20% up to 37,700 above PA (threshold £50,270)
  const basicBand = 37700;
  const higherThreshold = 125140;

  if (taxable <= basicBand) {
    tax = taxable * 0.20;
  } else if (income <= higherThreshold) {
    tax = basicBand * 0.20 + (taxable - basicBand) * 0.40;
  } else {
    const higherBand = Math.max(0, 125140 - pa - basicBand);
    tax = basicBand * 0.20 + higherBand * 0.40 + Math.max(0, taxable - basicBand - higherBand) * 0.45;
  }
  return Math.max(0, tax);
}

function calcScottishTax(income, pa) {
  const taxable = Math.max(0, income - pa);
  // Scotland 2026/27 bands
  const bands = [
    { limit: 2306,  rate: 0.19 },
    { limit: 13991, rate: 0.20 },
    { limit: 31092, rate: 0.21 },
    { limit: 62430, rate: 0.42 },
    { limit: 125140 - pa, rate: 0.45 },
    { limit: Infinity, rate: 0.48 },
  ];
  let tax = 0;
  let remaining = taxable;
  let prev = 0;
  for (const band of bands) {
    const width = band.limit - prev;
    const slice = Math.min(remaining, width);
    tax += slice * band.rate;
    remaining -= slice;
    prev = band.limit;
    if (remaining <= 0) break;
  }
  return Math.max(0, tax);
}

function calcNI(gross) {
  const primaryThreshold = 12570;
  const upperLimit = 50270;
  if (gross <= primaryThreshold) return 0;
  const lowerBand = Math.min(gross, upperLimit) - primaryThreshold;
  const upperBand = Math.max(0, gross - upperLimit);
  return lowerBand * 0.08 + upperBand * 0.02;
}

function calcStudentLoan(gross, plan) {
  const plans = {
    plan1: { threshold: 24990, rate: 0.09 },
    plan2: { threshold: 27295, rate: 0.09 },
    plan4: { threshold: 31395, rate: 0.09 },
    plan5: { threshold: 25000, rate: 0.09 },
    postgrad: { threshold: 21000, rate: 0.06 },
  };
  const p = plans[plan];
  if (!p || gross <= p.threshold) return 0;
  return (gross - p.threshold) * p.rate;
}

export function fmt(n) {
  if (n == null) return '—';
  return '£' + Math.round(n).toLocaleString('en-GB');
}
