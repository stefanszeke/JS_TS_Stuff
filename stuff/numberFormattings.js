const eurFormat = Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' });
const number = 123456.789;
console.log(eurFormat.format(number));

const compactFormat = Intl.NumberFormat('en-US', { notation: 'compact' });
console.log(compactFormat.format(number));

const speedFormat = Intl.NumberFormat('en-US', { style: 'unit', unit: 'kilometer-per-hour', maximumSignificantDigits: 3, unitDisplay: 'short' });
console.log(speedFormat.format(number));
