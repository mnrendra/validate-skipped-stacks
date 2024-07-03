import { SKIPPED_STACK } from '@/consts'

import main from './main'

describe('Test `main` feature:', () => {
  it('Should return a valid skipped-stacks when given a skipped-stack!', () => {
    const received = main(SKIPPED_STACK)
    const expected = [SKIPPED_STACK]

    expect(received).toEqual(expected)
  })

  it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a string!', () => {
    const received = main(SKIPPED_STACK, 'any')
    const expected = [SKIPPED_STACK, 'any']

    expect(received).toEqual(expected)
  })

  it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a list of strings!', () => {
    const received = main(SKIPPED_STACK, ['any'])
    const expected = [SKIPPED_STACK, 'any']

    expect(received).toEqual(expected)
  })
})
