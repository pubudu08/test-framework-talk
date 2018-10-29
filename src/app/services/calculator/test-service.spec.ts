import * as calculator from  './test-service'

describe('Arithmetic Operations', () => {

  it('Should return 0 if empty string provided',  () => {
    expect(calculator.add('')).toBe(0)
  })

  it('Should return single provided element',  () => {
    expect(calculator.add('1')).toBe(1)
  })

  it('Should return expected sum',  () => {
    expect(calculator.add('1,1')).toBe(2)
  })

  it('Should accept \n as separator',  () => {
    expect(calculator.add('1\n2,3')).toBe(5)
  })

  it('Should accept a custom separator',  () => {
    expect(calculator.add('//;\n1,2;3')).toBe(6)
  })

  it('Should throw negative provided int',  () => {
    expect(calculator.add('-5,2,-10,9')).toThrow()
  })
})
