import * as calculator from  './test-service'

describe('Arithmetic Operations', () => {

  it('Should return 0 if empty string provided',  () => {
    expect(calculator.add('')).toBe(0)
  })

  it('Should return single provided element',  () => {
    expect(calculator.add('1')).toBe(1)
  })
})
