
export function clamp(n: number, lowerBound: number, upperBound: number): number {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
