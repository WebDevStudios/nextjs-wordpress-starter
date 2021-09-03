import parseQuerystring from '@/functions/parseQuerystring'

test('parseQuerystring', () => {
  expect(parseQuerystring('https://example.com/?q=search', 'q')).toBe('search')
  expect(
    parseQuerystring('https://example.com/?q=wordpress&filter=php', 'filter')
  ).toBe('php')
  expect(
    parseQuerystring(
      'https://example.com/?q=webdev&filter=js&custom=wordpress%20experts',
      'custom'
    )
  ).toBe('wordpress experts')
  expect(parseQuerystring('https://example.com/?s=search+item', 'q')).toBe('')
})
