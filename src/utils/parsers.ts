/**
 * Convert straight quotes to smart typographic quotes.
 * Handles nested quotes and apostrophes inside words.
 * @example letterStyle(`He said "hello"`); // He said “hello”
 * @example letterStyle(`She said "it's fine"`); // She said “it’s fine”
 * @example letterStyle(`"He said 'hello'"`); // “He said ‘hello’”
 * @example letterStyle(`Don't stop`); // Don’t stop
 */
export function letterStyle(s: string): string {
  let doubleOpen = true;
  let singleOpen = true;

  return s.replace(/['"]/g, (match, index) => {
    const prev = s[index - 1];
    const next = s[index + 1];

    // apostrophe inside word (don't, it's)
    if (match === "'" && /\w/.test(prev) && /\w/.test(next)) {
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
