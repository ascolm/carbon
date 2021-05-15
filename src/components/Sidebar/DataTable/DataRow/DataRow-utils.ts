export function usageIsValid (usage: string) {
  if (usage === null) return true;
  return /^\d+(\.|,)?\d*$/.test(usage)
}