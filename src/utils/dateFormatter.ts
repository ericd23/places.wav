export function formatDate(date: Date, format: 'short' | 'long' = 'short'): string {
  if (format === 'long') {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  }
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short'
  });
}