// Disable sanitization only for this safely serialized JSON-LD tag.
export function structuredData(id, data) {
  return {
    script: [{
      hid: id,
      type: 'application/ld+json',
      innerHTML: JSON.stringify(data).replace(/</g, '\\u003c'),
    }],
    __dangerouslyDisableSanitizersByTagID: { [id]: ['innerHTML'] },
  };
}
