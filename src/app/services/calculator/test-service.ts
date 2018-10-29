import * as _ from 'lodash'

export const add = (value: string): number => {

  if (_.isEmpty(value)) {
    return 0
  }
  if (value.length === 1) {
    return parseInt(value)
  }
  const items = _.split(value, ',')

  let sum = 0

  items.map((item) => {
    sum += parseInt(item)
  })

  return sum

}
