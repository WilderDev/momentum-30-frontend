/**
 * Converts an expiry time from seconds to a JavaScript Date object.
 * @param expiry The expiry time in seconds.
 * @returns The expiry time as a Date object.
 */
export function expirySecondsToDate(
  expiry: number,
  isAlreadyMilli = false,
): Date {
  // The expiry time is in seconds, but JavaScript Date methods use milliseconds,
  // so convert the expiry time to milliseconds by multiplying by 1000.
  const expiryMilliseconds = isAlreadyMilli ? expiry : expiry * 1000;

  // Get the current date in milliseconds.
  const nowMilliseconds = Date.now();

  // Convert the expiry date from milliseconds to a Date object.
  const expiryDate = new Date(expiryMilliseconds + nowMilliseconds);

  return expiryDate;
}

export function formatGmailDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  }
}
