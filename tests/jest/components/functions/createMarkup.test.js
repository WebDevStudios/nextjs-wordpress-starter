import createMarkup from '@/functions/createMarkup'

test('createMarkup', () => {
  expect(createMarkup(<p>Lorem ipsum</p>)).toEqual({__html: <p>Lorem ipsum</p>})
  expect(createMarkup(<h1>Mauris eu risus aliquet</h1>)).toEqual({
    __html: <h1>Mauris eu risus aliquet</h1>
  })
  expect(
    createMarkup(
      <div>
        <h1>Praesent pulvinar</h1>
        <p>
          Mauris finibus pretium mauris, vitae fermentum ex fermentum non.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    )
  ).toEqual({
    __html: (
      <div>
        <h1>Praesent pulvinar</h1>
        <p>
          Mauris finibus pretium mauris, vitae fermentum ex fermentum non.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    )
  })
})
