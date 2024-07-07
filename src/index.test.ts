import { SKIPPED_STACK } from '@/consts'

import { validateSkippedStacks } from '.'

describe('Test all features:', () => {
  describe('Test `validateSkippedStacks` feature:', () => {
    it('Should return a valid skipped-stacks when given a skipped-stack!', () => {
      const received = validateSkippedStacks(SKIPPED_STACK)
      const expected = [SKIPPED_STACK]

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a string!', () => {
      const received = validateSkippedStacks(SKIPPED_STACK, 'any')
      const expected = [SKIPPED_STACK, 'any']

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a list of strings!', () => {
      const received = validateSkippedStacks(SKIPPED_STACK, ['any'])
      const expected = [SKIPPED_STACK, 'any']

      expect(received).toEqual(expected)
    })
  })
})
