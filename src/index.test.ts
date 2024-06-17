import mainStub from '@tests/stubs/main'

import index from '.'

describe('Test the all features:', () => {
  describe('Test the `main` feature:', () => {
    it('Should return \'Hello, World!\' when given an empty argument!', () => {
      const result = index()
      expect(result).toBe(mainStub())
    })
  })
})
