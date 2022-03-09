import Fastify from 'fastify'
import closeWithGrace, {Signals} from 'close-with-grace'
import app from './app'

const fastify = Fastify()

type CallbackOptions = {
  manual?: boolean
  err?: Error
  signal?: Signals
}

const closeFastify = async (cbOpts: CallbackOptions) => {
  if (cbOpts.err) {
    fastify.log.error(cbOpts.err)
  }
  await fastify.close()
}

const closeListeners = closeWithGrace({ delay: 500 }, closeFastify)

fastify.addHook('onClose', async (instance, done) => {
  closeListeners.uninstall()
  done()
})

fastify.register(app)

fastify.listen(3000, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
