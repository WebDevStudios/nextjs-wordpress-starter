import isLinkActive from '@/functions/isLinkActive'

test('isLinkActive', () => {
  expect(isLinkActive('/blog', '/blog/')).toBe(true)
  expect(isLinkActive('/welcome', '/welcome')).toBe(true)
  expect(isLinkActive('/welcome/lorem', '/welcome/lorem/')).toBe(true)
  expect(isLinkActive('/lorem', '/welcome')).toBe(false)
  expect(isLinkActive('/blog/lorem', '/blog')).toBe(false)
  expect(isLinkActive('', '/blog')).toBe(false)
  expect(isLinkActive(null, '/blog')).toBe(false)
  expect(isLinkActive('/home', '')).toBe(false)
  expect(isLinkActive('/home', null)).toBe(false)
})
