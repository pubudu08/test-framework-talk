import * as _ from 'lodash'

export const add = (value: string): number => {
  const separators = [',','\n']
  const regexp = /^\/\/(\D+)\n/;

  if (_.isEmpty(value)) {
    return 0
  }
  if (value.length === 1) {
    return parseInt(value)
  }

  if (value.match(regexp)) {
    separators.push(value.match(regexp)[1]);
  }

  const items = _.split(value, new RegExp(`[${separators.join('')}]`)).
    filter(item => !isNaN(parseInt(item)))

  let sum = 0

  items.map((item) => {
    if (parseInt(item) < 0) {
      throw 'Negative numbers are not allowed'
    }
    sum += parseInt(item)
  })

  return sum

}
