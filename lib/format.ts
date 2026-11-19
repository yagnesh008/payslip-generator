export const formatINR = (value: number) =>
  (Number(value) || 0).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const round2 = (n: number) =>
  Math.round((Number(n) + Number.EPSILON) * 100) / 100;