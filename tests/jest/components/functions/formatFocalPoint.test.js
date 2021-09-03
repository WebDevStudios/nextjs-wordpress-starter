import formatFocalPoint from '@/functions/formatFocalPoint'

test('formatFocalPoint', () => {
  expect(
    formatFocalPoint({
      x: 0.7,
      y: 0.3
    })
  ).toEqual({
    x: '70%',
    y: '30%'
  })

  expect(
    formatFocalPoint({
      x: 0.2,
      y: 0.4
    })
  ).toEqual({
    x: '20%',
    y: '40%'
  })

  expect(
    formatFocalPoint({
      x: 0.1,
      y: 0.6
    })
  ).toEqual({
    x: '10%',
    y: '60%'
  })

  expect(formatFocalPoint({})).toEqual({
    x: '50%',
    y: '50%'
  })

  expect(
    formatFocalPoint({
      x: null,
      y: ''
    })
  ).toEqual({
    x: '50%',
    y: '50%'
  })
})
