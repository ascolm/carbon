export function usageIsValid (usage: string) {
  if (usage === '') return true;
  return /^\d+(\.|,)?\d*$/.test(usage)
}