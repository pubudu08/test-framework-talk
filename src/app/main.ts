import * as assert from 'assert'
import config from './shared/config'
import initializeApp from './server'
import { childLogger } from './shared/logger'

const logger = childLogger(__filename)

assert(process.env.TZ, 'TZ must be set prior to starting node')
assert.equal(process.env.TZ, 'UTC', 'TZ must be set to UTC')

const port = config('HTTP_PORT')
initializeApp().then((app) => {
  app.listen(port, () => {
    logger.info({ port }, `Express server running at http://0.0.0.0:${port}/`)
  })
})
