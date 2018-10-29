
import * as _ from 'lodash'

export const add = (value: string): number => {
  if (_.isEmpty(value)){
    return 0
  }
  return parseInt(value)
}
