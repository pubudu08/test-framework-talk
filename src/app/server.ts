import * as express from 'express'
import * as path from 'path'
import * as swaggerValidator from 'express-ajv-swagger-validation'
import * as helmet from 'helmet'
import * as routes from './routes'
import * as middlewares from './middlewares'
import * as expressHealthcheck from 'express-healthcheck'
import { metrics } from './shared'

// WARNING: in prod environment, make sure you set NODE_ENV environment variable to production
// otherwise you will pay with performance penalties
// see https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/ for
// more details

declare global {
  namespace Express {
    interface Request {
      traceToken: string
    }
  }
}

const initializeApp = async () => {
  // Wait for initializing swaggerValidator
  await swaggerValidator.init(path.join(__dirname, './swagger.yaml'), {
    beautifyErrors: true,
    firstError: false,
    makeOptionalAttributesNullable: true,
    contentTypeValidation: true,
    formats: [
      { name: 'double', pattern: /\d+\.(\d+)+/ },
      { name: 'int64', pattern: /^\d{1,19}$/ },
      { name: 'int32', pattern: /^\d{1,10}$/ },
    ]
  })

  const app: express.Express = express()

  app.use(helmet.hidePoweredBy())
  app.use(helmet.noSniff())
  app.use(helmet.hsts())
  app.use(helmet.noCache())
  app.use(helmet.referrerPolicy())

  app.use('/healthcheck', expressHealthcheck())
  app.use('/metrics', (req, res, next) => {
    res.contentType("text/plain")
    res.send(metrics.registry.metrics())
  })

  app.use(middlewares.auth())
  app.use(middlewares.trace)
  app.use('/', routes.setupRoutes(swaggerValidator))
  app.use(middlewares.errors)

  return app
}

export default initializeApp
