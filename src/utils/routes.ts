export type CollectionType = 'mixes' | 'conversations' | 'archive';

export function getCollectionIndexUrl(collection: CollectionType): string {
  if (collection === 'conversations') return '/convo';
  return `/${collection}`;
}

export function getItemUrl(slug: string, collection: CollectionType): string {
  if (collection === 'conversations') return `/convo/${slug}`;
  return `/${collection}/${slug}`;
}

export function getArtistUrl(artist: string): string {
  const slug = artist.toLowerCase().replace(/\s+/g, '-');
  return `/artist/${encodeURIComponent(slug)}`;
}

export function getTagUrl(tag: string): string {
  return `/tag/${tag}`;
}