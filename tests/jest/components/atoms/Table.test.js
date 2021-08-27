import Table from '@/components/atoms/Table'
import {render} from '@testing-library/react'

test('render Table with body, head, and id props', () => {
  const props = {
    body: [
      {
        cells: [
          {
            align: '',
            content: 'Column 1 - Row 1',
            scope: '',
            tag: 'td'
          },
          {
            align: 'center',
            content: 'Column 2 - Row 1',
            scope: '',
            tag: 'td'
          }
        ]
      },
      {
        cells: [
          {
            align: '',
            content: 'Column 1 - Row 2',
            scope: '',
            tag: 'td'
          },
          {
            align: 'right',
            content: 'Column 2 - Row 2',
            scope: '',
            tag: 'td'
          }
        ]
      }
    ],
    head: [
      {
        cells: [
          {
            align: '',
            content: 'Head 1',
            scope: ''
          },
          {
            align: 'center',
            content: 'Head 2',
            scope: ''
          }
        ]
      }
    ],
    id: 'test-tbl-id'
  }

  const {container} = render(<Table {...props} />)

  expect(container.firstElementChild).toHaveAttribute('id', 'test-tbl-id')

  const head = container.querySelector('thead').querySelectorAll('th')

  expect(head).toHaveLength(2)
  expect(head[0]).toHaveTextContent('Head 1')

  expect(head[1]).toHaveClass('text-center')
  expect(head[1]).toHaveTextContent('Head 2')

  const body = container.querySelector('tbody').querySelectorAll('tr')

  expect(body).toHaveLength(2)

  // Row 1
  const row1 = body[0].querySelectorAll('td')
  expect(row1).toHaveLength(2)

  // Row 1 - Column 1
  expect(row1[0]).toHaveClass('text-left')
  expect(row1[0]).toHaveTextContent('Column 1 - Row 1')

  // Row 1 - Column 2
  expect(row1[1]).toHaveClass('text-center')
  expect(row1[1]).toHaveTextContent('Column 2 - Row 1')

  // Row 2
  const row2 = body[1].querySelectorAll('td')
  expect(row2).toHaveLength(2)

  // Row 2 - Column 1
  expect(row2[0]).toHaveClass('text-left')
  expect(row2[0]).toHaveTextContent('Column 1 - Row 2')

  // Row 2 - Column 2
  expect(row2[1]).toHaveClass('text-right')
  expect(row2[1]).toHaveTextContent('Column 2 - Row 2')
})

test('render Table with className, caption, and foot props', () => {
  const props = {
    body: [
      {
        cells: [
          {
            align: '',
            content: 'Column 1 - Row 1',
            scope: '',
            tag: 'td'
          },
          {
            align: 'center',
            content: 'Column 2 - Row 1',
            scope: '',
            tag: 'td'
          }
        ]
      }
    ],
    className: 'test-tbl-cls',
    foot: [
      {
        cells: [
          {
            align: 'right',
            content: 'Foot 1',
            scope: ''
          },
          {
            align: '',
            content: 'Foot 2',
            scope: ''
          }
        ]
      }
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }

  const {container} = render(<Table {...props} />)

  expect(container.firstElementChild).toHaveClass('test-tbl-cls')

  const row1 = container
    .querySelector('tbody')
    .querySelector('tr')
    .querySelectorAll('td')

  expect(row1[0]).toHaveTextContent('Column 1 - Row 1')
  expect(row1[0]).toHaveClass('text-left')

  expect(row1[1]).toHaveTextContent('Column 2 - Row 1')
  expect(row1[1]).toHaveClass('text-center')

  const foot = container
    .querySelector('tfoot')
    .querySelector('tr')
    .querySelectorAll('td')

  expect(foot[0]).toHaveTextContent('Foot 1')
  expect(foot[0]).toHaveClass('text-right')

  expect(foot[1]).toHaveTextContent('Foot 2')
  expect(foot[1]).toHaveClass('text-left')

  // Caption
  expect(container.querySelector('.caption')).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  )
})
