/**
 * Convert straight quotes to smart typographic quotes.
 * Handles nested quotes and apostrophes inside words.
 * @example letterStyle(`He said "hello"`); // He said “hello”
 * @example letterStyle(`She said "it's fine"`); // She said “it’s fine”
 * @example letterStyle(`"He said 'hello'"`); // “He said ‘hello’”
 * @example letterStyle(`Don't stop`); // Don’t stop
 * @example letterStyle(`C'est l'été.`); // C'est l’été
 */
export function letterStyle(s: string): string {
  let doubleOpen = true;
  let singleOpen = true;

  return s.replace(/[‘’]/g, "'").replace(/['"]/g, (match, index) => {
    const prev = s[index - 1];
    const next = s[index + 1];

    // apostrophe inside word aside Unicode letter (eg. don't, l'été)
    if (match === "'" && /\p{L}/u.test(prev) && /\p{L}/u.test(next)) {
      return "’";
    }

    if (match === '"') {
      const q = doubleOpen ? "“" : "”";
      doubleOpen = !doubleOpen;
      return q;
    }

    if (match === "'") {
      const q = singleOpen ? "‘" : "’";
      singleOpen = !singleOpen;
      return q;
    }

    return match;
  });
}
