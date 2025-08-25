import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    //await reply.send({ root: true })
    return { root: true } //"hello shimon" 
  })
}

export default root;


