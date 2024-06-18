import { SKIPPED_STACK } from '@consts'

import mainStub from '@tests/stubs/main'

import main from './main'

describe('Test `main` feature:', () => {
  it('Should return a valid skipped-stacks when given a skipped-stack!', () => {
    const received = main(SKIPPED_STACK)
    const expected = mainStub()

    expect(received).toEqual(expected)
  })

  it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a string!', () => {
    const received = main(SKIPPED_STACK, 'any')
    const expected = [...mainStub(), 'any']

    expect(received).toEqual(expected)
  })

  it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a list of strings!', () => {
    const received = main(SKIPPED_STACK, ['any'])
    const expected = [...mainStub(), 'any']

    expect(received).toEqual(expected)
  })
})
