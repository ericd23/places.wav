export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]): T[] {
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function sortByNumberDesc<T extends { data: { number: number } }>(items: T[]): T[] {
  return items.sort((a, b) => b.data.number - a.data.number);
}

export function sortCollectionItems<T extends { data: { date: Date; number?: number } }>(
  items: T[], 
  collection: 'mixes' | 'conversations' | 'archive'
): T[] {
  if (collection === 'conversations') {
    return sortByNumberDesc(items as any);
  }
  return sortByDateDesc(items);
}