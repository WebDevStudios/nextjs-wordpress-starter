import convertHextoRgb from '@/functions/convertHextoRgb'

test('convertHextoRgb', () => {
  expect(convertHextoRgb('#eb4034')).toEqual([235, 64, 52])
  expect(convertHextoRgb('#ebd334')).toEqual([235, 211, 52])
  expect(convertHextoRgb('#49eb34')).toEqual([73, 235, 52])
  expect(convertHextoRgb('#3468eb')).toEqual([52, 104, 235])
  expect(convertHextoRgb('#eb34e5')).toEqual([235, 52, 229])
  expect(convertHextoRgb('#eb3434')).toEqual([235, 52, 52])
})
